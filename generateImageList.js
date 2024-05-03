const fs = require('fs');
const path = require('path');

const galleriesPath = path.join(__dirname, 'public', 'galeries');
const outputPath = path.join(__dirname, 'public', 'galleriesList.json');

const galleriesList = {};

function readGallery(galleryPath, basePath) {
  const entries = fs.readdirSync(galleryPath, { withFileTypes: true });
  const galleryContent = {};

  entries.forEach(entry => {
    const entryPath = path.join(galleryPath, entry.name);
    if (entry.isDirectory()) {
      // Lisez récursivement les sous-dossiers et créez un nouvel objet pour chaque sous-dossier
      const subdirPath = path.join(basePath, entry.name);
      galleryContent[entry.name] = readGallery(entryPath, subdirPath);
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(entry.name)) {
      // Extraire le numéro de la photo et son prix à partir du nom du fichier
      const parts = entry.name.split('-');  // Exemple: '1-10.jpg' devient ['1', '10.jpg']
      const price = parts[1].split('.')[0];  // Extrait le prix avant l'extension '.jpg'

      // Ajoutez les images et les prix directement dans le dossier courant
      if (!galleryContent['images']) galleryContent['images'] = [];
      const imagePath = `/galeries/${basePath}/${entry.name}`.replace(/\\/g, '/');
      galleryContent['images'].push({
        path: imagePath,
        price: parseInt(price, 10)  // Convertit le prix en nombre
      });
    } else if (entry.name.endsWith('.txt')) {
      // Enregistre le nom du fichier .txt sous la clé "free"
      const txtFileName = entry.name.replace('.txt', '');
      galleryContent['free'] = txtFileName;
    }
  });

  return galleryContent;
}

fs.readdirSync(galleriesPath, { withFileTypes: true }).forEach(gallery => {
  if (gallery.isDirectory()) {
    const galleryPath = path.join(galleriesPath, gallery.name);
    galleriesList[gallery.name] = readGallery(galleryPath, gallery.name);
  }
});

fs.writeFileSync(outputPath, JSON.stringify(galleriesList, null, 2));
