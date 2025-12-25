// Year
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Simple i18n (EN/LV/PL/NL/FR)
const dict = {
  en: {
    brand_sub: "Engineering & construction consulting",
    nav_services: "Services",
    nav_why: "Why us",
    nav_process: "Process",
    nav_contact: "Contact",

    h1: "Engineering & construction consulting for corporate clients",
    lead: "We provide project coordination, technical analysis, design consultancy, feasibility studies, cost estimation, and preparation of technical documentation — strictly as a consulting entity.",
    cta_call: "Request a call",
    cta_email: "Email us",
    chip1: "Documentation-first",
    chip2: "Corporate focus (B2B)",
    chip3: "Clear scope & deliverables",
    compliance_title: "Compliance note:",
    compliance_text: "Consulting only — no construction works, procurement, or trading activities.",
    note: "Operating within the European Union on a contractual basis.",

    details_title: "Company details",
    d_name_k: "Company",
    d_form_k: "Legal form",
    d_reg_k: "Register",
    d_addr_k: "Legal address",
    d_vat_k: "EU VAT",
    vat_link: "Check in VIES",

    s_title: "Services",
    s1_t: "Project coordination",
    s1_p: "Coordination support, timelines, stakeholder alignment, and structured reporting.",
    s2_t: "Technical analysis",
    s2_p: "Assessment of options, constraints, and risk considerations for decision-making.",
    s3_t: "Design consultancy",
    s3_p: "Design input, requirements clarification, and technical guidance for consistent outcomes.",
    s4_t: "Feasibility studies",
    s4_p: "Feasibility validation with assumptions, scenarios, and practical recommendations.",
    s5_t: "Cost estimation",
    s5_p: "Cost estimation and budgeting logic with transparent structure and rationale.",
    s6_t: "Technical documentation",
    s6_p: "Preparation of technical documentation packages suitable for corporate workflows.",

    w_title: "Why Baltvik",
    w1: "Consulting-only model: no conflicts from procurement or trading",
    w2: "Clear scope definition and deliverables before engagement",
    w3: "Structured documentation suitable for banks, partners, and audits",
    w4: "Professional communication and cross-border mindset",

    p_title: "Process",
    p1_t: "Intro call",
    p1_p: "15–30 minutes to understand goals, constraints, and timeline expectations.",
    p2_t: "Scope & proposal",
    p2_p: "We define deliverables, timeline, and the engagement format.",
    p3_t: "Delivery",
    p3_p: "Consulting execution with checkpoints, updates, and documentation.",
    p4_t: "Handover",
    p4_p: "Final package and clear next-step recommendations.",

    c_title: "Contact",
    c_sub: "Send a message — we respond within 24 hours on business days.",
    c_details: "Legal & disclosure",
    c_disclosure: "The company provides engineering and construction consulting and advisory services to corporate clients only.",

    f_rights: "All rights reserved."
  },

  lv: {
    brand_sub: "Inženiertehniskās un būvniecības konsultācijas",
    nav_services: "Pakalpojumi",
    nav_why: "Kāpēc mēs",
    nav_process: "Process",
    nav_contact: "Kontakti",

    h1: "Inženiertehniskās un būvniecības konsultācijas korporatīvajiem klientiem",
    lead: "Sniedzam projektu koordinēšanu, tehnisko analīzi, dizaina konsultācijas, priekšizpēti, izmaksu aprēķinus un tehniskās dokumentācijas sagatavošanu — tikai kā konsultāciju uzņēmums.",
    cta_call: "Pieteikt zvanu",
    cta_email: "Rakstīt e-pastu",
    chip1: "Dokumentācija pirmajā vietā",
    chip2: "B2B fokusā",
    chip3: "Skaidrs tvērums un rezultāti",
    compliance_title: "Atbilstības piezīme:",
    compliance_text: "Tikai konsultācijas — bez būvdarbiem, iepirkumiem vai tirdzniecības.",
    note: "Darbojamies Eiropas Savienībā uz līgumattiecību pamata.",

    details_title: "Uzņēmuma rekvizīti",
    d_name_k: "Uzņēmums",
    d_form_k: "Juridiskā forma",
    d_reg_k: "Reģistrs",
    d_addr_k: "Juridiskā adrese",
    d_vat_k: "ES PVN",
    vat_link: "Pārbaudīt VIES",

    s_title: "Pakalpojumi",
    s1_t: "Projektu koordinēšana",
    s1_p: "Atbalsts koordinēšanā, termiņos, iesaistīto pušu saskaņošanā un atskaitēs.",
    s2_t: "Tehniskā analīze",
    s2_p: "Risinājumu izvērtēšana, ierobežojumi un riski lēmumu pieņemšanai.",
    s3_t: "Dizaina konsultācijas",
    s3_p: "Prasību precizēšana un tehniskās vadlīnijas konsekventam rezultātam.",
    s4_t: "Priekšizpēte (feasibility)",
    s4_p: "Iespējamības izvērtējums ar pieņēmumiem, scenārijiem un ieteikumiem.",
    s5_t: "Izmaksu aprēķini",
    s5_p: "Izmaksu struktūra un budžetēšana ar caurspīdīgu pamatojumu.",
    s6_t: "Tehniskā dokumentācija",
    s6_p: "Dokumentācijas paketes sagatavošana korporatīvajām vajadzībām.",

    w_title: "Kāpēc Baltvik",
    w1: "Tikai konsultācijas: nav interešu konflikta ar iepirkumiem vai tirdzniecību",
    w2: "Skaidrs tvērums un rezultāti pirms sadarbības uzsākšanas",
    w3: "Strukturēta dokumentācija bankām, partneriem un auditam",
    w4: "Profesionāla komunikācija un pārrobežu domāšana",

    p_title: "Process",
    p1_t: "Ievadzvans",
    p1_p: "15–30 minūtes, lai saprastu mērķus, ierobežojumus un termiņus.",
    p2_t: "Tvērums un piedāvājums",
    p2_p: "Definējam rezultātus, termiņus un sadarbības formātu.",
    p3_t: "Izpilde",
    p3_p: "Konsultāciju darbs ar kontrolpunktiem, atjauninājumiem un dokumentāciju.",
    p4_t: "Nodošana",
    p4_p: "Gala pakete un ieteikumi nākamajiem soļiem.",

    c_title: "Kontakti",
    c_sub: "Nosūtiet ziņu — atbildam 24 stundu laikā darba dienās.",
    c_details: "Juridiskā informācija",
    c_disclosure: "Uzņēmums sniedz inženiertehniskās un būvniecības konsultācijas korporatīvajiem klientiem.",

    f_rights: "Visas tiesības aizsargātas."
  },

  pl: {
    brand_sub: "Konsulting inżynierski i budowlany",
    nav_services: "Usługi",
    nav_why: "Dlaczego my",
    nav_process: "Proces",
    nav_contact: "Kontakt",

    h1: "Konsulting inżynierski i budowlany dla klientów korporacyjnych",
    lead: "Świadczymy koordynację projektów, analizę techniczną, konsultacje projektowe, studia wykonalności, szacowanie kosztów oraz przygotowanie dokumentacji technicznej — wyłącznie jako podmiot konsultingowy.",
    cta_call: "Zamów rozmowę",
    cta_email: "Napisz do nas",
    chip1: "Priorytet dokumentacji",
    chip2: "Skupienie na korporacjach (B2B)",
    chip3: "Jasny zakres i rezultaty",
    compliance_title: "Uwaga dotycząca zgodności:",
    compliance_text: "Tylko konsulting — bez prac budowlanych, zamówień publicznych ani działalności handlowej.",
    note: "Działamy w Unii Europejskiej na podstawie umów.",

    details_title: "Dane firmy",
    d_name_k: "Firma",
    d_form_k: "Forma prawna",
    d_reg_k: "Rejestr",
    d_addr_k: "Adres prawny",
    d_vat_k: "VAT UE",
    vat_link: "Sprawdź w VIES",

    s_title: "Usługi",
    s1_t: "Koordynacja projektów",
    s1_p: "Wsparcie w koordynacji, harmonogramach, uzgadnianiu interesariuszy i strukturalnym raportowaniu.",
    s2_t: "Analiza techniczna",
    s2_p: "Ocena opcji, ograniczeń i ryzyk w celu podejmowania decyzji.",
    s3_t: "Konsultacje projektowe",
    s3_p: "Wkład projektowy, wyjaśnianie wymagań i wskazówki techniczne dla spójnych rezultatów.",
    s4_t: "Studia wykonalności",
    s4_p: "Walidacja wykonalności z założeniami, scenariuszami i praktycznymi rekomendacjami.",
    s5_t: "Szacowanie kosztów",
    s5_p: "Szacowanie kosztów i logika budżetowania z przejrzystą strukturą i uzasadnieniem.",
    s6_t: "Dokumentacja techniczna",
    s6_p: "Przygotowanie pakietów dokumentacji technicznej odpowiednich dla przepływów pracy korporacyjnych.",

    w_title: "Dlaczego Baltvik",
    w1: "Model wyłącznie konsultingowy: brak konfliktów z zamówieniami publicznymi lub handlem",
    w2: "Jasna definicja zakresu i rezultatów przed rozpoczęciem współpracy",
    w3: "Strukturalna dokumentacja odpowiednia dla banków, partnerów i audytów",
    w4: "Profesjonalna komunikacja i nastawienie międzynarodowe",

    p_title: "Proces",
    p1_t: "Rozmowa wstępna",
    p1_p: "15–30 minut, aby zrozumieć cele, ograniczenia i oczekiwania dotyczące harmonogramu.",
    p2_t: "Zakres i oferta",
    p2_p: "Definiujemy rezultaty, harmonogram i format współpracy.",
    p3_t: "Realizacja",
    p3_p: "Wykonanie konsultingu z punktami kontrolnymi, aktualizacjami i dokumentacją.",
    p4_t: "Przekazanie",
    p4_p: "Pakiet końcowy i jasne rekomendacje dotyczące następnych kroków.",

    c_title: "Kontakt",
    c_sub: "Wyślij wiadomość — odpowiadamy w ciągu 24 godzin w dni robocze.",
    c_details: "Informacje prawne",
    c_disclosure: "Firma świadczy usługi konsultingowe i doradcze w zakresie inżynierii i budownictwa wyłącznie dla klientów korporacyjnych.",

    f_rights: "Wszelkie prawa zastrzeżone."
  },

  nl: {
    brand_sub: "Technisch en bouwadvies",
    nav_services: "Diensten",
    nav_why: "Waarom wij",
    nav_process: "Proces",
    nav_contact: "Contact",

    h1: "Technisch en bouwadvies voor zakelijke klanten",
    lead: "Wij bieden projectcoördinatie, technische analyse, ontwerpadvies, haalbaarheidsstudies, kostenramingen en voorbereiding van technische documentatie — uitsluitend als adviesbureau.",
    cta_call: "Bel terug verzoeken",
    cta_email: "E-mail ons",
    chip1: "Documentatie eerst",
    chip2: "Zakelijke focus (B2B)",
    chip3: "Duidelijke scope en deliverables",
    compliance_title: "Compliance opmerking:",
    compliance_text: "Alleen advies — geen bouwwerkzaamheden, inkoop of handelsactiviteiten.",
    note: "Wij opereren binnen de Europese Unie op contractuele basis.",

    details_title: "Bedrijfsgegevens",
    d_name_k: "Bedrijf",
    d_form_k: "Rechtsvorm",
    d_reg_k: "Register",
    d_addr_k: "Juridisch adres",
    d_vat_k: "EU BTW",
    vat_link: "Controleren in VIES",

    s_title: "Diensten",
    s1_t: "Projectcoördinatie",
    s1_p: "Coördinatieondersteuning, tijdlijnen, afstemming met stakeholders en gestructureerde rapportage.",
    s2_t: "Technische analyse",
    s2_p: "Beoordeling van opties, beperkingen en risicoverwegingen voor besluitvorming.",
    s3_t: "Ontwerpadvies",
    s3_p: "Ontwerpinput, verduidelijking van vereisten en technische begeleiding voor consistente resultaten.",
    s4_t: "Haalbaarheidsstudies",
    s4_p: "Haalbaarheidsvalidatie met aannames, scenario's en praktische aanbevelingen.",
    s5_t: "Kostenraming",
    s5_p: "Kostenraming en budgetteringslogica met transparante structuur en onderbouwing.",
    s6_t: "Technische documentatie",
    s6_p: "Voorbereiding van technische documentatiepakketten geschikt voor zakelijke workflows.",

    w_title: "Waarom Baltvik",
    w1: "Alleen-adviesmodel: geen conflicten door inkoop of handel",
    w2: "Duidelijke scopedefinitie en deliverables voorafgaand aan engagement",
    w3: "Gestructureerde documentatie geschikt voor banken, partners en audits",
    w4: "Professionele communicatie en grensoverschrijdende mindset",

    p_title: "Proces",
    p1_t: "Introductiegesprek",
    p1_p: "15–30 minuten om doelen, beperkingen en tijdlijnverwachtingen te begrijpen.",
    p2_t: "Scope en voorstel",
    p2_p: "Wij definiëren deliverables, tijdlijn en het engagementformaat.",
    p3_t: "Levering",
    p3_p: "Adviesuitvoering met checkpoints, updates en documentatie.",
    p4_t: "Overdracht",
    p4_p: "Eindpakket en duidelijke aanbevelingen voor volgende stappen.",

    c_title: "Contact",
    c_sub: "Stuur een bericht — wij reageren binnen 24 uur op werkdagen.",
    c_details: "Juridische informatie",
    c_disclosure: "Het bedrijf biedt technisch en bouwadvies en adviesdiensten uitsluitend aan zakelijke klanten.",

    f_rights: "Alle rechten voorbehouden."
  },

  fr: {
    brand_sub: "Conseil en ingénierie et construction",
    nav_services: "Services",
    nav_why: "Pourquoi nous",
    nav_process: "Processus",
    nav_contact: "Contact",

    h1: "Conseil en ingénierie et construction pour clients d'entreprise",
    lead: "Nous fournissons la coordination de projets, l'analyse technique, le conseil en conception, les études de faisabilité, l'estimation des coûts et la préparation de la documentation technique — strictement en tant qu'entité de conseil.",
    cta_call: "Demander un appel",
    cta_email: "Nous écrire",
    chip1: "Documentation d'abord",
    chip2: "Focus entreprise (B2B)",
    chip3: "Portée et livrables clairs",
    compliance_title: "Note de conformité :",
    compliance_text: "Conseil uniquement — pas de travaux de construction, d'achats ou d'activités commerciales.",
    note: "Opération au sein de l'Union européenne sur une base contractuelle.",

    details_title: "Détails de l'entreprise",
    d_name_k: "Entreprise",
    d_form_k: "Forme juridique",
    d_reg_k: "Registre",
    d_addr_k: "Adresse légale",
    d_vat_k: "TVA UE",
    vat_link: "Vérifier dans VIES",

    s_title: "Services",
    s1_t: "Coordination de projets",
    s1_p: "Soutien à la coordination, calendriers, alignement des parties prenantes et reporting structuré.",
    s2_t: "Analyse technique",
    s2_p: "Évaluation des options, contraintes et considérations de risque pour la prise de décision.",
    s3_t: "Conseil en conception",
    s3_p: "Apport en conception, clarification des exigences et orientation technique pour des résultats cohérents.",
    s4_t: "Études de faisabilité",
    s4_p: "Validation de faisabilité avec hypothèses, scénarios et recommandations pratiques.",
    s5_t: "Estimation des coûts",
    s5_p: "Estimation des coûts et logique budgétaire avec structure et justification transparentes.",
    s6_t: "Documentation technique",
    s6_p: "Préparation de packages de documentation technique adaptés aux flux de travail d'entreprise.",

    w_title: "Pourquoi Baltvik",
    w1: "Modèle conseil uniquement : pas de conflits liés aux achats ou au commerce",
    w2: "Définition claire de la portée et des livrables avant l'engagement",
    w3: "Documentation structurée adaptée aux banques, partenaires et audits",
    w4: "Communication professionnelle et état d'esprit transfrontalier",

    p_title: "Processus",
    p1_t: "Appel d'introduction",
    p1_p: "15–30 minutes pour comprendre les objectifs, contraintes et attentes de calendrier.",
    p2_t: "Portée et proposition",
    p2_p: "Nous définissons les livrables, le calendrier et le format d'engagement.",
    p3_t: "Livraison",
    p3_p: "Exécution du conseil avec points de contrôle, mises à jour et documentation.",
    p4_t: "Remise",
    p4_p: "Package final et recommandations claires pour les prochaines étapes.",

    c_title: "Contact",
    c_sub: "Envoyez un message — nous répondons dans les 24 heures en jours ouvrables.",
    c_details: "Informations légales",
    c_disclosure: "L'entreprise fournit des services de conseil et de conseil en ingénierie et construction aux clients d'entreprise uniquement.",

    f_rights: "Tous droits réservés."
  }
};

function setLang(lang){
  document.documentElement.lang = lang;
  
  // Only update text if translations exist for this language
  if(dict[lang]) {
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(dict[lang][key]) el.textContent = dict[lang][key];
    });
  }

  // Update button states
  const langButtons = {
    "en": document.getElementById("btn-en"),
    "lv": document.getElementById("btn-lv"),
    "pl": document.getElementById("btn-pl"),
    "nl": document.getElementById("btn-nl"),
    "fr": document.getElementById("btn-fr")
  };
  
  // Remove primary class from all buttons
  Object.values(langButtons).forEach(btn => {
    if(btn) btn.classList.remove("primary");
  });
  
  // Add primary class to active language button
  if(langButtons[lang]) {
    langButtons[lang].classList.add("primary");
  }

  localStorage.setItem("baltvik_lang", lang);
}

// Add event listeners for all language buttons
document.getElementById("btn-en")?.addEventListener("click", ()=>setLang("en"));
document.getElementById("btn-lv")?.addEventListener("click", ()=>setLang("lv"));
document.getElementById("btn-pl")?.addEventListener("click", ()=>setLang("pl"));
document.getElementById("btn-nl")?.addEventListener("click", ()=>setLang("nl"));
document.getElementById("btn-fr")?.addEventListener("click", ()=>setLang("fr"));

setLang(localStorage.getItem("baltvik_lang") || "en");
