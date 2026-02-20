# Esercizio di oggi: DC Comics (React Components)
### nome repo: react-dc-comics

---

## Esercizio 1

![DESCRIZIONE](https://img.shields.io/badge/DESCRIZIONE-0282FA?style=for-the-badge)

Create un nuovo progetto React e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Per oggi diamo priorità alla struttura: quando è tutto bello solido, passiamo al CSS!

![BONUS ✅ COMPLETATO](https://img.shields.io/badge/BONUS_✅_COMPLETATO-28a745?style=for-the-badge)

Creare un componente aggiuntivo per gestire la fascia azzurra con le icone.

---

![OBIETTIVO](https://img.shields.io/badge/OBIETTIVO-0282FA?style=for-the-badge)

![dc-comics-empty-layout.png](<https://i.ibb.co/RpBNkskJ/dc-comics-empty-layout.png>)

---

## Esercizio 2

![DESCRIZIONE](https://img.shields.io/badge/DESCRIZIONE-0282FA?style=for-the-badge)

Lavoriamo sul nostro sito dei fumetti per dinamicizzare sia la navbar che i fumetti, sfruttando l'iterazione con JSX.

- Per i fumetti, potrete utilizzare i dati in allegato
- Per la navbar, ragionate su quale possa essere la struttura dati corretta

Una volta inseriti tutti i contenuti dinamicamente, completate il vostro layout e rifinite i dettagli col CSS.

![BONUS](https://img.shields.io/badge/BONUS-555555?style=for-the-badge)

Immaginare e creare la struttura dati per i link nel footer e realizzarli tramite l'iterazione!

---

![NUOVO OBIETTIVO](https://img.shields.io/badge/NUOVO_OBIETTIVO-0282FA?style=for-the-badge)

![dc-comics-layout-2.png](<https://i.ibb.co/9kbfyW0M/screenshot.png>)

---

## Dettagli tecnici

![SCAFFOLDING](https://img.shields.io/badge/SCAFFOLDING-0282FA?style=for-the-badge)

1. Header
   - Nav
     - Logo
2. Main/Content
3. Footer
   - Banda blu (CTA Zone)
   - Footer Links
   - Bottom Footer
     - Signup button
     - Social links

---

![DESIGN TOKENS](https://img.shields.io/badge/DESIGN_TOKENS-0282FA?style=for-the-badge)

**Colori:**
- ![#0282FA](https://img.shields.io/badge/-%230282FA-0282FA?style=flat-square) Blue CTA / active links / border signup-button: `rgb(2, 130, 250)`
- ![#1C1C1C](https://img.shields.io/badge/-%231C1C1C-1C1C1C?style=flat-square) Main background: `rgb(28, 28, 28)`
- ![#303030](https://img.shields.io/badge/-%23303030-303030?style=flat-square) Bottom footer background: `rgb(48, 48, 48)`
- ![#525252](https://img.shields.io/badge/-%23525252-525252?style=flat-square) Nav text: `rgb(82, 82, 82)`
- ![#818182](https://img.shields.io/badge/-%23818182-818182?style=flat-square) Bottom footer links: `rgb(129, 129, 130)`

**Font:** Open Sans

**Background images:**

<a href="https://imgbb.com/"><img src="https://i.ibb.co/8pb2JTN/dc-logo-bg.png" alt="dc logo bg" border="0"></a>
<a href="https://ibb.co/Tq04ykmc"><img src="https://i.ibb.co/sJ1K72yj/footer-bg.jpg" alt="footer-bg" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/FLSLCD4N/dc-logo.png" alt="dc logo" border="0"></a>

**File CSS:**
- utilities (variabili colori, background images, font size) → `utilities.css`
- css base (body e critical css) → `critical.css`
- css specifici per ogni componente → `$component.css`

---

![NOTE](https://img.shields.io/badge/NOTE-555555?style=for-the-badge)

Il font utilizzato è Open Sans

---

![TECNOLOGIE USATE](https://img.shields.io/badge/TECNOLOGIE_USATE-0282FA?style=for-the-badge)

![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232A&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&style=for-the-badge)

---

![COME AVVIARE](https://img.shields.io/badge/COME_AVVIARE_IL_PROGETTO-0282FA?style=for-the-badge)

```bash
git clone <repo-url>
npm install
npm run dev
```

---

![VERSIONE ONLINE](https://img.shields.io/badge/VERSIONE_ONLINE-00C7B7?logo=netlify&logoColor=white&style=for-the-badge)

[https://react-dc-comic.netlify.app/](https://react-dc-comic.netlify.app/)
