# Spletna stran — mag. Boštjan Štrajhar

Statična spletna stran, pripravljena za GitHub Pages. Brez zunanjih storitev, brez piškotkov, brez sledenja.

## Datoteke

```
index.html             začetna stran
test/index.html        Test organizacijske realnosti
slog.css               skupni slog obeh strani (barve, pisave, glava, meni, noga)
slike/                 fotografiji
pisave/                pisave, shranjene lokalno (brez Google Fonts)
robots.txt             dovoljenje iskalnikom + pot do sitemap.xml
sitemap.xml            seznam strani za iskalnike
.nojekyll              pove GitHubu, naj datotek ne obdeluje dodatno
README.md              ta datoteka
```

**Kje kaj spremeniti.** Barvo, pisavo, meni ali nogo spremenite v `slog.css` in
sprememba velja za obe strani. Besedilo posamezne strani je v njeni datoteki.
Vprašanja testa, točkovanje in besedila štirih izidov so na dnu `test/index.html`
v razdelku `IZIDI` — vse je v slovenščini in opremljeno s komentarji.

## Po objavi naredite še to

1. Odprite [Google Search Console](https://search.google.com/search-console), dodajte
   `https://bostjanstrajhar-ops.github.io/` in oddajte `sitemap.xml`. Brez tega lahko traja
   tedne, preden Google stran sploh obišče.
2. Preverite strukturirane podatke na
   [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
3. Naslov strani je zapisan na več mestih (`canonical`, `og:url`, `og:image`, `sitemap.xml`,
   `robots.txt` in v bloku `application/ld+json` na dnu `index.html`). **Če boste kdaj vzeli
   lastno domeno, jih je treba zamenjati povsod** — sicer bo Google mislil, da sta strani dve.

## Objava na GitHub Pages — po korakih

1. Na github.com ustvarite nov repozitorij. Ime naj bo `bostjanstrajhar.github.io`
   (namesto `bostjanstrajhar` vpišite svoje uporabniško ime na GitHubu).
   Repozitorij mora biti **Public**.
2. Na strani repozitorija kliknite **Add file → Upload files**.
3. Povlecite vanj vse datoteke iz te mape, skupaj z mapo `slike`.
4. Kliknite **Commit changes**.
5. Pojdite v **Settings → Pages**. Pod *Source* izberite **Deploy from a branch**,
   veja `main`, mapa `/ (root)`. Shranite.
6. Počakajte minuto ali dve. Stran bo na naslovu
   `https://vase-uporabnisko-ime.github.io`.

Če boste repozitorij poimenovali drugače (npr. `stran`), bo naslov
`https://vase-uporabnisko-ime.github.io/stran/`. Vse povezave v strani so relativne,
zato deluje v obeh primerih.

## Lastna domena (kadar jo boste imeli)

1. V mapo dodajte datoteko `CNAME` z eno samo vrstico, npr. `strajhar.si`.
2. Pri ponudniku domene nastavite zapise A na naslove GitHuba:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. V **Settings → Pages** vpišite domeno in vklopite **Enforce HTTPS**.

## Razdelki po vrsti

1. Uvod
2. Kdaj me pokličete
3. Kaj pravzaprav delam
4. Kako delam (pet korakov, zakaj ne morete sami, merilo, trajanje)
5. Iz prakse (dva primera)
6. In umetna inteligenca?
7. Česa pri meni ne bo
8. Za javne naročnike
9. Kdo sem
10. Prvi korak (kontakt)

Nobenih oznak `[DOPOLNI]` ni več — vse je izpolnjeno.

Imena občin namenoma niso navedena; v življenjepisu piše »občinska uprava«.
Če se boste kdaj odločili drugače, jih dodate v razdelku *Kdo sem*.

## Kontaktni obrazec

Obrazec ne pošilja pošte sam — statične strani tega ne zmorejo. Ko obiskovalec klikne
gumb, se odpre njegov e-poštni program z že izpolnjenim sporočilom, naslovljenim na
`bostjan.strajhar@gmail.com`. Nič se ne shrani in nič se ne pošlje brez njegove potrditve.

Če boste kdaj želeli, da sporočila prihajajo naravnost v nabiralnik brez odpiranja
poštnega programa, je za to potrebna brezplačna zunanja storitev (npr. Formspree).
Takrat je treba zamenjati le nekaj vrstic v `<script>` na dnu datoteke.

## Sprememba e-naslova ali telefona

E-naslov je zapisan na treh mestih v `index.html` (dvakrat kot povezava `mailto:`
in enkrat v spremenljivki `NASLOV` v `<script>`). Telefon je zapisan enkrat,
v razdelku *Prvi korak*.
