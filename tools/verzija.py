"""Doda oznake različic (?v=...) na povezave do datotek v assets/.

Oznaka je prstni odtis vsebine datoteke, zato se spremeni samo, ko se
spremeni datoteka. Brskalnik tako po objavi vedno naloži novo različico,
nespremenjene datoteke pa ostanejo v predpomnilniku.

Zaženi pred vsakim commitom (iz korena repozitorija):
    python tools/verzija.py
"""
import hashlib
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
REF = re.compile(r'(["\'])assets/([\w.-]+\.(?:css|js|svg|png))(?:\?v=[0-9a-f]+)?\1')


def odtis(ime):
    pot = ROOT / "assets" / ime
    if not pot.exists():
        return None
    # konci vrstic poenoteni, da Gitova pretvorba CRLF/LF ne spremeni oznake
    return hashlib.sha1(pot.read_bytes().replace(b"\r\n", b"\n")).hexdigest()[:8]


def main():
    spremenjene = []
    for html in sorted(ROOT.glob("*.html")):
        besedilo = html.read_text(encoding="utf-8")

        def zamenjaj(m):
            v = odtis(m.group(2))
            if not v:
                return m.group(0)
            q = m.group(1)
            return f"{q}assets/{m.group(2)}?v={v}{q}"

        novo = REF.sub(zamenjaj, besedilo)
        if novo != besedilo:
            html.write_text(novo, encoding="utf-8")
            spremenjene.append(html.name)
    print("Posodobljeno:", ", ".join(spremenjene) if spremenjene else "nič (oznake so že aktualne)")


if __name__ == "__main__":
    main()
