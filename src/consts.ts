// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { HeaderLinkProps } from "./components/navigation/HeaderLink.astro";

export const SITE_TITLE = 'Louis SACHY';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const NAVIGATION : HeaderLinkProps[] = [
    { text: 'Présentation', href: '/about', style: 'secondary' },
    { text: 'Développement', href: '/development', style: 'primary' },
    { text: 'Parcours', href: '/experiences', style: 'quaternary' },
    { text: 'Projets', href: '/projects', style: 'tertiary' },
]

export const TRAININGS = [
    {
        title: "MASTER Métiers de l'Enseignement, de l'Education et de la Formation (MEEF)",
        icon: "experiences/education",
        description: [
            "Mention Encadrement éducatif - Parcours Éducation à la Santé et au Développement Durable : Interroger et Intervenir (ESDD:2i)."
        ],
        period: "2024-2026",
        organization: "Université de Picardie Jules Verne - INSPÉ Amiens"
    },
    {
        title: "Incubateur de l’Economie Sociale et Solidaire",
        icon: "experiences/economie-sociale-et-solidaire",
        description: [
            "4 mois d'accompagnement sur le montage de projet en écomoie sociale et solidaire.",
        ],
        period: "oct. 2023 - jan. 2024",
        organization: "Katalyze / PTCE d’Amiens"
    },
    {
        title: "Initiation aux compétences psychosociales",
        icon: "experiences/psychosocial",
        description: [
            "Deux journées de sensibilisation aux compétences psychosociales appliquées au contexte scolaire.",
        ],
        period: "oct. 2023",
        organization: "Projet Territorial de Santé Mentale de la Somme (PTSM)"
    },
    {
        title: "Certificat de Formation à la Gestion Associative",
        icon: "experiences/association-education",
        description: [
            "Une formation d'une semaine sur les responsabilités d'un administrateur dans la gestion administrative, financière et humaine d’une association.",
        ],
        period: "avril 2023",
        organization: "Maison des Associations d’Amiens Métropole (MAAM)"
    },
    {
        title: "Concepteur Développeur d’Applications",
        icon: "experiences/developer",
        description: [
            "Conception, développement et déploiement d'une application web, mobile ou desktop."
        ],
        period: "2020 - 2022",
        organization: "La MANU"
    },
    {
        title: "Premiers Secours en Équipe de niveau 2",
        icon: "experiences/first-aid",
        description: [
            "Deux semaines de formation pour porter secours en équipe."
        ],
        period: "2019 (recyclé en 2023)",
        organization: "Protection Civile"
    }
];

export const JOBS = [
    {
        title: "Bénévole / Administrateur",
        icon: "experiences/association",
        organization: "Flash Our True Colors",
        period: "2022 - Aujourd’hui",
        description: [
            "- Gestion administrative : montage de dossier de subvention, rédaction de bilan, demande d’agrément et gestion financière.",
            "- Vie associative : mobilisation des bénévoles, liens avec les partenaires, organisation d’événements inter-associatifs, communication et participation ou organisation de rencontres de réseaux nationaux.",
            "- Sensibilisation : création de supports d’intervention, animation d’intervention, lien avec les établissements scolaires, mise en lien avec les programmes d’éducation."
        ]
    },
    {
        title: "Développeur",
        icon: "experiences/front-end",
        organization: "Anime Mon Web",
        period: "2021 - 2022",
        description: [
            "- Développement de sites internets, d’applications mobiles et solutions applicatives externes.",
            "- Mise en oeuvre de la stratégie de communication et des outils de plannification et de métrique associés.",
            "- Gestion de projet opérationnel, pilotage de l’avancement avec l’équipe, priorisation des tâches et relation clientèle."
        ]
    },
    {
        title: "Équipier Secouriste",
        icon: "experiences/equipier-secouriste-protection-civile",
        organization: "Protection civile de l’Oise",
        period: "juin 2018 - déc. 2022",
        description: [
            "Engagement dans les postes de secours.",
        ]
    }
];

export const SKILLS = [
    {
        title: "Développement Front",
        description: "Pour le développement Front, c'est-à-dire l'apparence visuel, j'utilise principalement le framework React même s'il m'arrive d'en essayer d'autres. Pour le style, j'ai déjà utilisé Bootstrap, Tailwind, SASS ou encore Material UI. Je connais également bien le CMS Wordpress pour créer des sites internets.",
        icon: "development/front-end",
        images: [
            "html.png",
            "css.png",
            "javascript.png",
            "typescript.png",
            "bootstrap.png",
            "tailwindcss.png",
            "sass.png",
            "jquery.png",
            "react.png",
            "astro.png",
            "materialui.png",
            "redux.png",
            "wordpress.png"
        ]
    },
    {
        title: "Développement Back",
        description: "Côté développement Back, c'est-à-dire le fonctionnement derrière l'apparence d'un site ou d'une application, le côté serveur, j'utilise beaucoup l'environnement NodeJS. Pour les API, je suis très habitué à NestJS ou Express. Pour les bases de données, j'en ai déjà utilisé de nombreuses comme MySQL, MongoDB ou Firebase accompagnées ou pas d'un ORM comme Prisma ou Hibernate.",
        icon: "development/back-end",
        images: [
            "nodejs.png",
            "express.png",
            "nestjs.png",
            "nextjs.png",
            "mysql.png",
            "mongodb.png",
            "firebase.png",
            "prisma.png",
            "hibernate.png"
        ]
    },
    {
        title: "Développement logiciel et autres",
        description: "J'ai eu l'occasion de créer des applications mobiles avec React-Native et/ou Expo, ou bien des applications pour bureau (Desktop) avec Electron. J'ai également pu utiliser Java et Python pour de la conception logiciel. Habitué de l'API DiscordJS, j'ai conçu plusieurs bots Discord.",
        icon: "development/app",
        images: [
            "expo.png",
            "electron.png",
            "java.png",
            "python.png",
            "discordjs.png"
        ]
    },
    {
        title: "Outils",
        description: "Avec les années, j'ai eu l'occasion de tester beaucoup d'outils pour développer, à ce jour j'utilise principalement Visual Studio Code et à l'occasion, Android Studio pour le développement mobile et IntelliJ pour le développement en Java. Pour le versionning des projets sur Github ou Gitlab, j'utilise Git. Par ailleurs, j'ai l'habitude de l'écosystème NPM pour utiliser de nombreuses librairies.",
        icon: "development/tools",
        images: [
            "vscode.png",
            "androidstudio.png",
            "intellij.png",
            "eclipse.png",
            "filezilla.png",
            "git.png",
            "npm.png",
            "vite.png"
        ]
    },
    {
        title: "Gestion de projet",
        description: "Pour la gestion de projet, j'utilise souvent Trello ou bien d'autres outils similaires. Je suis habitué à travailler sous le prisme des méthodes agiles, à présenter mes avancées ou bien l'ensemble du projet à l'oral. Pour le maquettage, je suis habitué à Figma et AdobeXD.",
        icon: "development/project-management",
        images: [
            "trello.png",
            "notion.png",
            "adobexd.png",
            "figma.png"
        ]
    },
    {
        title: "Communication et référencement",
        description: "Ayant eu l'occasion de travailler sur des projets de développement où le référencement (SEO) était un point clef, je connais les bonnes pratiques. Je suis aussi capable de rédiger ou concevoir des visuels cohérents de communication.",
        icon: "development/communication-and-seo",
        images: [
            "canva.png"
        ]
    }
];