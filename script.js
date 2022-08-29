const albums = [
  { name: "concerts", photoCount: "10" },
  { name: "models", photoCount: "23" },
  { name: "products", photoCount: "13" },
  { name: "skate", photoCount: "5" },
  { name: "street", photoCount: "12" },
];

function addPhotos(num, folderName) {
  const newImg = document.createElement("img");
  newImg.classList.add("ig-photo");
  document.getElementById("instaPosts").append(newImg);
  
  newImg.src = `./resources/albums/${folderName}/${num}.jpg`;
}

for (let i = 0; i < albums.length; i++) {
  for (let x = 1; x <= parseInt(albums[i].photoCount, 10); x++) {
    addPhotos(x, albums[i].name);
  }
}

