const fs = require('fs');
const path = require('path');

// Chemin modifié pour pointer vers le dossier souhaité
const imagesPath = path.join(__dirname, 'public', 'images', 'PortfolioHome');
const outputPath = path.join(__dirname, 'public', 'PortfolioHomeImagesList.json');

const imagesList = {};

// On ne parcourt plus les sous-dossiers de 'galeries', mais directement les fichiers dans 'PortfolioHome'
const images = fs.readdirSync(imagesPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)).map(file => `/images/PortfolioHome/${file}`);

imagesList['PortfolioHome'] = images;

fs.writeFileSync(outputPath, JSON.stringify(imagesList, null, 2));
