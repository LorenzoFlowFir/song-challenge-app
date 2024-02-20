# Étape 1: Utiliser une image de base Node.js
FROM node:latest

# Étape 2: Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Étape 3: Copier les fichiers de dépendances et installer les modules
COPY package*.json ./
RUN npm install

# Étape 4: Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Étape 5: Exposer le port sur lequel votre API s'exécute
EXPOSE 5555

# Étape 6: Définir la commande pour démarrer votre application
CMD ["node", "index.js"]
