const supabaseUrl = "https://ubuwsozcvdgryttubtvj.supabase.co/rest/v1/";

const supabaseKey = "sb_publishable_za_WSL8sNmo_1Wa7FozwSw_4eAgFRkF";


const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);
const title =
document.getElementById("title");

const input =
document.getElementById("input");

const tip =
document.getElementById("tip");



title.onclick=async function(){


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


let text=input.value.trim();


if(text==="") return;



let record={

text:text,

time:new Date()
.toLocaleString(),

id:
"MY-"+Math.floor(Math.random()*999999)

};




await supabase
.from("records")
.insert({

content:text,

anonymous_id:"MY-xxxx"

});


input.style.display="none";


title.innerHTML=
"我爱你";


title.style.display="block";


tip.innerHTML=
"已匿名保存";


}


});
