const loaderEl = document.getElementsByClassName("loader")[0];
const slider = document.getElementsByClassName("slider")[0];
const bottomLeftBg = document.getElementsByClassName("bottom-left-bg")[0];
const topRightBg = document.getElementsByClassName("top-right-bg")[0];
let currentIndex = 1;
const classListProperty = {
    rotation: [100, 190, 280, 10],
    bgGreen: ["url('./img/svg/Rectangle1g.svg') 100% / 80% no-repeat", "url('./img/svg/Rectangle2g.svg') -20% / 70% no-repeat"],
    bgPink: ["url('./img/svg/Rectangle1p.svg') 100% / 80% no-repeat", "url('./img/svg/Rectangle2p.svg') -20% / 70% no-repeat"],
    bgBlue: ["url('./img/svg/Rectangle1b.svg') 100% / 80% no-repeat", "url('./img/svg/Rectangle2b.svg') -20% / 70% no-repeat"],
    bgYellow: ["url('./img/svg/Rectangle1.svg') 100% / 80% no-repeat", "url('./img/svg/Rectangle2.svg') -20% / 70% no-repeat"],
}

// webpage loader 
const loader = () => {
    loaderEl.style.animation = "toLoaderDown ease-in 1s 1s";
    for (let i = 0; i < classListProperty.rotation.length; i++) {
        sliderDonut(classListProperty.rotation[i])
    }
    setTimeout(() => {
        loaderEl.style.display = "none";
    }, 1950)
}
window.onload = loader;

const sliderDonut = (index) => {
    slider.style.transform = `rotate(${index}deg)`
    if(index == 10){
        topRightBg.style.background = classListProperty.bgPink[0];
        bottomLeftBg.style.background = classListProperty.bgPink[1];
    }else if(index == 100){
        topRightBg.style.background = classListProperty.bgYellow[0];
        bottomLeftBg.style.background = classListProperty.bgYellow[1];
    }else if(index == 190){
        topRightBg.style.background = classListProperty.bgBlue[0];
        bottomLeftBg.style.background = classListProperty.bgBlue[1];
    }else if(index == 280){
        topRightBg.style.background = classListProperty.bgGreen[0];
        bottomLeftBg.style.background = classListProperty.bgGreen[1];
    }
}






