let gigaChadImages = [
    "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg",
    "https://i1.sndcdn.com/artworks-sUZuSm54AvHM5DzC-sRJf4A-t500x500.jpg",
    "https://i.pinimg.com/736x/4d/7c/72/4d7c722291a2f73af96d808395a25f0b.jpg",
    "https://i1.sndcdn.com/artworks-ywcx1pUzUGGvjwmH-BUNWRA-t500x500.jpg",
    "https://i.kym-cdn.com/news/posts/original/000/001/076/cover6.jpg",
    "https://preview.redd.it/hjyt8wdsuyx71.png?width=640&crop=smart&auto=webp&s=178fbc5ecb4c461c016e6d49be7de5846d524eec",
    "https://www.scoopearth.com/wp-content/uploads/2021/09/6c820920313a6e90f87ef90408af18-1200x1442-1.png"
];

const imgs = document.getElementsByTagName("img")

for(let i= 0; i<imgs.length;i++){
    const randomImg = Math.floor(Math.random() * gigaChadImages.length)
    imgs[i].src = gigaChadImages[randomImg]
}