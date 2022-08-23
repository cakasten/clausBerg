const igImageCards = document.getElementsByClassName("ig-photo");
console.log("imageCards:", igImageCards);

// obtain instagram images and add url to img src attribute.
fetch(
  `https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=`
).then((res) => {
  res.json().then((posts) => {
    console.log(posts);
    function randomNumInRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let instaImages = posts.data.filter((img) => img.media_type === "IMAGE");
    console.log("instaImages:", instaImages);

    // get an equally divided range from the amount of desired IG photos to be shown on webpage.
    function setCardRanges(obj) {
      let ranges = [];
      let num = Math.floor(obj.length / igImageCards.length);
      for (let i = 0; i < igImageCards.length; i++) {
        ranges.push(i * num);
      }
      return ranges
    //   console.log("ranges:", ranges);
    }
    (setCardRanges(instaImages));

    function createImageCard() {
      let range = setCardRanges(instaImages);

      const secondRangeInput = (value) => {
        if (value + 1 === range.length) {
          return instaImages.length - 1;
        }
        return range[value + 1];
      };

      for (let i = 0; i < igImageCards.length; i++) {
        console.log(setCardRanges(instaImages))
        igImageCards[i].src =
          instaImages[randomNumInRange(range[i], secondRangeInput(i))].media_url;
      }
    }
    createImageCard();

    
    // card1.src = instaImages[randomNumInRange(0, 6)].media_url;
    // card2.src = instaImages[randomNumInRange(6, 12)].media_url;
    // card3.src = instaImages[randomNumInRange(12, instaImages.length)].media_url;

    console.log(card1);
  });
});
