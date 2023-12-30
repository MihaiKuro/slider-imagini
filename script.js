//get elements from the DOM
const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");


//slider data
const images = [
    "photos/image1.jpg","photos/image2.jpg"
    ,"photos/image3.jpg","photos/image4.jpg",
    "photos/image5.jpg","photos/image6.jpg",
];

const headings = [
    "Welcome to my Image Slider!","photos made by me",
    "Lacul Tei","varza",
    "Prundu","Tot tei"
];

let id=0;

function slide(id){
    slider.style.backgroundImage=
    `url(${images[id]})`;
    //fade animation
    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade');
    },550);
    heading.innerHTML = headings[id];

}
arrLeft.addEventListener('click',()=>{
    id--;
    if(id<0){
        id=images.length-1;
    }
    slide(id);
})

arrRight.addEventListener('click',()=>{
    id++;
    if(id>images.length-1){
        id=0;
    }
    slide(id);
});
