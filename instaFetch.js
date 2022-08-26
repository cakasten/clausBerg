const igImageCards = document.getElementsByClassName("ig-photo");

// obtain instagram images and add url to img src attribute.
fetch(
  `https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=`
).then((res) => {
  res.json().then((posts) => {
    function randomNumInRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let instaImages = posts.data.filter((img) => img.media_type === "IMAGE");

    // get an equally divided range from the amount of desired IG photos to be shown on webpage.
    function setCardRanges(array) {
      let ranges = [];
      let num = Math.floor(array.length / igImageCards.length);
      for (let i = 0; i < igImageCards.length; i++) {
        ranges.push(i * num);
      }
      return ranges;
    }

    //chooses a random media_url from api data and assigns it to imgs' src.

    function createImageCard() {
      let range = setCardRanges(instaImages);

      const secondRangeInput = (value) => {
        if (value + 1 === range.length) {
          return instaImages.length;
        }
        return range[value + 1];
      };

      for (let i = 0; i < igImageCards.length; i++) {
        igImageCards[i].src =
          instaImages[
            randomNumInRange(range[i], secondRangeInput(i))
          ].media_url;
      }

      for (let i = 0; i < igImageCards.length; i++) {
        igImageCards[i].range = [range[i], secondRangeInput(i)];
      }
    }
    createImageCard();

    // sets an interval time to change imgs source
  });
});
