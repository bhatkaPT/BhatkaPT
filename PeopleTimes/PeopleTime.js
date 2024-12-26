const allTovar =[ {
Prefix: "[Элита]",
kit:"kit",
salary:"salary",
crawl:"› /crawl ⇨ Сменить позу: красться",
prochee:"prochee",
regions:"region",
Slotov:"Слотов на Аукционе: 6",
Zaderzhka:"Задержка телепорта: 7 сек",
stoimost:"Стоимость: 19 руб"
},
{
Prefix: "[Cтраж]",
kit:"kit",
salary:"salary",
crawl:"› /dchat ⇨ Воспользоваться Донат-Чатом",
prochee:"prochee",
regions:"region",
Slotov:"Слотов на Аукционе: 7",
Zaderzhka:"Задержка телепорта: 6 сек",
stoimost:"Стоимость: 39 руб"
}

]
function Scroller (Tovar) {
    C4=document.getElementById("C4")
    Z4=document.getElementById("Z4")
P1=document.getElementById("P1")
P1.innerHTML="⚕ Префикс в чате и табе: "+allTovar[Tovar-1].Prefix+ " ВашНик"
K2=document.getElementById("K2")
K2.innerHTML=`› /kit ${allTovar[Tovar-1].Prefix} ⇨ Получить набор ${allTovar[Tovar-1].Prefix}`
C4.innerHTML=allTovar[Tovar-1].crawl
Z4.innerHTML=allTovar[Tovar-1].Zaderzhka
A3=document.getElementById("A3")
A3.innerHTML=allTovar[Tovar-1].Slotov
Stoimost=document.getElementById("Stoimost")
Stoimost.innerHTML=allTovar[Tovar-1].stoimost
}
let antibot
function capcha(){
    capcha1=Math.round(Math.random()*9)
    capcha2=Math.round(Math.random()*9)
    capcha3=Math.round(Math.random()*9)
    capcha4=Math.round(Math.random()*9)
    capcha5=Math.round(Math.random()*9)
    span1=document.querySelector("#capcha span:first-child")
    span1.innerHTML=capcha1
    span2=document.querySelector("#capcha span:nth-child(2)")
    span2.innerHTML=capcha2
    span3=document.querySelector("#capcha span:nth-child(3)")
    span3.innerHTML=capcha3
    span4=document.querySelector("#capcha span:nth-child(4)")
    span4.innerHTML=capcha4
    span5=document.querySelector("#capcha span:nth-child(5)")
    span5.innerHTML=capcha5
    antibot=capcha1.toString()+capcha2.toString()+capcha3.toString()+capcha4.toString()+capcha5.toString()
}
Seconds=31
Popitka=0
function Enter(){
capcha=document.getElementById("textVvod")
digits="0123456789"
console.log(capcha.value.slice(-1))
if(!digits.includes(capcha.value.slice(-1))){
    capcha.value=capcha.value.slice(0,-1)
}
console.log(antibot)
if (capcha.value==antibot) document.getElementById("div2").style.display="none"  
  if(capcha.value.length==5){
    Popitka++
    if(Popitka==3)window.close()
    capcha.setAttribute("disabled",true)
    capcha.value="Подождите  ⏲"
    setTimeout(() => {
        capcha.removeAttribute("disabled")
        capcha.value=""
        clearInterval(x)
    }, 30000);
    x=setInterval(()=> {
        Seconds--
        capcha.value="Подождите "+Seconds+" ⏲ "
    },1000)
  }
}