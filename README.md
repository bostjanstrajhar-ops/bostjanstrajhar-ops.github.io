# Spletna stran — mag. Boštjan Štrajhar

Statična spletna stran za GitHub Pages. Brez zunanjih storitev, brez piškotkov, brez sledenja.

## Pomembno: nobenih map

Vse datoteke ležijo druga ob drugi, brez podmap. To je namerno — tako se pri
nalaganju na GitHub ne more nič izgubiti. **Datotek ne premikajte v mape**,
sicer se povezave med njima prekinejo.

## Kako naložiti (celoten postopek)

1. Odprite repozitorij `bostjanstrajhar-ops.github.io` na github.com.
2. Kliknite **Add file → Upload files**.
3. Odprite mapo s temi datotekami, pritisnite **Ctrl+A** (označi vse) in jih
   povlecite v okno brskalnika. Naloženih mora biti **23 datotek**.
4. Spodaj kliknite **Commit changes**.
5. Počakajte minuto do dve, nato osvežite `https://bostjanstrajhar-ops.github.io/`
   s **Ctrl+F5** (osvežitev brez predpomnilnika).

Če se sprememba ne pokaže, poglejte v zavihek **Actions** — tam piše, ali je
objava uspela.

### Datoteka `.nojekyll`

Ta datoteka nima končnice in je v Raziskovalcu lahko skrita. Če je v seznamu
ne vidite, v Raziskovalcu vklopite **Pogled → Skriti elementi**. Brez nje
stran večinoma deluje, a je bolje, da je zraven.

## Kaj je kaj

```
index.html        začetna stran
test.html         Test organizacijske realnosti
slog.css          skupni slog obeh strani (barve, pisave, glava, meni, noga)
portret.jpg       fotografija v uvodu
portret-krog.jpg  fotografija v razdelku "Kdo sem"
*.woff2           pisave (14 datotek), shranjene lokalno namesto z Googla
robots.txt        dovoljenje iskalnikom + pot do sitemap.xml
sitemap.xml       seznam obeh strani za iskalnike
.nojekyll         pove GitHubu, naj datotek ne obdeluje dodatno
README.md         ta datoteka
```

**Kje kaj spremeniti.** Barvo, pisavo, meni ali nogo v `slog.css` — sprememba
velja za obe strani. Besedilo posamezne strani je v njeni datoteki. Vprašanja
testa, točkovanje in besedila štirih izidov so na dnu `test.html` v razdelku
`IZIDI`; vse je v slovenščini in opremljeno s komentarji.

## Kontaktni obrazec

Statična stran sama ne more pošiljati pošte. Gumb zato pripravi sporočilo in
odpre obiskovalčev poštni program. Če ta v brskalniku ni nastavljen, se pod
gumbom pokaže pripravljeno besedilo z gumbom za kopiranje ter e-naslov in
telefonska številka — obiskovalec torej nikoli ne ostane praznih rok.

## Po objavi

1. V [Google Search Console](https://search.google.com/search-console) dodajte
   `https://bostjanstrajhar-ops.github.io/` in oddajte `sitemap.xml`.
2. Preverite strukturirane podatke na
   [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
3. Naslov strani je zapisan v `index.html`, `test.html`, `sitemap.xml` in
   `robots.txt`. Če boste kdaj vzeli lastno domeno, ga je treba zamenjati povsod.

## Sprememba e-naslova ali telefona

E-naslov je v `index.html` na štirih mestih (povezave `mailto:` in
spremenljivka `NASLOV` v `<script>`). Telefon je na dveh mestih, v razdelku
*Prvi korak* in v rezervnem besedilu obrazca.
