fetch(
  "https://api.instagram.com/oauth/authorize?client_id=465215375479890&redirect_uri=https://cakasten.github.io/clausBerg/&scope=user_profile,user_media&response_type=code"
).then((res) => console.log(res.json()));
