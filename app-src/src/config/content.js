// =============================================================================
// FUTURO IN CORSO! — configurazione contenuti webapp
// Progetto "Punti Cardinali for Work" — PR Puglia FESR-FSE+ 2021-2027
// Comune di Sogliano Cavour — CUP B39E25000240002 — Coordinamento ANTFORM APS
// Schema condiviso e intercambiabile: vedi _content/SCHEMA.md
// -----------------------------------------------------------------------------
// DIFFERENZE NOTE DI QUESTO PROGETTO (vedi anche _content/REPORT.md):
// - Orientation Desk aperto MARTEDÌ e GIOVEDÌ (unico con questi giorni).
// - Forte caratterizzazione su PMI, green economy, autoimprenditorialità.
// - Orientation Lab: 3 AREE da 10 laboratori, SOLO NOMI (nessuna descrizione);
//   nessun paragrafo introduttivo ai lab nel documento sorgente.
// - Azione "Orientation Lab" in home con descrizione diversa dagli altri due
//   ("...sviluppo delle competenze, dell'innovazione e dell'occupabilità.").
// - Job Day in formato "3 percorsi tematici" (Suoni e Mestieri / Terra e
//   Talenti / Crea il tuo Futuro); NON ha liste "attività"/"obiettivi".
// - Puglia Donna Partecipa: 6 tematiche, nessun "format" nel documento.
// - Puglia Attrattiva #mareAsinistra: NESSUNA lista "obiettivi" nel documento.
// - Nessuna pagina "Opportunità" e nessun blocco "Coordinamento" dettagliato.
// - Servizi Orientation Desk: 7 voci senza descrizione.
// =============================================================================

export const content = {
  meta: {
    nomeProgetto: "Futuro in Corso!",
    sottotitolo: "Orientamento, Competenze e Opportunità per il Futuro",
    comune: "Sogliano Cavour",
    cup: "B39E25000240002",
    slug: "sogliano",
  },

  home: {
    hero: {
      titolo: "Futuro in Corso!",
      claim: "La webapp che connette persone, competenze, imprese e territorio",
      paragrafi: [
        "Uno spazio digitale dedicato all'orientamento, alla formazione e al lavoro, nato per accompagnare cittadini e cittadine nella scoperta delle opportunità professionali, formative e imprenditoriali offerte dal territorio di Sogliano Cavour.",
        "Attraverso servizi di orientamento, laboratori esperienziali, eventi dedicati all'incontro con il mondo del lavoro, attività di empowerment e iniziative di valorizzazione territoriale, il progetto sostiene giovani, adulti, donne e persone in cerca di occupazione nella costruzione del proprio percorso professionale.",
      ],
    },
    cta: [
      "Prenota una consulenza",
      "Scopri i laboratori",
      "Partecipa agli eventi",
      "Consulta le opportunità",
    ],
    cosaPuoiFare: [
      { titolo: "Orientarti", icon: "compass", desc: "Prenotare colloqui individuali e ricevere supporto personalizzato." },
      { titolo: "Partecipare", icon: "users", desc: "Iscriverti ai laboratori e agli eventi del progetto." },
      { titolo: "Informarti", icon: "info", desc: "Consultare opportunità formative e lavorative." },
      { titolo: "Connetterti", icon: "link", desc: "Entrare in contatto con imprese, servizi e reti territoriali." },
    ],
    azioni: [
      { titolo: "Orientation Desk", icon: "chat", desc: "Uno sportello permanente di orientamento e accompagnamento personalizzato." },
      { titolo: "Orientation Lab", icon: "book", desc: "30 laboratori esperienziali dedicati allo sviluppo delle competenze, dell'innovazione e dell'occupabilità." },
      { titolo: "Job Day", icon: "calendar", desc: "Eventi dedicati all'incontro tra persone, imprese e servizi per il lavoro." },
      { titolo: "Puglia Donna Partecipa", icon: "women", desc: "Percorsi di empowerment femminile e valorizzazione delle competenze." },
      { titolo: "Puglia Attrattiva #mareAsinistra", icon: "globe", desc: "Attività di promozione del territorio e delle sue opportunità oltre i confini comunali." },
    ],
  },

  progetto: {
    intro: {
      titolo: "Cos'è Futuro in Corso!",
      paragrafi: [
        "Futuro in Corso! è il progetto promosso dal Comune di Sogliano Cavour, soggetto beneficiario dell'Avviso Pubblico \"PUNTI CARDINALI FOR WORK – Punti di orientamento per la formazione e il lavoro\", finanziato nell'ambito del PR Puglia FESR-FSE+ 2021-2027 – Priorità Occupazione – Azione 5.1 Interventi per l'Occupazione.",
        "Il progetto nasce per rafforzare il sistema territoriale di orientamento, favorire l'incontro tra domanda e offerta di lavoro e accompagnare le persone nella costruzione di percorsi formativi e professionali coerenti con le vocazioni economiche, sociali e produttive del territorio.",
        "Le attività progettuali sono coordinate da ANTFORM APS – Ente del Terzo Settore, ente di formazione professionale accreditato dalla Regione Puglia e partner del progetto.",
      ],
    },
    "perchéNasce": {
      titolo: "Perché nasce",
      paragrafi: [
        "Sogliano Cavour è una comunità caratterizzata da una forte identità territoriale, da una vivace rete associativa e da un tessuto produttivo composto prevalentemente da piccole e medie imprese.",
        "Il progetto nasce per sostenere l'occupabilità delle persone, valorizzare le competenze presenti sul territorio, accompagnare le transizioni professionali e favorire nuove opportunità di sviluppo locale attraverso innovazione, sostenibilità e partecipazione attiva.",
      ],
    },
    aChiSiRivolge: {
      intro: "Il progetto è rivolto a persone di età compresa tra i 16 e i 65 anni, con particolare attenzione a:",
      categorie: [
        "giovani",
        "studenti",
        "NEET",
        "disoccupati",
        "inoccupati",
        "donne",
        "persone inattive",
        "immigrati",
        "soggetti fragili",
        "lavoratori in fase di riqualificazione professionale",
      ],
    },
    visione: {
      titolo: "Una comunità che costruisce opportunità",
      paragrafi: [
        "Futuro in Corso! intende costruire un sistema territoriale stabile di orientamento capace di mettere in relazione cittadini, istituzioni, imprese, enti di formazione e realtà sociali.",
        "Attraverso un approccio partecipativo e innovativo, il progetto accompagna le persone nelle scelte formative e professionali, valorizzando competenze, talenti e opportunità presenti sul territorio.",
      ],
    },
    obiettivi: [
      "rafforzare il sistema locale di orientamento",
      "migliorare l'accesso alle informazioni e ai servizi",
      "favorire l'occupabilità",
      "accompagnare le transizioni scuola-lavoro",
      "promuovere l'inclusione sociale",
      "sostenere l'autoimpiego e l'imprenditorialità",
      "valorizzare le eccellenze economiche, sociali e culturali di Sogliano Cavour",
    ],
    assetStrategici: [
      { titolo: "Green Economy", icon: "leaf", desc: "Agricoltura sostenibile, economia circolare e sviluppo locale." },
      { titolo: "Competenze Digitali", icon: "digital", desc: "Tecnologie, innovazione e strumenti per il lavoro del futuro." },
      { titolo: "PMI e Imprese Locali", icon: "briefcase", desc: "Valorizzazione del tessuto produttivo e imprenditoriale." },
      { titolo: "Autoimprenditorialità", icon: "rocket", desc: "Creazione di nuove opportunità professionali e d'impresa." },
      { titolo: "Inclusione Sociale", icon: "heart", desc: "Partecipazione attiva e cittadinanza responsabile." },
      { titolo: "Comunità", icon: "users", desc: "Reti territoriali, collaborazione e sviluppo condiviso." },
    ],
    coordinamento: {
      ente: "ANTFORM APS – Ente del Terzo Settore",
      descrizione: "",
      "attività": [],
    },
  },

  orientationDesk: {
    intro: {
      titolo: "Lo sportello di orientamento",
      paragrafi: [
        "L'Orientation Desk rappresenta il punto di accesso ai servizi del progetto.",
        "Uno spazio dedicato all'ascolto, all'orientamento e all'accompagnamento personalizzato.",
      ],
    },
    dove: {
      nome: "Biblioteca Comunale Luigi Diso",
      indirizzo: "Via San Lorenzo n. 10, 73010 Sogliano Cavour (LE)",
    },
    quando: [
      { giorno: "Martedì", orari: ["09:30 – 12:30", "16:00 – 19:00"] },
      { giorno: "Giovedì", orari: ["09:30 – 12:30", "16:00 – 19:00"] },
    ],
    servizi: [
      { nome: "Accoglienza e primo orientamento", icon: "chat", desc: "" },
      { nome: "Bilancio delle competenze", icon: "clipboard", desc: "" },
      { nome: "Piano di sviluppo professionale", icon: "chart", desc: "" },
      { nome: "Ricerca attiva del lavoro", icon: "search", desc: "" },
      { nome: "Accesso alla formazione", icon: "book", desc: "" },
      { nome: "Supporto all'autoimpiego", icon: "rocket", desc: "" },
      { nome: "Accompagnamento ai servizi territoriali", icon: "link", desc: "" },
    ],
    cta: [],
  },

  orientationLab: {
    titolo: "30 LABORATORI PER ORIENTARSI, CRESCERE E COSTRUIRE IL PROPRIO FUTURO",
    intro: "",
    aree: [
      {
        titolo: "AREA 1 – GREEN ECONOMY E SVILUPPO SOSTENIBILE",
        laboratori: [
          { nome: "Green Jobs e Professioni del Futuro", icon: "sprout", desc: "" },
          { nome: "Agricoltura Sostenibile e Innovazione", icon: "tractor", desc: "" },
          { nome: "Filiere Corte e Territorio", icon: "supply", desc: "" },
          { nome: "Economia Circolare", icon: "recycle", desc: "" },
          { nome: "Turismo Responsabile", icon: "mappin", desc: "" },
          { nome: "Orti Sociali e Comunità", icon: "leaf", desc: "" },
          { nome: "Energie Rinnovabili e Territorio", icon: "bulb", desc: "" },
          { nome: "Ambiente e Occupazione", icon: "tree", desc: "" },
          { nome: "Innovazione nelle Produzioni Locali", icon: "gear", desc: "" },
          { nome: "Lavorare nella Transizione Ecologica", icon: "globe", desc: "" },
        ],
      },
      {
        titolo: "AREA 2 – COMPETENZE DIGITALI E INNOVAZIONE",
        laboratori: [
          { nome: "Digital Skills per il Lavoro", icon: "digital", desc: "" },
          { nome: "Comunicazione Digitale", icon: "megaphone", desc: "" },
          { nome: "Social Media e Professioni Emergenti", icon: "hashtag", desc: "" },
          { nome: "Marketing Territoriale", icon: "target", desc: "" },
          { nome: "E-commerce e PMI", icon: "briefcase", desc: "" },
          { nome: "Personal Branding", icon: "badge", desc: "" },
          { nome: "Strumenti Digitali per la Ricerca del Lavoro", icon: "search", desc: "" },
          { nome: "Intelligenza Artificiale e Nuove Opportunità", icon: "bulb", desc: "" },
          { nome: "CV Digitale e Networking", icon: "link", desc: "" },
          { nome: "Tecnologie per il Futuro", icon: "gear", desc: "" },
        ],
      },
      {
        titolo: "AREA 3 – IMPRENDITORIALITÀ E CRESCITA PERSONALE",
        laboratori: [
          { nome: "Autoimpiego e Start Up", icon: "rocket", desc: "" },
          { nome: "Idee che Diventano Impresa", icon: "bulb", desc: "" },
          { nome: "Business Planning", icon: "chart", desc: "" },
          { nome: "Soft Skills per il Lavoro", icon: "puzzle", desc: "" },
          { nome: "Team Working e Leadership", icon: "users", desc: "" },
          { nome: "Problem Solving", icon: "gear", desc: "" },
          { nome: "Competenze Trasversali", icon: "star", desc: "" },
          { nome: "Lavoro e Inclusione Sociale", icon: "heart", desc: "" },
          { nome: "Costruire il Proprio Futuro", icon: "compass", desc: "" },
          { nome: "Impresa e Innovazione Sociale", icon: "handshake", desc: "" },
        ],
      },
    ],
  },

  jobDay: {
    titolo: "Tre percorsi per scoprire il proprio futuro",
    intro: "",
    percorsi: [
      { nome: "Suoni e Mestieri", icon: "tool", desc: "Tradizione, cultura e nuove opportunità professionali." },
      { nome: "Terra e Talenti", icon: "leaf", desc: "Green economy, agricoltura sostenibile e sviluppo locale." },
      { nome: "Crea il tuo Futuro", icon: "rocket", desc: "Innovazione, impresa e nuove professioni." },
    ],
    "attività": [],
    obiettivi: [],
  },

  donnaPartecipa: {
    titolo: "Donne protagoniste del cambiamento",
    intro: "Percorso dedicato all'autonomia, all'occupabilità e alla partecipazione attiva delle donne.",
    tematiche: [
      "Empowerment e Leadership Femminile",
      "Conciliazione Vita-Lavoro",
      "Donne e Innovazione",
      "Autoimprenditorialità Femminile",
      "Competenze Digitali",
      "Occupabilità e Carriere",
    ],
    format: "",
  },

  mareASinistra: {
    titolo: "Sogliano Cavour si racconta oltre i propri confini",
    intro: "Puglia Attrattiva #mareAsinistra è la linea di intervento dedicata alla promozione delle eccellenze culturali, sociali, produttive e imprenditoriali del territorio.",
    obiettivi: [],
    ambiti: [
      "Cultura e tradizioni locali",
      "Associazionismo e comunità",
      "Imprese e artigianato",
      "Innovazione sociale",
      "Green economy",
      "Produzioni locali",
      "Turismo sostenibile",
    ],
  },

  opportunita: {
    titolo: "Opportunità",
    voci: [],
  },

  contatti: {
    nomeProgetto: "FUTURO IN CORSO!",
    orientationDesk: {
      nome: "Biblioteca Comunale Luigi Diso",
      indirizzo: "Via San Lorenzo n. 10, 73010 Sogliano Cavour (LE)",
    },
    apertura: {
      giorni: "Martedì e Giovedì",
      orari: ["09:30 – 12:30", "16:00 – 19:00"],
    },
    soggettoBeneficiario: "Comune di Sogliano Cavour",
    coordinamento: "ANTFORM APS – Ente del Terzo Settore",
    cup: "B39E25000240002",
  },

  footerIstituzionale: {
    testo: "Progetto finanziato nell'ambito dell'Avviso Pubblico \"PUNTI CARDINALI FOR WORK – Punti di orientamento per la formazione e il lavoro\", PR Puglia FESR-FSE+ 2021-2027 – Azione 5.1 Interventi per l'Occupazione.",
    soggettoBeneficiario: "Comune di Sogliano Cavour",
    coordinamento: "ANTFORM APS – Ente del Terzo Settore",
    cup: "B39E25000240002",
  },
};

export default content;
