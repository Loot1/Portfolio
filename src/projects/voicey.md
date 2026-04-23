---
title: "Voicey"
description: 'Bot Discord et API de gestion vocale'
icon: "development/back-end"
pubDate: "Apr 23 2026"
heroImage: "/src/assets/projects/voicey.png"
skills: ["typescript.png", "discordjs.png", "express.png", "prisma.png", "mysql.png", "nodejs.png"]
---

## Bot Discord et API unifiée

Voicey est un projet complet qui regroupe un bot Discord et une API dans une seule application TypeScript. L'objectif est de proposer une gestion fiable des salons vocaux temporaires, des enregistrements et de la configuration serveur depuis un dashboard web.

Les principales fonctionnalités du projet :
- Création et gestion automatique de salons vocaux temporaires
- Authentification Discord OAuth pour l'administration web
- API de configuration des serveurs (categories, salons, roles, restrictions)
- Gestion des règles d'enregistrement et endpoints d'archives

Sur le plan technique, Voicey s'appuie sur Discord.js, Express, Prisma et MySQL. Le projet est pensé pour fonctionner aussi bien en développement local avec Docker qu'en production avec PM2.

Cette architecture m'a permis de centraliser la logique métier du bot et les besoins du dashboard Roicey, avec des types partagés et un socle backend unique plus simple à maintenir.