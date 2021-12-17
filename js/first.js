var myHttp=new XMLHttpRequest();
var allrecipes=[];
searchInput=document.getElementById("searchInput");
searchBtn= document.getElementById("searchBtn");

function getData(q){
    myHttp.open("GET",`https://forkify-api.herokuapp.com/api/search?&q=${q}`);
myHttp.send();
myHttp.addEventListener("readystatechange",function(){
    if(myHttp.readyState==4){
        allrecipes=JSON.parse(myHttp.response).recipes;
        displayData();
    }
})
}

getData("pasta")

function displayData(){
    var box=``;
    for(var i=0 ; i<allrecipes.length ; i++){
        box+=`
        
        <div class="col-md-4">
        <div class="data mt-4">
          <img height="250" src="${allrecipes[i].image_url}" class="w-100" alt="">
          <h3 class="color-mine">${allrecipes[i].publisher}</h3>
          <p>${allrecipes[i].title}</p>
        </div>
      </div>`
    }
    document.getElementById("recipesRow").innerHTML=box;

}

searchBtn.addEventListener("click",function(){

    getData(searchInput.value)

})