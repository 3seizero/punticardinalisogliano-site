/* FUTURO IN CORSO! (Sogliano Cavour) — identità + tema + config tecnica.
   Contenuti testuali in ./content.js. */

export const project = {
  slug: 'sogliano',
  nomeProgetto: 'Futuro in Corso!',
  sottotitolo: 'Orientamento, Competenze e Opportunità per il Futuro',
  comune: 'Sogliano Cavour',
  cup: 'B39E25000240002',
  dominio: 'punticardinalisogliano.antform.it',
  shape: 'diamond', // shape decorativa (palette): Sogliano = rombo

  // Palette dalla Palette.pdf: verde scuro identitario
  theme: {
    '--c-primary': '#1C2E1C',
    '--c-primary-dark': '#122012',
    '--c-secondary': '#6AA84F',
    '--c-accent': '#F2A93B',
    '--c-bg': '#FFFFFF',
    '--c-bg-alt': '#EFF3EC',
    '--c-text': '#1B2B1B',
    '--c-text-soft': '#566356',
    '--c-border': '#DDE6DA',
    '--c-on-primary': '#FFFFFF',
  },

  assets: {
    logosHeader: '/brand/PCFW_Sogliano-logos-header.png',
    logoHeader: '/brand/logo.png',
    hero: '', // hero su verde pieno (foto hero dedicata: in attesa da Carlo)
    logosFooter: '', // striscia loghi footer rimossa (richiesta Carlo)
    favicon: '/favicon-96x96.png',
    icon: '/web-app-manifest-192x192.png',
  },

  form: {
    provider: 'php',
    endpoint: '/contact.php',
  },
}

export default project
