
const my2 = document.querySelector( "#subham img")
const my = document.querySelector( "#subham1 h3")
const my1 = document.querySelector( "#subham  img")
const h3 = document.querySelector(" #im h3 ");
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
const cards = document .querySelector("#card1")
const cards1 = document .querySelector("#card2")
const cards2 = document .querySelector("#card3")
const c = document .querySelector("#c1")
const c1 = document .querySelector("#c2")
const c2 = document .querySelector("#c3")

cards1.addEventListener("mouseenter",bounce1);
cards2.addEventListener("mouseenter",bounce2);
cards.addEventListener("mouseenter",bounce);



c1.addEventListener("mouseenter",b1);
c2.addEventListener("mouseenter",b2);
c.addEventListener("mouseenter",b);



c1.addEventListener("mouseleave",l1);
c2.addEventListener("mouseleave",l2);
c.addEventListener("mouseleave",l);


// mouseleave

function l() {
  gsap.to ( c , { scale:1 , ease:'power2.out',duration:0.3})
gsap.to(c, { boxShadow: 'none', ease: 'power2.out', duration: 0.3 });
}

function l1() {
  gsap.to ( c1 , { scale:1 , ease:'power2.out',duration:0.3})
gsap.to(c1, { boxShadow: 'none', ease: 'power2.out', duration: 0.3 });
}

function l2() {
  gsap.to ( c2 , { scale:1 , ease:'power2.out',duration:0.3})
  gsap.to(c2, { boxShadow: 'none', ease: 'power2.out', duration: 0.3 });
}

// mouseenter 

function b() {
  gsap.to ( c , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})
  gsap.to(c, { boxShadow: '0 0 20px 10px #3498db', ease: 'power2.out', duration: 0.3 });

}

function b1() {
  gsap.to ( c1 , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})
  gsap.to(c1, { boxShadow: '0 0 20px 10px #3498db', ease: 'power2.out', duration: 0.3 });

}

function b2() {
  gsap.to ( c2 , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})
  gsap.to(c2, { boxShadow: '0 0 20px 10px #3498db', ease: 'power2.out', duration: 0.3 });

}


my2.addEventListener( "mouseenter",function() {
    

    gsap.to ( my2 , { scale:1.2 , ease:'power2.out',duration:1,yoyo:true,repeat:1})
    gsap.to(my2, { boxshadow: 'none'});


});


function bounce() {
    gsap.to ( cards , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})
    
}

function bounce1() {
    gsap.to ( cards1 , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})

}

function bounce2() {
    gsap.to ( cards2 , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})

}

cards.addEventListener("mouseleave", function() {
    cards.style.transform = 'rotate(0deg)';

});

cards1.addEventListener("mouseleave", function() {
    cards1.style.transform = 'rotate(0deg)';

});

cards2.addEventListener("mouseleave", function() {
    cards2.style.transform = 'rotate(0deg)';

});


document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x+30 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document .querySelectorAll( "#nav h4")
h4all.forEach( function (elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale = 3
        crsr.style.border= " 1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        gsap.to(h4all, { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff', ease: 'power2.out', duration: 0.5 });
        gsap.to ( h4all , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})
   
    });

    elem.addEventListener("mouseleave", function() {
        crsr.style.scale = 1
        crsr.style.border= " 0px solid  #95c11e"
        crsr.style.backgroundColor = "#95c11e"
        gsap.to(h4all, { textShadow: 'none', ease: 'power2.out', duration: 0.5 });
    })
});




 gsap.to(h3, {ease: 'power2.out', duration: 0.5 });
 gsap.to ( h3 , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1});
gsap.from( "#im h3", {
         
        x: -90,
       duration:2,
        stragger:0.3,
        scrollTrigger: {
          trigger: "#im h3",
          scroller: "body",
        //   markers:true,
          start:"top 75%",
          end:"top 65%",
          scrub:2,
        },

    })


    

 gsap.to(my, {ease: 'power2.out', duration: 0.5 });
 gsap.to ( my , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1});
gsap.from( "#subham1 h3", {
         
        x:90,

        stragger:0.3,
        scrollTrigger: {
          trigger: "#subham1 h3",
          scroller: "body",
        //   markers:true,
          start:"top 75%",
          end:"top 65%",
          scrub:2,
        },

    })

    

 gsap.to(my1, {ease: 'power2.out', duration: 0.5 });
 gsap.to ( my1 , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1});
gsap.from( "#subham img", {
         
        x:-90,

        stragger:0.3,
        scrollTrigger: {
          trigger: "#subham img",
          scroller: "body",
        //   markers:true,
          start:"top 75%",
          end:"top 65%",
          scrub:2,
        },

    })

gsap.from( "#bottom" , {

  x:50,

    stragger:0.3,
    duration:1,
    scrollTrigger: {
      trigger: "#bottom",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 95%",
      scrub:2,
    },

})


gsap.from ( "#c1", {
  
  y:50,

    stragger:0.3,
    scrollTrigger: {
      trigger: "#c1",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 95%",
      scrub:2,
    },
})

 

gsap.from ( "#c2", {
  
  y:50,

    stragger:0.3,
    scrollTrigger: {
      trigger: "#c2",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 95%",
      scrub:2,
    },
})



gsap.from ( "#c3", {
  
  y:50,

    stragger:0.3,
    scrollTrigger: {
      trigger: "#c3",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 95%",
      scrub:2,
    },
})


const h1 = document .querySelector("#page1 h1")
h1.addEventListener( "mouseenter" , function() {
    opacity=0
    h1.style.backgroundColor = "transparent"
    gsap.to(h1, { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff', ease: 'power2.out', duration: 0.5 });


});

h1.addEventListener( "mouseleave" , function() {
    gsap.to(h1, { textShadow: 'none', ease: 'power2.out', duration: 0.5 });
})

gsap.to("#nav", {
    backgroundColor :"#000",
    height:"100px",
    duration : 0.5,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})

gsap.to( "#im #im1",{
    y: 90,

    stragger:0.3,
    scrollTrigger: {
      trigger: "#im #im1",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:2,
    },
  
})

gsap.to ( "#main" , {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})

gsap.from("#about-us img", {
    y: 90,
    scale:0.6,

    opacity: 0,
    duration: 1,
    stragger:0.3,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:2,
    },
});


gsap.from("#about-us-in", {
    y: 90,
    scale:0.6,

    opacity: 0,
    duration: 1,
    stragger:0.3,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:true,
    },
});

 
gsap.from("#green-div img",{
    y: 90,
    scale:0.6,

    opacity: 0,
    duration: 1,
    stragger:0.3,
    scrollTrigger: {
      trigger: "#green-div",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:2,
    },
});

 
gsap.from("#green-div h4", {
    x: 90,
    scale:0.6,

    opacity: 1,
    duration: 1,
    stragger:0.3,
    scrollTrigger: {
      trigger: "#green-div",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:2,
    },
});

 

gsap.from(".card", {
    x:70,
    scale:0.6,
    opacity: 0,
    duration: 1,
    stragger:0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
    //   markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:1,
    },
});

 

gsap.from(".c", {
  x:70,
  scale:0.6,
  opacity: 0,
  duration: 1,
  stragger:0.1,
  scrollTrigger: {
    trigger: ".c",
    scroller: "body",
  //   markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1,
  },
});

gsap.from("#colon1", {
    y:-60,
    x:-60,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,

    }

});

 
gsap.from("#colon2", {
    y:90,
    x:80,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,

    }

});

gsap.from ("#page4 h1" , {
    y:50,
    scrollTrigger: {
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 76%",
        scrub:3,

    }
})

gsap.from ( "#im img", {
    x:100,
    scrollTrigger: {
        trigger:"#im img",
        scroller:"body",
        start:"top 75%",
        end:"top 76%",
        scrub:4,

    }

})


const c1h4 = document . querySelector ( "#c1 h4")
const c2h4 = document . querySelector ( "#c2 h4")
const c3h4 = document . querySelector ( "#c3 h4")


// const c1p = document . querySelector ( "#c1 p")
// const c2p = document . querySelector ( "#c2 p")
// const c3p = document . querySelector ( "#c3 p")

c2h4.addEventListener( "mouseover" , function ontherole1() {
   
  gsap.to ( "#c2 h4" , {
     x:-30,
    //  ease:"linear",
     duration:1,
    //  repeat: 1,

    // stragger:0.3,
    scrollTrigger: {
      trigger: "#c2 h4",
      scroller: "body",
      //   markers:true,
      start:"top 70%",
      end:"top 95%",
      // scrub:2,
    },
  })
})

// 


c2h4.addEventListener( "mouseleave" , function ontherole1() {
   
  gsap.to ( "#c2 h4" , {
     x:30,
     scale:1,
    //  ease:"linear",
    //  duration:1,
    //  repeat: 1,

    // stragger:0.3,
    scrollTrigger: {
      trigger: "#c2 h4",
      scroller: "body",
      //   markers:true,
      // start:"top 70%",
      // end:"top 95%",
      // scrub:2,
    },
  })
})


c3h4.addEventListener( "mouseover" ,function ontherole2() {
   
  gsap.to ( "#c3 h4" , {
     
     x:-30,

    //  ease:"linear",
     duration:1,
    //  repeat: 1,

    // stragger:0.3,
    scrollTrigger: {
      trigger: "#c3 h4",
      scroller: "body",
      //   markers:true,
      start:"top 70%",
      end:"top 95%",
      // scrub:2,
    },
  })
})

//

c3h4.addEventListener( "mouseleave" ,function ontherole2() {
   
  gsap.to ( "#c3 h4" , {
     
     x:30,
     scale:1,


    //  ease:"linear",
    //  duration:1,
    //  repeat: 1,

    // stragger:0.3,
    scrollTrigger: {
      trigger: "#c3 h4",
      scroller: "body",
      //   markers:true,
      // start:"top 70%",
      // end:"top 95%",
      // scrub:2,
    },
  })
})

c1h4.addEventListener( "mouseover" , function ontherole() {
   
  gsap.to ( "#c1 h4" , {
     
     x:-30,

    //  ease:"linear",
     duration:1,
    //  repeat: 1,
    // stragger:0.3,
    scrollTrigger: {
      trigger: "#c1 h4",
      scroller: "body",
      //   markers:true,
      start:"top 70%",
      end:"top 95%",
      // scrub:2,
    },
  })
})

// 


c1h4.addEventListener( "mouseleave" , function ontherole() {
   
  gsap.to ( "#c1 h4" , {
     
     x:30,
     scale:1,


    //  ease:"linear",
    //  duration:1,
    //  repeat: 1,
    // stragger:0.3,
    scrollTrigger: {
      trigger: "#c1 h4",
      scroller: "body",
      //   markers:true,
      // start:"top 70%",
      // end:"top 95%",
      // scrub:2,
    },
  })
})




c1h4.addEventListener( "mouseleave",  function() {
  c1h4.style.scale = 1
});

c2h4.addEventListener( "mouseleave",  function() {
  c2h4.style.scale = 1
});

c3h4.addEventListener( "mouseleave",  function() {
  c3h4.style.scale = 1
});


var s1 = document .querySelector("#b1");
s1.addEventListener( "click" , function() {
  s1.style.backgroundColor="transparent"
  s1.style.scale= 1.1
  s1.innerText="Not Available"  
 s1.style.backGround= "linear-gradient(black, white);"
  gsap.to(s1, { transition: 'all ease-in-out 0.5s', ease: 'power2.out', duration: 0.3 });

})

s1.addEventListener( "mouseleave" , function() {
  s1.style.backgroundColor="#3498db"
  s1.style.scale= 1
  s1.innerText="Check Availability"  
  gsap.to(s1, { boxShadow: 'none', ease: 'power2.out', duration: 0.3 });
  

})

 
var s2 = document .querySelector("#b2");
s2.addEventListener( "click" , function() {
  s2.style.backgroundColor="transparent"
  s2.style.scale= 1.1
  s2.style.cursor = "pointer"
  s2.innerText="From 12th March"  
 s2.style.backGround= "linear-gradient(black, white);"
  gsap.to(s2, { transition: 'all ease-in-out 0.5s', ease: 'power2.out', duration: 0.3 });

})

s2.addEventListener( "mouseleave" , function() {
  s2.style.backgroundColor="#3498db"
  s2.style.scale= 1
  s2.innerText="Check Availability"  
  gsap.to(s2, { boxShadow: 'none', ease: 'power2.out', duration: 0.3 });


})

 
var s3 = document .querySelector("#b3");
s3.addEventListener( "click" , function() {
  s3.style.backgroundColor="transparent"
  s3.style.scale= 1.1
  s3.style.cursor = "pointer"
  s3.innerText="Bookings Open"  
 s3.style.backGround= "linear-gradient(black, white);"
  gsap.to(s3, { transition: 'all ease-in-out 0.5s', ease: 'power2.out', duration: 0.3 });

})

s3.addEventListener( "mouseleave" , function() {
  s3.style.backgroundColor="#3498db"
  s3.style.scale= 1
  s3.innerText="Check Availability"  
  gsap.to(s3, { boxShadow: 'none', ease: 'power2.out', duration: 0.3 });


})

gsap.to("#d1 h1" ,  {

  x:10,
  scrollTrigger: {
      trigger:"#d1 h1",
      scroller:"body",
      start:"top 75%",
      end:"top 76%",
      scrub:4,

  }

})

 
gsap.to("#d1 h3" ,  {

  x:-10,
  scrollTrigger: {
      trigger:"#d1 h3",
      scroller:"body",
      start:"top 75%",
      end:"top 76%",
      scrub:4,

  }

})


gsap.to("#d2 h1" ,  {

  x:10,
  scrollTrigger: {
      trigger:"#d2 h1",
      scroller:"body",
      start:"top 75%",
      end:"top 76%",
      scrub:4,

  }

})


gsap.to("#d2 h3" ,  {

  x:-10,
  scrollTrigger: {
      trigger:"#d2 h3",
      scroller:"body",
      start:"top 75%",
      end:"top 76%",
      scrub:4,

  }

})



gsap.to("#d3 h1" ,  {

  x:10,
  scrollTrigger: {
      trigger:"#d3 h1",
      scroller:"body",
      start:"top 75%",
      end:"top 76%",
      scrub:4,

  }

})

 
gsap.to("#d3 h3" ,  {

  x:-10,
  scrollTrigger: {
      trigger:"#d3 h3",
      scroller:"body",
      start:"top 75%",
      end:"top 76%",
      scrub:4,

  }

})
