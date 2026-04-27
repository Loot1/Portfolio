---
title: "Voicey"
description: 'Bot Discord complet avec dashboard'
icon: "projects/discord-bot"
pubDate: "Apr 23 2026"
heroImage: "/src/assets/projects/voicey.png"
skills: ["typescript.png", "discordjs.png", "express.png", "prisma.png", "mysql.png", "nodejs.png", "react.png", "tailwindcss.png", "vite.png"]
---

## Présentation du projet de bot Discord

<a href="https://voicey.fr/" target="_blank">Voicey</a> est un projet complet qui regroupe :
- un bot Discord et une API dans une seule application TypeScript ;
- un site web vitrine pour le site avec un dashboard. 

L'objectif est de proposer une gestion fiable et accessible des salons vocaux temporaires sur Discord, proposer une fonctionnalité innovante d'enregistrer les salons vocaux sur demande et transmettre l'enregistrement aux équipes de gestion de communauté concernées.

Les principales fonctionnalités du projet :
- Création et gestion automatique de salons vocaux temporaires via un système de menus et de boutons ;
- Authentification Discord OAuth pour l'administration web ;
- API de configuration des serveurs (categories, salons, roles, restrictions) ;
- Gestion de la lecture audio des fichiers d'enregistrement sur le Dashboard déchiffrés au préalable par l'API.

## Outils utilisés

Sur le plan technique, Voicey s'appuie :
- pour l'API : sur Discord.js, Express, Prisma et MySQL ;
- pour le site : sur React, Tailwind, DaisyUI et Vite.

La partie back-end dispose d'un container docker pour le développement et d'un fichier ecosystem pour un déploiement via PM2 sur serveur linux. Concernant la partie front-end, le site est déployé sur GitHub Pages.

## Structure

Cette architecture de l'API et du bot centralisés en une seule application TypeScript m'a permis de centraliser la logique métier du bot et les besoins du dashboard coôté front, avec des types partagés et un socle backend unique plus simple à maintenir.