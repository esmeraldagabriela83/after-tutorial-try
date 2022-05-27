console.log("-----------------------------------------------------------------------hi from tutorial.js");
//https://www.youtube.com/watch?v=AVmGmLFcukM    Dogs, JavaScript & An API  Fetch, Promises & Async Await

fetch("https://dog.ceo/api/breeds/list/all").then(function(response){
  return response.json()
}).then(function(data){
  console.log("---fetch--------------------------------------------------data from tutorial.js about all gitHub dogs" , data);
  createBreedList(data.message)
})

// async function start(){
//   const response=await fetch("https://dog.ceo/api/breeds/list/all");
//   const data=await response.json();
//   console.log("---async await---------------------------------------------------------------data is : " , data);
//   createBreedList(data.message)
// }
// //apel functie //it works only on my computer
// start()
//////////////////////////////////////////////////
function createBreedList(breedList){
 const dogBreed=document.getElementById('breed');
       // dogBreed.style.border="3px solid yellowgreen";
       dogBreed.innerHTML=`
       <select onchange="loadByBreed(this.value)" style="border:3px solid olive;padding:1em;color:deepskyblue;border-radius:0.5em">
          <option style="color:deepskyblue">Choose a dog breed</option>
          ${Object.keys(breedList).map(function(breed){
            return `<option>${breed}</option>`
          }).join("")}
       </select>
       `
}
///////////////////////////////////////

// async function loadByBreed(breed){
// console.log("breed is: " , breed);
// if( breed !== `Choose a dog breed`){
//   console.log("no Choose a dog breed on change when click on options: " , breed);
//
//   const response=await fetch(`https://dog.ceo/api/breed/${breed}/images`);
//   const data=await response.json();
//   console.log("data from loadByBreed" , data);
//   createSlideShow(data.message)
// }
// }

function loadByBreed(breed){
console.log("breed is: " , breed);
if( breed !== `Choose a dog breed`){
  console.log("no //Choose a dog breed// on change when click on options: " , breed);

fetch(`https://dog.ceo/api/breed/${breed}/images`).then(function(response){
  return response.json()
}).then(function(data){
  console.log("---fetch-------data from tutorial.js about specific breed gitHub dogs" , data);
  createSlideShow(data.message)
});
}
}

////////////////////////////////////////////////////////

function createSlideShow(images){
//console.log("images array is : " , images);

const slideshowDiv=document.getElementById("slideshow");
      // slideshowDiv.style.border="3px solid deepskyblue";
      slideshowDiv.style.display="flex";
      slideshowDiv.style.alignItems="center";
      slideshowDiv.style.justifyContent="center";
      slideshowDiv.innerHTML=`
      <div class="slide" style="background-image:url('${images[0]}')"></div>
      `
}
//
