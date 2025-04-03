// i18n-init.js
import i18next from 'https://cdn.jsdelivr.net/npm/i18next@24.2.3/+esm';

(async function() {
const typedContainer = document.getElementById('welcome_txt');
let typedInstance = null;

const initTyped = (strings) => {
    if (typedInstance) typedInstance.destroy();
    typedInstance = new Typed('#welcome_txt', {
    strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
    });
};

await i18next.init({
    lng: localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en',
    fallbackLng: 'en',
    debug: false,
    resources: {
    en: {
        translation: {
        home: 'Home',
        about: 'About',
        resume: 'Resume',
        portfolio: 'Portfolio',
        iam: "I'm",
        welcome: ['developer', 'available'],
        about2: 'About',
        abouttext: 'Passionate embedded developer with a background in telecom and network supervision. Skilled in C, Python, and microcontroller development (ESP32, STM32, FreeRTOS), I have a strong interest in critical systems, connected devices, and communication protocols (MQTT, LoRa, Sigfox). Curious and detail-oriented, I am looking for a position in embedded development, combining firmware, connectivity, and system optimization.',
        dev: 'Developer',
        contact: 'You can contact me or find my details below:',
        phone: 'Phone:',
        city: 'City:',
        degree: 'Degree:',
        bachelor: 'Bachelor\'s Degree in Software Development',
        rncp: 'RNCP 31678: Application developer and designer',
        driving: 'In possession of a Category B driving license and a Category A1 license for motorcycles. I own a personal vehicle.',
        skills_title: 'Skills',
        skills_desc: 'Here are some technologies I\'ve worked with, along with the link to GitHub:',

        resume_title: 'Resume',
        resume_desc: 'Developer and technician, I have multiple skills.',
        summary_title: 'Summary',
        education_title: 'Education',
        bachelor_title: 'Bachelor in Development',
        bachelor_period: '2022 - 2024',
        bachelor_school: 'Holberton School',
        bachelor_desc1: 'Specialization: C, systems and blockchain - obtained',
        bachelor_desc2: 'RNCP31678 - Application designer and developer - obtained',
        technician_title: 'Training in computer and network maintenance technician',
        technician_year: '2004',
        technician_school: 'GRETA',
        technician_desc: 'Windows NT & 2000, Active Directory, Databases, Cisco',
        experience_title: 'Professional Experience',

        spie_title: 'IT Deployment Technician',
        spie_period: 'November 2024 - April 2025',
        spie_company: 'SPIE ICS, Toulouse',
        spie_desc: 'IT equipment renewal. Workstation imaging, Active Directory registration, data transfer, configuration.',

        sigfox_title: 'Sigfox IOT Network Supervision',
        sigfox_period: '2020 - 2022',
        sigfox_company: 'Sigfox, Toulouse',
        sigfox_desc: 'Network supervision and IOT operations',

        plein_title: 'VoIP Technician',
        plein_period: '2018 - 2019',
        plein_company: 'Plein Sud, Toulouse',
        plein_desc: 'Installation of corporate IP telephony',

        progetec_title: 'Fiber Optic Technician',
        progetec_period: '2015 - 2016',
        progetec_company: 'Progetec / Erim, Toulouse',
        progetec_desc: 'D3 fiber optic installation',

        infophone_title: 'Mobile Phone Repair Technician',
        infophone_period: '2013 - 2015 / 2016 - 2018',
        infophone_company: 'Mon PC Discount / Infophone / PointCom, Toulouse',
        infophone_desc: 'PC, smartphone and tablet repair',

        orange_title: 'DSLAM Supervision / Hotline Technician',
        orange_period: '2011 - 2012',
        orange_company: 'Orange / Orange Business Services, Toulouse',
        orange_desc: 'DSLAM supervision, Océane OBS ticket handling',

        callone_title: 'Hotline Manager',
        callone_period: '2010',
        callone_company: 'Call one (Umanis Group), Paris',
        callone_desc: 'Hotline for extended warranty of Auchan IT products.',

        computacenter_title: 'IT Deployment Technician',
        computacenter_period: '2009',
        computacenter_company: 'Computa-center, Paris',
        computacenter_desc: 'IT equipment renewal',

        bugbusters_title: 'IT and ADSL Technician',
        bugbusters_period: '2005 - 2008',
        bugbusters_company: 'Bugbusters & PC30, Paris',
        bugbusters_desc: 'Home ADSL technician, home IT troubleshooting',


        portfolio_title: 'Portfolio',
        portfolio_desc: 'Some of my completed projects:',
        portfolio_web: 'Web',
        portfolio_blockchain: 'Blockchain',
        portfolio_embedded: 'Embedded',
        portfolio_education: 'Education',
        portfolio_item1_title: 'PHP/Laravel - Vue.js',
        portfolio_item1_desc: 'CRM web with Laravel and Vue.js',
        portfolio_item2_title: 'C - Python/Flask',
        portfolio_item2_desc: 'UTXO Bitcoin clone in C',
        portfolio_item3_title: 'ESPHome/Home Assistant',
        portfolio_item3_desc: 'Flaura/Plantidote projects',
        portfolio_item4_title: 'Dart/Flutter',
        portfolio_item4_desc: 'Game for learning a foreign alphabet',

        testimonial_title: 'Testimonials',
        testimonial_desc: 'Some feedback and impressions.',
        testimonial_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere libero ac nulla dignissim.',
        testimonial_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        testimonial_3: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
        testimonial_4: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        testimonial_5: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',

        footer_copyright: '© Copyright',
        footer_rights: 'All Rights Reserved',
        footer_credits: 'Designed by',
        footer_credits_link: 'BootstrapMade',
        }
    },
    fr: {
        translation: {
        home: 'Accueil',
        about: 'À propos',
        resume: 'CV',
        portfolio: 'Portfolio',
        iam: 'Je suis',
        welcome: ['développeur', 'disponible'],
        about2: 'À propos',
        abouttext: 'Développeur embarqué passionné avec une expérience en télécom et supervision réseau. Compétent en C, Python, et développement microcontrôleur (ESP32, STM32, FreeRTOS), je m\'intéresse particulièrement aux systèmes critiques, objets connectés, et protocoles de communication (MQTT, LoRa, Sigfox). Curieux et attentif aux détails, je recherche un poste en développement embarqué, alliant firmware, connectivité, et optimisation système.',
        dev: 'Développeur',
        contact: 'Vous pouvez me contacter ou trouver mes coordonnées ci-dessous:',
        phone: 'Téléphone:',
        city: 'Ville:',
        degree: 'Diplôme:',
        bachelor: 'Bachelor en développement logiciel',
        rncp: 'RNCP 31678 : Concepteur et développeur d\'applications',
        driving: 'Je suis titulaire du permis B et du permis moto A1. Je possède un véhicule.',
        skills_title: 'Compétences',
        skills_desc: 'Voici quelques technologies avec lesquelles j\'ai travaillé avec le lien vers github :',

        resume_title: 'CV',
        resume_desc: 'Développeur et technicien, j\'ai de multiples compétences.',
        summary_title: 'Résumé',
        education_title: 'Formation',
        bachelor_title: 'Bachelor en développement',
        bachelor_period: '2022 - 2024',
        bachelor_school: 'Holberton School',
        bachelor_desc1: 'Spécialité: C, systèmes et blockchain - obtenu',
        bachelor_desc2: 'RNCP31678 - Concepteur et développeur d\'applications - obtenu',
        technician_title: 'Formation technicien maintenance informatique et réseau',
        technician_year: '2004',
        technician_school: 'GRETA',
        technician_desc: 'Windows NT & 2000, Active Directory, Bases de données, Cisco',
        experience_title: 'Expériences professionnelles',

        spie_title: 'Technicien de déploiement informatique',
        spie_period: 'Novembre 2024 - Avril 2025',
        spie_company: 'SPIE ICS, Toulouse',
        spie_desc: 'Renouvellement de matériel informatique. Masterisation des postes, inscription Active Directory, transfert de données, paramétrage.',

        sigfox_title: 'Supervision du réseau IOT Sigfox',
        sigfox_period: '2020 - 2022',
        sigfox_company: 'Sigfox, Toulouse',
        sigfox_desc: 'Supervision réseau et opérations IOT',

        plein_title: 'Technicien VoIP',
        plein_period: '2018 - 2019',
        plein_company: 'Plein Sud, Toulouse',
        plein_desc: 'Installation de téléphonie IP d\'entreprise',

        progetec_title: 'Technicien fibre optique',
        progetec_period: '2015 - 2016',
        progetec_company: 'Progetec / Erim, Toulouse',
        progetec_desc: 'Installation fibre optique D3',

        infophone_title: 'Réparateur en téléphonie mobile',
        infophone_period: '2013 - 2015 / 2016 - 2018',
        infophone_company: 'Mon PC Discount / Infophone / PointCom, Toulouse',
        infophone_desc: 'Réparation PC, smartphones et tablettes',

        orange_title: 'Supervison DSLAM / Technicien hotliner',
        orange_period: '2011 - 2012',
        orange_company: 'Orange / Orange Business Services, Toulouse',
        orange_desc: 'Supervison des DSLAM, Traitement des tickets Océane OBS',

        callone_title: 'Manager hotline',
        callone_period: '2010',
        callone_company: 'Call one (Groupe Umanis), Paris',
        callone_desc: 'Hotline des extension garantie de produits informatique Auchan.',

        computacenter_title: 'Technicien de déploiement informatique',
        computacenter_period: '2009',
        computacenter_company: 'Computa-center, Paris',
        computacenter_desc: 'Renouvellement de matériel informatique',

        bugbusters_title: 'Technicien informatique et ADSL',
        bugbusters_period: '2005 - 2008',
        bugbusters_company: 'Bugbusters & PC30, Paris',
        bugbusters_desc: 'Technicien ADSL à domicile, dépannage informatique à domicile',

        portfolio_title: 'Portfolio',
        portfolio_desc: 'Quelques-uns de mes projets réalisés :',
        portfolio_web: 'Web',
        portfolio_blockchain: 'Blockchain',
        portfolio_embedded: 'Embarqué',
        portfolio_education: 'Éducation',
        portfolio_item1_title: 'PHP/Laravel - Vue.js',
        portfolio_item1_desc: 'CRM web avec Laravel et Vue.js',
        portfolio_item2_title: 'C - Python/Flask',
        portfolio_item2_desc: 'Clone Bitcoin UTXO en C',
        portfolio_item3_title: 'ESPHome/Home Assistant',
        portfolio_item3_desc: 'Projets Flaura/Plantidote',
        portfolio_item4_title: 'Dart/Flutter',
        portfolio_item4_desc: 'Jeu pour apprendre un alphabet étranger',

        testimonial_title: 'Témoignages',
        testimonial_desc: 'Quelques retours et impressions.',
        testimonial_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere libero ac nulla dignissim.',
        testimonial_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        testimonial_3: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
        testimonial_4: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        testimonial_5: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',

        footer_copyright: '© Copyright',
        footer_rights: 'Tous droits réservés',
        footer_credits: 'Conçu par',
        footer_credits_link: 'BootstrapMade',
        }
    }
    }
});

const applyTranslations = () => {
    const keys = [
    'home', 'about', 'resume', 'portfolio', 'iam', 'about2', 'abouttext', 'dev', 'contact', 'phone', 'city', 'degree',
    'bachelor', 'rncp', 'driving', 'skills_title', 'skills_desc', 'resume_title',
    'resume_desc', 'summary_title', 'education_title', 'bachelor_title', 'bachelor_period',
    'bachelor_school', 'bachelor_desc1', 'bachelor_desc2', 'technician_title', 'technician_year',
    'technician_school', 'technician_desc', 'experience_title',
    'spie_title', 'spie_period', 'spie_company', 'spie_desc',
    'sigfox_title', 'sigfox_period', 'sigfox_company', 'sigfox_desc',
    'plein_title', 'plein_period', 'plein_company', 'plein_desc',
    'progetec_title', 'progetec_period', 'progetec_company', 'progetec_desc',
    'infophone_title', 'infophone_period', 'infophone_company', 'infophone_desc',
    'orange_title', 'orange_period', 'orange_company', 'orange_desc',
    'callone_title', 'callone_period', 'callone_company', 'callone_desc',
    'computacenter_title', 'computacenter_period', 'computacenter_company', 'computacenter_desc',
    'bugbusters_title', 'bugbusters_period', 'bugbusters_company', 'bugbusters_desc',
    'portfolio_title', 'portfolio_desc', 'portfolio_web', 'portfolio_blockchain',
    'portfolio_embedded', 'portfolio_education',
    'portfolio_item1_title', 'portfolio_item1_desc',
    'portfolio_item2_title', 'portfolio_item2_desc',
    'portfolio_item3_title', 'portfolio_item3_desc',
    'portfolio_item4_title', 'portfolio_item4_desc',
    'testimonial_title', 'testimonial_desc', 'testimonial_1', 'testimonial_2', 'testimonial_3', 'testimonial_4', 'testimonial_5',
    'footer_credits', 'footer_credits_link', 'footer_rights', 'footer_credits'
    ];
    keys.forEach(k => {
    const el = document.getElementById(k + '_txt');
    if (el) el.innerText = i18next.t(k);
    });
    initTyped(i18next.t('welcome', { returnObjects: true }));
};

document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
    const lang = flag.dataset.lang;
    localStorage.setItem('lang', lang);
    i18next.changeLanguage(lang).then(applyTranslations);
    });
});

applyTranslations();
})();
