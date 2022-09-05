let title = document.title

const albumImages = {
  name: title,
  photoCount: "10",
};

let imgIndex = 1;
const mainImage = document.getElementById("mainImage");

mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`;

function increaseImg(albumObj) {
  if (imgIndex < parseInt(albumObj.photoCount, 10)) {
    imgIndex += 1;
    return (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
  }
  imgIndex = 1;
  return (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
}

function decreaseImg(albumObj) {
  if (imgIndex > 1) {
    imgIndex -= 1;
    return (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
  }
  imgIndex = 10;
  return (mainImage.src = `./resources/albums/${albumImages.name}/${imgIndex} Medium.jpeg`);
}

function addPhotos(num, folderName) {
  const newImg = document.createElement("img");
  newImg.classList.add("smallPhoto");
  document.getElementById("carousel").append(newImg);

  newImg.src = `./resources/albums/${folderName}/${num} Medium.jpeg`;
}

for (let i = 1; i < parseInt(albumImages.photoCount, 10); i++) {
    addPhotos(i, albumImages.name)
}
