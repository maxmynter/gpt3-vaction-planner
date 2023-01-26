const imgs = [
  "beach.jpg",
  "beach2.jpg",
  "beach3.jpg",
  "mountains1.jpg",
  "mountains2.jpg",
  "road1.jpg",
  "road2.jpg",
  "waves.jpg",
];

const imgURLs = imgs.map((img) => "/static/trip_backgrounds/" + img);

const getRandomImageURL = () =>
  imgURLs[Math.floor(Math.random() * imgURLs.length)];

export default getRandomImageURL;
