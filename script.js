var flag = 0
document.querySelector("#box1").addEventListener("click",function(){
    if(flag==0){
        document.querySelector("#box1 img").style.opacity = 0
        document.querySelector("#box1 video").style.opacity = 1
        document.querySelector("#circle").style.rotate = "180deg"
        document.querySelector("#txt1").style.transform = "translatey(50%)"
        document.querySelector("#txt1").style.opacity = 0

        flag = 1
    }else{
        document.querySelector("#box1 img").style.opacity = 1
        document.querySelector("#box1 video").style.opacity = 0
        document.querySelector("#circle").style.rotate = "0deg"

        document.querySelector("#txt1").style.transform = "translatey(0%)"
        document.querySelector("#txt1").style.opacity = 1

        flag = 0
    }
})

var circle = document.querySelector("#circle")
document.querySelector("#box1").addEventListener("mousemove",function(dets){
    circle.style.opacity = 1
    circle.style.left = `${dets.clientX}px`
    circle.style.top = `${dets.clientY}px`
})
document.querySelector("#box1").addEventListener("mouseleave",function(dets){
    circle.style.opacity = 0

})



document.querySelector("#box2 button").addEventListener("mousemove",function(){
    document.querySelector("#box2 button").style.scale=1.1
})
document.querySelector("#box2 button").addEventListener("mouseleave",function(){
    document.querySelector("#box2 button").style.scale=1
})
document.querySelector("#box6 button").addEventListener("mousemove",function(){
    document.querySelector("#box6 button").style.scale=1.1
})
document.querySelector("#box6 button").addEventListener("mouseleave",function(){
    document.querySelector("#box6 button").style.scale=1
})
gsap.fromTo("#boo",{
    y:0
},{
    y:"-100%",
    duration:1,
    delay:1
})
gsap.fromTo("#nav,#nav img,#n2 a,#nav i",{
    opacity:0,
    y:20
},{
    opacity:1,
    y:0,
    stagger:.1,
    delay:1
})
gsap.fromTo("#txt1",{
    opacity:0,
    y:100
},{
    opacity:1,
    y:-100,
    // stagger:.5,
    delay:1.5
})


gsap.to("#txt1a h1",{
    scrollTrigger:{
        trigger:"#box1",
        start:"60% 60%",
        end:"60% 60%",
        scrub:2,
        // markers:true,
        pin:true
    },
    y:"160%"
    })
    
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"10% 50%",
        end:"10% 50%",
        scrub:4,
        // markers:true,
        pin:true
    },
})
tl.fromTo("#txt2",{
    y:100
},{
    y:-100
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"30% 50%",
        end:"30% 50%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl2.fromTo("#box2img1",{
    y:700
},{
    y:500,
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"30% 50%",
        end:"30% 50%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl3.fromTo("#box2img3",{
    y:600
},{
    y:400,
})
var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"10% 50%",
        end:"10% 50%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl4.fromTo("#box2img2",{
    y:500
},{
    y:200,
})
var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"60% 80%",
        end:"60% 80%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl5.fromTo("#chair",{
    y:-100
},{
    y:-300,
})
var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"60% 70%",
        end:"60% 70%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl6.fromTo("#txt3",{
    y:-100
},{
    y:-300,
})


var tl7 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"60% 70%",
        end:"60% 70%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl7.fromTo("#box2 button",{
    y:100
},{
    y:-300,
})

var tl8 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box3",
        start:"-30% 40%",
        end:"-30% 40%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl8.fromTo("#txt4",{
    y:100
},{
    y:-300,
})

var tl9 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box3",
        start:"-30% 10%",
        end:"20% 40%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl9.fromTo("#shop",{
    y:100
},{
    y:-200,
})

var tl10 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box4",
        start:"-30% 10%",
        end:"20% 40%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl10.fromTo("#box5",{
    y:0
},{
    y:-200,
})

var tl11 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box6",
        start:"0% 60%",
        end:"0% 60%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl11.fromTo("#txt5",{
    y:10
},{
    y:-100,
})

var tl12 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box6",
        start:"20% 60%",
        end:"40% 60%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl12.fromTo("#box6img2,#box6img3",{
    y:10
},{
    y:-200,
})

var tl13 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box6",
        start:"50% 60%",
        end:"60% 60%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl13.fromTo("#txt6",{
    y:10
},{
    y:-100,
})

var tl13 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box6",
        start:"80% 60%",
        end:"80% 60%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl13.fromTo("#box6 button",{
    y:10
},{
    y:-100,
})
var tl14 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box8",
        start:"10% 60%",
        end:"15% 60%",
        scrub:4,
        // markers:true,
        pin:true,
    }
})

tl14.fromTo("#box8 img",{
    y:150
},{
    y:0,
})


    