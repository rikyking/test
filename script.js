document.querySelector("#subNow").addEventListener("click",subNow)

function subNow(){
    a=document.querySelectorAll(".hidden")
    for(let i=0;i<a.length;i++){
        a[i].classList.remove("hidden")
        a[i].classList.add("row")
    }

    l=document.querySelector(".signup-link")
    l.innerHTML='Have you an account yet? <a href="" id="subNow" >Signup now</a>'
    l.removeEventListener("click",subNow)
    l.addEventListener("click",loginNow)
}

function loginNow(){
    console.log("siui")
    a=document.querySelectorAll(".hidden")
    console.log(a)
    for(let i=0;i<a.length;i++){
        a.classList.add("hidden")
    }

    l=document.getElementById("subNow")
    l.innerHTML="Subscribe now"
    l.removeEventListener("click",loginNow)
    l.addEventListener("click",subNow)
}

const id_client="&client_id=pV-rt-6brQ6ATpwLU7pU-mWziZuo3W9zkguxWMMQ1Sw"
window.onload=caricaImg()
function caricaImg() {
    const r=Math.floor(Math.random() * 500);
    fetch("https://api.unsplash.com/search/photos?page="+r+"&query=fitness?"+id_client)
    .then(onResponse)
    .then(onJSON);
}

function onResponse(response){
    return response.json();
}

function onJSON(json){
    console.log(json);
    const p=document.querySelector("body")
    const r=Math.floor(Math.random() * 10);
    console.log(r)
    const url=json.results[r].urls.regular
    p.attributes.style.value="background: url('"+url+"'); no-repeat ;background-size: cover; background-position: top;"
}