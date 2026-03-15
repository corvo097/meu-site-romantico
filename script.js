const startDate=new Date("2023-11-01T00:00:00")

function updateCounter(){

const now=new Date()

const diff=now-startDate

const days=Math.floor(diff/(1000*60*60*24))
const hours=Math.floor((diff/(1000*60*60))%24)
const minutes=Math.floor((diff/(1000*60))%60)
const seconds=Math.floor((diff/1000)%60)

document.getElementById("time-counter").innerText=
`${days} dias ${hours}h ${minutes}m ${seconds}s juntos`

}

updateCounter()
setInterval(updateCounter,1000)



const phrases=[

"Você é meu lugar favorito.",
"Nosso amor é infinito.",
"Meu mundo começa em você.",
"Para sempre nós.",
"Meu coração sempre será seu."

]

let index=0
const phraseContainer=document.getElementById("floating-phrase")

function rotatePhrase(){

phraseContainer.style.opacity=0

setTimeout(()=>{

phraseContainer.innerText=phrases[index]

index=(index+1)%phrases.length

phraseContainer.style.opacity=1

},400)

}

rotatePhrase()
setInterval(rotatePhrase,5000)



const gallery=document.getElementById("gallery")
const mainPhoto=document.getElementById("mainPhoto")
const closeGallery=document.getElementById("closeGallery")

mainPhoto.onclick=()=>gallery.style.display="flex"
closeGallery.onclick=()=>gallery.style.display="none"



document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/40
const y=(window.innerHeight/2-e.pageY)/40

mainPhoto.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`

})



const starCanvas=document.getElementById("stars")
const starCtx=starCanvas.getContext("2d")

starCanvas.width=window.innerWidth
starCanvas.height=window.innerHeight

let stars=[]

for(let i=0;i<150;i++){

stars.push({

x:Math.random()*starCanvas.width,
y:Math.random()*starCanvas.height,
size:Math.random()*2

})

}

function drawStars(){

starCtx.clearRect(0,0,starCanvas.width,starCanvas.height)

starCtx.fillStyle="white"

stars.forEach(s=>{

starCtx.beginPath()
starCtx.arc(s.x,s.y,s.size,0,Math.PI*2)
starCtx.fill()

})

requestAnimationFrame(drawStars)

}

drawStars()



const heartCanvas=document.getElementById("hearts")
const heartCtx=heartCanvas.getContext("2d")

heartCanvas.width=window.innerWidth
heartCanvas.height=window.innerHeight

let hearts=[]

for(let i=0;i<40;i++){

hearts.push({

x:Math.random()*heartCanvas.width,
y:Math.random()*heartCanvas.height,
size:Math.random()*4+2,
speed:Math.random()*1+0.5

})

}

function drawHearts(){

heartCtx.clearRect(0,0,heartCanvas.width,heartCanvas.height)

heartCtx.fillStyle="#ff4da6"

hearts.forEach(h=>{

heartCtx.beginPath()
heartCtx.arc(h.x,h.y,h.size,0,Math.PI*2)
heartCtx.fill()

h.y-=h.speed

if(h.y<0){

h.y=heartCanvas.height
h.x=Math.random()*heartCanvas.width

}

})

requestAnimationFrame(drawHearts)

}

drawHearts()



const carouselImages=document.querySelectorAll(".carousel img")

carouselImages.forEach((img,i)=>{

const angle=i*(360/carouselImages.length)

img.style.transform=`rotateY(${angle}deg) translateZ(400px)`

})
