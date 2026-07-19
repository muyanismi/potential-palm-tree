alert("木言忙碌一晚上，又回到起点了 哈哈");

const title =
document.getElementById("title");

const input =
document.getElementById("input");

const tip =
document.getElementById("tip");



title.onclick=function(){


title.style.display="none";


input.style.display="block";


input.focus();


tip.innerHTML=
"写下此刻的你，按 Enter";


}



input.addEventListener(
"keydown",
function(e){

if(e.key==="Enter"){

let text = input.value.trim();

if(text==="") return;


let record = {

text:text,

time:new Date().toLocaleString(),

id:"MY-"+Math.floor(Math.random()*999999)

};


let old =
JSON.parse(
localStorage.getItem("myRecord")
||
"[]"
);


old.push(record);


localStorage.setItem(
"myRecord",
JSON.stringify(old)
);


input.value="";


input.style.display="none";


title.innerHTML=
"我爱你";


title.style.display="block";


tip.innerHTML=
"已匿名保存";

}
});
