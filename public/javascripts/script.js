
// dom manipulation
function changename(){
    document.getElementById("change").innerHTML="Clicking the button altered the text via DOM manipulation. The next page reveals global unity through melodies from diverse countries, fostering awareness about global warming. A follow-up quiz engages users, creating an interactive and educational experience that promotes environmental consciousness.";
    }
    
    
    
    
    
    
    // second page slider
    
    document.getElementById('next').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }
    document.getElementById('prev').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }
    
    // song stop and play func
      
    let stop=songfunc();
    function songfunc(){
        let mysong=document.getElementById('mySong');
        let mysong2=document.getElementById('mySong2');
        let mysong3=document.getElementById('mySong3');
        let mysong4=document.getElementById('mySong4');
    
        mysong.onplay=function(){
            mysong2.pause();
            mysong3.pause();
            mysong4.pause();
        }
        mysong2.onplay=function(){
            mysong.pause();
            mysong3.pause();
            mysong4.pause();
        }
        mysong3.onplay=function(){
            mysong.pause();
            mysong2.pause();
            mysong4.pause();
        }
        return mysong;
    }
    
    // india
    
    var mySong = document.getElementById('mySong');
        var icon = document.getElementById('icon');
    
        icon.onclick = function() {
           if(mySong.paused){
            mySong.play();
            icon.src = "/images/pause.png";
           }else{
            mySong.pause();
            icon.src = "/images/play.png";
           }
        }
    // china
        var mySong2 = document.getElementById('mySong2');
        var icon2 = document.getElementById('icon2');
    
        icon2.onclick = function() {
           if(mySong2.paused){
            mySong2.play();
            icon2.src = "/images/pause.png";
           }else{
            mySong2.pause();
            icon2.src = "/images/play.png";
           }
        }
    
        // mexico
        var mySong3 = document.getElementById('mySong3');
        var icon3 = document.getElementById('icon3');
    
        icon3.onclick = function() {
           if(mySong3.paused){
            mySong3.play();
            icon3.src = "/images/pause.png";
           }else{
            mySong3.pause();
            icon3.src = "/images/play.png";
           }
        }
    
    // scotland
        var mySong4 = document.getElementById('mySong4');
        var icon4 = document.getElementById('icon4');
    
        icon4.onclick = function() {
           if(mySong4.paused){
            mySong4.play();
            icon4.src = "/images/pause.png";
           }else{
            mySong4.pause();
            icon4.src = "/images/play.png";
           }
        }
    
        // gsap
        
        var tl=gsap.timeline()
tl.from("nav,ul,a,.logo,.search",{duration:0.8,opacity:0,y:-100,delay:1,stagger:0.2})
tl.from(".wrapper,.wrapper>button",{y:300,opacity:0,stagger:0.5,duration:1})
    
    
    // scroll trigger on .cara 
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.from(".cara",{
    //     scrollTrigger:{
    //         trigger:".cara",
    //         toggleActions:"restart none none none",
    //         start:"top 130%",
    //         end:"bottom 100%",
    //         scrub:1,
    //         markers:true,
    //     },
    //     x:100,
    //     duration:2,
    //     stagger:1,
    //     opacity:0,
    //     ease:"power1.inOut",
    //     delay:1,
    // })
    tl.from(".container",{
        // scroll trigger
        scrollTrigger:{
            trigger:".container",
            toggleActions:"restart none none none",
            start:"top 90%",
            end:"bottom 90%",
            scrub:1,
           
        },  
        x:-300,
        duration:2,
        stagger:1,
        opacity:0,
        ease:"power1.inOut",
        delay:2,
    })
    
     tl.from(".cara h1",{
        scrollTrigger:{
            trigger:".cara h1",
            toggleActions:"restart none none none",
            start:"top 65%",
            end:"bottom 65%",
            scrub:1,
            
        },
        y:300,
        duration:2,
        stagger:1,
        opacity:0,
        ease:"power1.inOut",
        delay:3,
    })
    
    tl.from(".cara h1 small",{
        scrollTrigger:{
            trigger:".cara h1 small",
            toggleActions:"restart none none none",
            start:"top 63%",
            end:"bottom 60%",
            scrub:1,
            
        },
        y:300,
        duration:2,
        stagger:1,
        opacity:0,
        ease:"power1.inOut",
        delay:3,
    })
    
    
    //   swiper
          
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        grabCursor:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
    
    // third page
    
    
      var tl = gsap.timeline({scrollTrigger:{
        trigger:"#main",
       //  markers:true,
        start:"50% 50%",
        end:"150% 50%",
        scrub:2,
        pin:true
    }});
    tl
    .to("#center",{
       height: "100vh",
    },'a')
    .to("#top",{
        top: "-50%",
     },'a')
     .to("#bottom",{
        bottom: "-50%",
     },'a')
    .to("#top-h1",{
        top: "60%"
     },'a')
     .to("#bottom-h1",{
        bottom: "-30%"
     },'a')
    .to("#center-h1",{
       top: "-30%"
    },'a')
    .to(".content",{
       delay: -0.2,
       marginTop: "0%"
    })
    
    
    // cards
    const panels = document.querySelectorAll('.panel')
    
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
        })
    })
    
    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }
    
    // fourth page
    
    
    
    tl.from(".rolling h1",{
        scrollTrigger:{
            trigger:".rolling h1",
            toggleActions:"restart none none none",
            start:"top 50%",
            end:"bottom 40%",
            scrub:1,
    
        },
       x:-2000,
      
       duration:5,
       delay:2,
    ease: "slow(0.1,0.1,false)",
      
        
    })
    
    tl.from(".quizzz",{
        scrollTrigger:{
            trigger:".quizzz",
            toggleActions:"restart none none none",
            start:"top 150%",
            end:"bottom 100%",
            scrub:1,
        
    
        },
       backgroundColor:"white",
        
        ease:"power1.inOut",
      
        
    })
    
    // contact form
    tl.from(".contactme",{
        scrollTrigger:{
            trigger:".contactme",
            toggleActions:"restart none none none",
            start:"top 90%",
            end:"bottom 75%",
            scrub:1,
        },
       opacity:0,
       stagger:2.0,
        
        ease:"power1.inOut",
      
    })

    tl.from(".contactinfo h1",{
        scrollTrigger:{
            trigger:".contactinfo h1",
            toggleActions:"restart none none none",
            start:"top 90%",
            end:"bottom 75%",
            scrub:1,
        },
        y:100,
        stagger:1,
        ease:"power1.inOut",
    })
    

    document.querySelector(".contactinfo button")
    .addEventListener("mouseover",function(){
        gsap.to(".contactinfo video",{
            opacity:1,
            duration:1.5,
            ease:Power4
        })
        gsap.to(".contactinfo h1",{
            color:"white",
        })
    })
    
    // document.querySelector(".contactinfo button")
    // .addEventListener("mouseleave",function(){
    //     gsap.to(".contactinfo video",{
    //         opacity:0,
    //         duration:1.5,
    //         ease:Power4
    //     })
    //     gsap.to(".contactinfo h1",{
    //         color:"black",
    //     })
    // })

    