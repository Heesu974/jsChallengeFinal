const Imgs = [
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://c4.wallpaperflare.com/wallpaper/103/318/439/glass-drops-surface-wallpaper-preview.jpg",
    "https://eskipaper.com/images/free-backgrounds-2.jpg"

];


const leng = Imgs.length;
const body = document.body;

function getRandomImgOrder(leng) {
    return Math.floor(Math.random() * leng);
}
console.log(Imgs[getRandomImgOrder(leng)]);

const bgImg = document.createElement("img");
bgImg.src = `${Imgs[getRandomImgOrder(leng)]}`;
body.appendChild(bgImg);


