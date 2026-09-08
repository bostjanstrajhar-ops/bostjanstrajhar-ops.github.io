/* ============================================================
   Skupna skripta za vse strani: letnica, obnašanje glave,
   meni na telefonu in — kjer obstaja — kontaktni obrazec.
   Vprašalnika (test.html, test-predavanja.html) imata svojo skripto.
   ============================================================ */
(function () {
  "use strict";

  // Letnica v nogi.
  var leto = document.getElementById("leto");
  if (leto) leto.textContent = new Date().getFullYear();

  // Tanka črta pod glavo se pojavi ob odrsanju.
  var glava = document.getElementById("glava");
  if (glava) {
    var zadnje = null;
    window.addEventListener("scroll", function () {
      var stanje = window.scrollY > 12;
      if (stanje !== zadnje) {
        glava.classList.toggle("oblita", stanje);
        zadnje = stanje;
      }
    }, { passive: true });
  }

  // Meni na telefonu.
  var mGumb = document.getElementById("meni-gumb");
  var meni = document.getElementById("meni");
  if (mGumb && meni) {
    var preklopi = function (odpri) {
      mGumb.setAttribute("aria-expanded", odpri ? "true" : "false");
      mGumb.setAttribute("aria-label", odpri ? "Zapri meni" : "Odpri meni");
      meni.classList.toggle("odprt", odpri);
      document.body.classList.toggle("meni-odprt", odpri);
    };
    mGumb.addEventListener("click", function () {
      preklopi(mGumb.getAttribute("aria-expanded") !== "true");
    });
    meni.addEventListener("click", function (e) {
      if (e.target.closest("a")) preklopi(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mGumb.getAttribute("aria-expanded") === "true") {
        preklopi(false);
        mGumb.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1023) preklopi(false);
    });
  }

  // ---------- Kontaktni obrazec ----------
  // Sestavi e-sporočilo in odpre poštni program. Brez zunanjih storitev.
  var NASLOV = "bostjan@strajhar.si";
  var obrazec = document.getElementById("obrazec");
  if (!obrazec) return;

  obrazec.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = function (id) {
      var el = document.getElementById(id);
      return el ? (el.value || "").trim() : "";
    };

    var izbira = (document.getElementById("zanimanje") || {}).value || "Povpraševanje";
    var zadeva = izbira + (v("org") ? " — " + v("org") : "");
    var telo = [
      "Ime in priimek: " + v("ime"),
      "Organizacija: " + (v("org") || "—"),
      "E-pošta: " + v("posta"),
      "Telefon: " + (v("tel") || "—"),
      "Kaj vas zanima: " + izbira,
      "",
      "Kaj se dogaja:",
      v("sporocilo"),
      "",
      "—",
      "Poslano prek spletne strani."
    ].join("\r\n");

    var povezava = "mailto:" + NASLOV +
      "?subject=" + encodeURIComponent(zadeva) +
      "&body=" + encodeURIComponent(telo);

    var a = document.createElement("a");
    a.href = povezava;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { a.remove(); }, 1000);

    // Rezerva: če poštni program ni nastavljen, pokažemo besedilo za kopiranje.
    var rezerva = document.getElementById("rezerva");
    var polje = document.getElementById("rezerva-besedilo");
    if (rezerva && polje) {
      polje.value = "Za: " + NASLOV + "\nZadeva: " + zadeva + "\n\n" + telo.replace(/\r\n/g, "\n");
      rezerva.hidden = false;
    }
  });

  var kopiraj = document.getElementById("kopiraj");
  if (kopiraj) {
    kopiraj.addEventListener("click", function () {
      var polje = document.getElementById("rezerva-besedilo");
      polje.select();
      polje.setSelectionRange(0, polje.value.length);
      var uspelo = false;
      try { uspelo = document.execCommand("copy"); } catch (err) { uspelo = false; }
      if (!uspelo && navigator.clipboard) {
        navigator.clipboard.writeText(polje.value).then(function () {
          kopiraj.textContent = "Kopirano";
        }, function () {
          kopiraj.textContent = "Označite besedilo in kopirajte ročno";
        });
        return;
      }
      kopiraj.textContent = uspelo ? "Kopirano" : "Označite besedilo in kopirajte ročno";
    });
  }
})();
