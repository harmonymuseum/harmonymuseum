"""Copy the top menus from data/site.js (links + menus) into each page's HTML.

The live site draws its menus from data/site.js, so a menu edit there shows up straight away.
The copy in each page is what visitors without JavaScript (and a few search tools) see; run this
after changing menus to keep it current:  python3 tools/apply_menus.py
tools/check.py warns when the two have drifted apart. Idempotent.
"""
import html, json, os, re, subprocess

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
os.chdir(ROOT)
NAV = re.compile(r'(<nav id="(?:barNav|mainNav)">)(.*?)(</nav>)', re.S)
CTA = re.compile(r'\s*<a class="btn ctaRow"[^>]*>.*?</a>\s*', re.S)


def load_site():
    out = subprocess.run(["node", "-e", "const w={};global.window=w;require('./data/site.js');"
                          "process.stdout.write(JSON.stringify(w.SITE))"],
                         capture_output=True, text=True, timeout=20, check=True)
    return json.loads(out.stdout)


def menu_html(site, page, old_inner):
    """The nav's inner HTML for page: its links, then the home page's .ctaRow button if it had one."""
    links = "".join(f'<a href="{html.escape(site["links"][k][1])}">{html.escape(site["links"][k][0])}</a>'
                    for k in site["menus"][page] if k in site["links"])
    cta = CTA.search(old_inner)
    return links + (cta.group(0).strip() if cta else "")


def stamp(write=True):
    """Return the pages whose menu copy differs from data/site.js; rewrite them when write=True."""
    site, changed = load_site(), []
    for page in site.get("menus", {}):
        if not os.path.exists(page):
            continue
        s = open(page, encoding="utf-8").read()
        m = NAV.search(s)
        if not m:
            continue
        new = menu_html(site, page, m.group(2))
        if re.sub(r"\s+", "", new) == re.sub(r"\s+", "", m.group(2)):
            continue
        changed.append(page)
        if write:
            s = s[:m.start(2)] + new + s[m.end(2):]
            open(page, "w", encoding="utf-8", newline="\n").write(s)
    return changed


if __name__ == "__main__":
    pages = stamp()
    print(f"menus updated in {len(pages)} pages" + (": " + ", ".join(pages) if pages else ""))
