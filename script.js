//show email modals
//first
const modalOne = document.querySelector('.modal-one');
const modalBtnOne = document.querySelector('.close-btn-one');
const modalOpenOne = document.getElementById('email-modal-btn-one');

modalOpenOne.addEventListener('click', () => {
    modalOne.classList.add('open');
});
modalBtnOne.addEventListener('click', () => {
    modalOne.classList.remove('open');
});
//close by clicking anywhere outside
window.addEventListener('click', (e) => {
   if(e.target == modalOne){
    modalOne.classList.remove('open');
   }
})
//two
const modalTwo = document.querySelector('.modal-two');
const modalBtnTwo = document.querySelector('.close-btn-two');
const modalOpenTwo = document.getElementById('email-modal-btn-two');

modalOpenTwo.addEventListener('click', () => {
    modalTwo.classList.add('open');
});
modalBtnTwo.addEventListener('click', () => {
    modalTwo.classList.remove('open');
});
//close by clicking anywhere outside
window.addEventListener('click', (e) => {
   if(e.target == modalTwo){
    modalTwo.classList.remove('open');
   }
})
//three
const modalThree = document.querySelector('.modal-three');
const modalBtnThree = document.querySelector('.close-btn-three');
const modalOpenThree = document.getElementById('email-modal-btn-three');

modalOpenThree.addEventListener('click', () => {
    modalThree.classList.add('open');
});
modalBtnThree.addEventListener('click', () => {
    modalThree.classList.remove('open');
});
//close by clicking anywhere outside
window.addEventListener('click', (e) => {
   if(e.target == modalThree){
    modalThree.classList.remove('open');
   }
})
//resize bug
const bug = document.getElementById('dragonfly');
const bugButton = document.getElementById('bug-change');
const viewboxBig = "0 100 600 500";
const viewboxSmall = "-1100 0 3000 600";
console.log(bug.getAttribute('viewBox'));
bugButton.addEventListener('click', () => {
    if(bug.getAttribute('viewBox') == viewboxSmall){
        bugButton.innerHTML = "Less Oxygen";
        bug.setAttribute('viewBox', viewboxBig);
        console.log(bug.getAttribute('viewBox'));
    }else{
        bugButton.innerHTML = "More Oxygen";
        bug.setAttribute('viewBox', viewboxSmall);
        console.log(bug.getAttribute('viewBox'));
    }
}) 
//do building animation
//get major group elements
const road = document.getElementById('road');
const mainSidewalk = document.getElementById('sidewalk');
const otherSidewalk = document.getElementById('sidewalk2');
const parkingLot = document.getElementById('parking_lot');
const building = document.getElementById('building');
const roof = document.getElementById('roof');
const roofStuff = document.getElementById('roof_stuff');
const streetLamp = document.getElementById('street_lamp');
const bench = document.getElementById('bench');
const benchOther = document.getElementById('bench1');
const buildingShadow = document.getElementById('building_shadow');
const benchShadowOne = document.getElementById('bench_shadow');
const benchShadowTwo = document.getElementById('bench_shadow1');
//roads and sidewalks
//set opacity to 0 to avoid flash
gsap.set(building, {
    opacity:0
})
let roadAnim = gsap.fromTo(road,
    {x:-400},
    {x:220,
        ease:"slow (0.7,0.7, false)"
    }
);
let mainSidewalkAnim = gsap.fromTo(mainSidewalk,
    {x:-1000},
    {x:0,
        ease:"slow (0.7,0.7, false)"
    }
);
let otherSidewalkAnim = gsap.fromTo(otherSidewalk,
    {x:-1000},
    {x:0,
        ease:"slow (0.7,0.7, false)"
    }
);
//600 change
let parkingLotAnim = gsap.fromTo(parkingLot,
    {x:-1000},
    {x:0,
        ease:"slow (0.7,0.7, false)"
    }
);
//roof and building
let buildingAnim = gsap.fromTo(building, 
    {x:-1100,
        opacity:1
    },
    {x:0,
        delay:1,
        ease:"slow (0.7,0.7, false)"
    }
);
let buildingShadowAnim = gsap.fromTo(buildingShadow, 
    {x:-1000},
    {x:310,
        delay:1,
        ease:"slow (0.7,0.7, false)"
    }
);
let benchShadowOneAnim = gsap.fromTo(benchShadowOne, 
    {x:-1000},
    {x:590,
     delay:1.5,
     ease:"slow (0.7,0.7, false)"
    }
);
let benchShadowTwoAnim = gsap.fromTo(benchShadowTwo, 
    {x:-1000},
    {x:300,
        ease:"slow (0.7,0.7, false)",
    delay:1.5}
);
let roofAnim =  gsap.fromTo(roof, 
    {x:-1000},
    {x:80,
        delay:1.2,
        ease:"slow (0.7,0.7, false)"
    }
);
//roof stuff
//benches and street lamp
let benchAnim = gsap.fromTo(bench,
    {x:-800},
    {x:20,
    delay:2,
    ease:"slow (0.7,0.7, false)"
}
    );
let benchOtherAnim = gsap.fromTo(benchOther,
    {x:-800},
    {x:280,
    delay:2,
    ease:"slow (0.7,0.7, false)"
}
    );
let streetLampAnim =  gsap.fromTo(streetLamp,
    {x:-800},
    {x:20,
    delay:2.5,
    ease:"slow (0.7,0.7, false)"
});
let roofStuffAnim =  gsap.fromTo(roofStuff, 
    {x:-1000},
    {x:0,
        delay:3,
        ease:"slow (0.7,0.7, false)"
    }
);
const buildingBtn = document.getElementById('building-animation');
roadAnim.pause();
mainSidewalkAnim.pause();
otherSidewalkAnim.pause();
parkingLotAnim.pause();
roofAnim.pause();
roofStuffAnim.pause();
buildingAnim.pause();
buildingShadowAnim.pause();
benchShadowOneAnim.pause();
benchShadowTwoAnim.pause();
benchAnim.pause();
benchOtherAnim.pause();
streetLampAnim.pause();

buildingBtn.addEventListener('click', () => {
    if(buildingBtn.innerHTML == 'Go'){
        roadAnim.play();
        mainSidewalkAnim.play();
        otherSidewalkAnim.play();
        parkingLotAnim.play();
        roofAnim.play();
        roofStuffAnim.play();
        buildingAnim.play();
        buildingShadowAnim.play();
        benchShadowOneAnim.play();
        benchShadowTwoAnim.play();
        benchAnim.play();
        benchOtherAnim.play();
        streetLampAnim.play();
        buildingBtn.innerHTML = 'Restart';        
    }else if(buildingBtn.innerHTML == 'Restart'){
        roadAnim.reverse();
        mainSidewalkAnim.reverse();
        otherSidewalkAnim.reverse();
        parkingLotAnim.reverse();
        roofAnim.reverse();
        roofStuffAnim.reverse();
        buildingAnim.reverse();
        buildingShadowAnim.reverse();
        benchShadowOneAnim.reverse();
        benchShadowTwoAnim.reverse();
        benchAnim.reverse();
        benchOtherAnim.reverse();
        streetLampAnim.reverse();
        buildingBtn.innerHTML = 'Go'; 
    }
})
//lab
const petri = document.getElementById('petri');
const beaker = document.getElementById('beaker');
const tray = document.getElementById('tray');
const labLabel = document.getElementById("lab-labels");
labLabel.innerHTML = "";
//make the elements hop so the user notice sthem
/* gsap.fromTo(beaker, {
    scrollTrigger:{
        trigger:".advanced",
        start:"top top"
    },
    y:-60,
}) */

/* gsap.from(".advanced", {
    scrollTrigger:{
        trigger:".advanced",
        markers:true,
        scrub:1
    },
    duration:1.8,
    opacity:0
}); */
function itemsHop(item){
    let hopTl = gsap.timeline();
    hopTl.from(item, {
        stagger:{
            each:.1,
            ease:"power2",
            y:10,
            start:"100% 50%",
            duration:.6,
        }
    })
    return hopTl;
}

let thisMain = gsap.timeline({
    scrollTrigger:{
        trigger:".advanced",
        start:"50% 100%",
        end:"100% 100%",
        markers:true
    }
});
thisMain.add(itemsHop(petri));
thisMain.add(itemsHop(beaker));
thisMain.add(itemsHop(tray));

beaker.addEventListener("click", () =>{
    gsap.to(beaker, {
        y:-30,
        duration:1
    });
    gsap.set(petri, {
        y:0
    });
    gsap.to(tray, {
        y:0
    });
    labLabel.innerHTML = "beaker";
});
tray.addEventListener("click", () =>{
    gsap.to(tray, {
        y:-30,
        duration:1
    });
    gsap.set(petri, {
        y:0
    });
    gsap.to(beaker, {
        y:0
    });
    labLabel.innerHTML = "perforated sample tray";
});
petri.addEventListener("click", () =>{
    gsap.to(petri, {
        y:-30,
        duration:1
    });
    gsap.set(beaker, {
        y:0
    });
    gsap.to(tray, {
        y:0
    });
    labLabel.innerHTML = "petri dish";
});
//confetti button
/* const confetti = document.getElementById('confetti');
const confettis = gsap.utils.toArray(confetti.children);
const confBtn = document.getElementById("conf-button");

///master tl
var isPlaying = false;
const masterTime = gsap.timeline();
const confTime = gsap.timeline();
function makeConfetti(){
    confTime.to(confetti,
        {
            y:-100
        })
      confettis.forEach(conf => {
        //try using stagger here
        let goX = random(10, 100);
          confTime.to(conf, {
            y:10,
            x:goX,
            duration:.01,
            opacity:1
          });
          confTime.to(conf, {
            opacity:0,
            duration:.1
          });
      })
      isPlaying = true;
}
function something(){
    if(isPlaying){
        console.log('hello');
        let originY = 0;
        confettis.forEach(conf => {
            originX = conf.getAttribute.y;
              confTime.to(conf, {
                y:200,
                x:100,
                opacity:0
              });
              confTime.to(conf, {
                opacity:1
              });
          })
          isPlaying = false;
    }
}
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}
confBtn.addEventListener("click", () => {
    makeConfetti();
    something();
}) */
//problems
//moving to specific points rather than relative,
//each confettin moving one at a time rather than at the same time


