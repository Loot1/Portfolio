---
title: "Lootflix"
description: 'Journal de visionnage de séries'
icon: "development/front-end"
pubDate: "Apr 26 2026"
heroImage: "/src/assets/projects/lootflix.png"
skills: ["typescript.png", "react.png", "vite.png", "bootstrap.png", "nodejs.png"]
---

## Une application pour suivre mes visionnages de série

Je suis un grand fan de séries et <a href="https://flix.loot1.fr/" target="_blank">Lootflix</a> est une application React que j'ai construite pour suivre et partager mon suivi de visionnage des séries.

L'application se base sur les infos contenues dans <a href="https://www.themoviedb.org/" target="_blank">TMDB (The Movie Database)</a>, les récupère via un script TypeScript et les organise de manière à déployer le site de manière statique. Le script s'occupe même de récupérer localement les images des séries et de les compresser pour optimiser le rendu web.

Ainsi, Lootflix permet de :
- consulter les séries que j'ai regardé, voir ma note et mon avis mais aussi pouvoir comparer avec la note communautaire de TMDB ;
- naviguer via un tableau et filtrer les séries par note, date de sortie, note TMDB, nombre de saisons, d'épisode ou encore le statut de la série ;
- afficher sur la page d'accueil les séries selon mes propres catégories.

## Aspect technique

Lootflix utilise TypeScript, React, Bootstrap et une pipeline maison de génération de données qui s'occupe de faire les requêtes à TMDB avant le déploiement du site. Le script de mise à jour va chercher les informations TMDB, fais attention à ne pas dépasser la limite de requêtes par seconde, optimise les images avec Sharp puis génère des images statiques utilisées par l'application.

L'intérêt principal est d'avoir une expérience légère côté client avec une possibilité d'ajouter ou de mettre à jour des informations sur une série de manière simplifiée.

Le site est déployé via GitHub Pages.