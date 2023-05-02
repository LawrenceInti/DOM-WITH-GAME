let joo=document.getElementById("heading");
console.log(joo);


let tag=document.getElementsByTagName("h1");
console.log(tag);


let a=document.getElementsByClassName("box");
console.log(a);


let b=document.getElementById("hlo");
b.innerText="Hello world";
console.log(b);

let btn=document.getElementById("btn");
let part=document.querySelector(".parent");

btn.addEventListener("click" ,function(){
    part.style.flexDirection="column";
})


let changecolor=document.getElementsByTagName("h1")[2];
changecolor.setAttribute("id","heading");
changecolor.style.color="red";
console.log(changecolor);


let bttn=document.getElementById("butt");
let blue=document.getElementsByTagName("h1")[3];
bttn.addEventListener("click",function(){
    blue.innerText="Welcome to Elevation academy";
})
console.log(blue);




function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

let print=document.getElementById("print");
print.addEventListener("click",function(){
    let date=year.options[year.selectedIndex].text;
    alert(date);
})
