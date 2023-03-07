import getTimeOfDay from "./getTimeOfDay";

function getPhotoFromUnsplashAPI(){
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=good${getTimeOfDay}&client_id=DQ2dbKPFM0Z06fd7ZUhO-SNeF2i36l0UEEm9aswMmbE`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      return(data.urls.regular)
    })
}

console.log(getPhotoFromUnsplashAPI());

export default getPhotoFromUnsplashAPI;