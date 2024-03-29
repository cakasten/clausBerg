let title = document.title;

const albums = [
  { name: "Concerts", photoCount: "10" },
  { name: "Models", photoCount: "23" },
  { name: "Products", photoCount: "13" },
  { name: "Skate", photoCount: "5" },
  { name: "Street", photoCount: "12" },
];

let albumImages = {};

for (let i = 0; i < albums.length; i++) {
  if (albums[i].name === title) {
    albumImages = albums[i];
    albumImages.name = albumImages.name.toLowerCase();
  }
}

let imgIndex = 1;
const mainImage = document.getElementById("mainImage");

mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`;

function getOrientation (img) {
  if (img.width > img.height) {
    img.classList.add('landscape')
  } else if (img.classList.contains('landscape')) {
    img.classList.remove('landscape')
  }
} 

function increaseImg(albumObj) {
  if (imgIndex < parseInt(albumObj.photoCount, 10)) {
    imgIndex += 1;
     (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
     return;
  }
  imgIndex = 1;
   (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
   return;
}

function decreaseImg(albumObj) {
  if (imgIndex > 1) {
    imgIndex -= 1;
     (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
     return;
  }
  imgIndex = parseInt(albumObj.photoCount);
   (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
   return;
}



function addPhotos(num, folderName) {
  const newImg = document.createElement("img");
  newImg.classList.add("smallPhoto");
  document.getElementById("gallery").append(newImg);

  newImg.src = `./resources/albums/${folderName}/${num} Medium.jpeg`;
  newImg.addEventListener('click', () => {
    mainImage.src = newImg.src;
  })
}

for (let i = 1; i <= parseInt(albumImages.photoCount, 10); i++) {
  addPhotos(i, albumImages.name);
}
