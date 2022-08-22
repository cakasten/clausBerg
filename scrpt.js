const appId = 3372859742957308;
const redirectURI = "https://cakasten.github.io/clausBerg/";

fetch(
  `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectURI}&scope=user_profile,user_media&response_type=code`
);


//copy and paste into browser

// https://api.instagram.com/oauth/authorize
//   ?client_id=3372859742957308
//   &redirect_uri=https://cakasten.github.io/clausBerg/
//   &scope=user_profile,user_media
//   &response_type=code






