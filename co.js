let dtn = document.getElementById("btn");
let id = document.getElementById("id");
const url = "https://randomuser.me/api/?gender=female&results=30";

dtn.addEventListener("click", async ()=>
{
  id.innerHTML="loding";
  try{
    let result=await fetch(url);
    let object=await result.json();
    id.innerHTML=`
    <p>${results.name[0].first}
    <img src="${picture[0].large}/>"`
  }
});
