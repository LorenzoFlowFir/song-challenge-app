#Song Challenge App

##Installation

(L'application à bien été build mais la connexion à une API HTTP est impossible et fait prendre toute l'intéret à l'App)

Donc après un git clone il est quand même possible de faire un
```
ionic serve
```
Et de mettre par la suite l'application en format mobile

Il est aussi possible d'accéder à l'application (fonctionel) depuis ce lien : http://51.38.113.168:3000

##Objectifs
![Capture d’écran 2024-02-18 160413](https://github.com/LorenzoFlowFir/song-challenge-app/assets/46107911/f75d9587-1ef2-4138-aae0-2104c249ad76)

###Créé :
-Projet Ionic✅
-Page Home✅
-Page liste (more-challenge.page)✅
-Page Creation (Modal créer dans la page more-challenge.page)✅

###Utilisé:
-Piles✅
-Composant Ionic✅
-Des services✅
-Des Observable✅

###Autres:
-Cohérence affichage avec le contexte mobile✅
-Formulaire (dans un modal)✅
-Validation du formulaire✅
-Thèmes (le même que stats.fm)✅
-Contenue : Renvoie une liste de challenge récupèré depuis une API créé par moi même et présente dans une autre banch✅
-Mise en place de Service✅
-Connexion à ma Base de donnée Firestore✅
-CRUD✅

##A Propos du jeu:
Le concept de l'application repose sur une idée simple mais captivante : intégrer la communauté du serveur Discord de Stats.fm au quotidien de ses utilisateurs à travers des défis musicaux. Chaque jour, la communauté des utilisateur de Stats.fm lance un nouveau challenge sur leur salon discorrd, associé à une chanson spécifique, invitant les membres à explorer différents genres musicaux et à élargir leurs horizons auditifs. Ce jeu stimulant favorise non seulement l'engagement au sein de la communauté mais offre également une manière ludique de découvrir de nouvelles musiques.

Cependant, une contrainte majeure réside dans le fait que l'accès à ces challenges est exclusivement limité au salon Discord de Stats.fm. Pour surmonter cet obstacle, un bot Discord a été mis en place pour collecter automatiquement les défis chaque soir. Les informations sont ensuite transférées à une API personnalisée, spécialement conçue pour cette application, permettant ainsi une récupération fluide et efficace des données.





La page d'accueil de l'application met en avant le challenge du jour, accompagné des défis des trois jours précédents, offrant une visibilité immédiate sur les activités récentes.



Un bouton "Plus de Challenges" dirige les utilisateurs vers une page dédiée, où une archive de 100 challenges passés, voire plus, est accessible. Un simple tapotement sur l'image d'un challenge permet de l'afficher en détail, facilitant ainsi la consultation.



En outre, l'application s'enrichit d'une fonctionnalité 'Personnelle', permettant à chacun de proposer ses propres challenges via le bouton "Créer un challenge". Ces défis personnels, une fois créés, peuvent être consultés en cliquant sur l'icône Spotify associée, offrant une expérience utilisateur interactive et engageante. De plus, la possibilité de modifier ou de supprimer ses challenges assure une gestion flexible et personnalisée de ces contenus.

Développements futurs envisagés :

Traduction des Challenges : Afin de rendre l'application accessible à un public plus large, une traduction des challenges en français est prévue. Cette fonctionnalité permettra de franchir les barrières linguistiques et d'attirer une communauté francophone active.

Suggestion de Challenges à la Communauté Stats.fm : Un système de suggestions permettra aux utilisateurs de soumettre leurs propres idées de challenges directement à la communauté Stats.fm. Cette initiative vise à renforcer l'interaction et l'engagement des membres, en leur donnant l'opportunité de contribuer activement au dynamisme du serveur.

En somme, cette application se présente comme un pont innovant entre la communauté en ligne de Stats.fm et les passionnés de musique, enrichissant l'expérience de chacun par le partage et la découverte musicale.
