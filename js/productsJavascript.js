console.log("javascript for product`s page");
//https://www.youtube.com/watch?v=DG4obitDvUA    JavaScript Template Literals: JSON to HTML
//background-image: url(../images/white-cat-01.svg);  example from style.css

//firutu   https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80

//coco     https://images.unsplash.com/photo-1551189013-03cf5bc1c73c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80

//grivei   https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

var petsData = [{
    "name": "Firutu",
    "species": "Cat",
    "favoriteFood": ["wet food", "dry food", "<strong>tuna</strong>", "any food"],
    "birthYear": "2022",
    "photo": "../images/firutu.jpg"
  },
  {
    "name": "Coco",
    "species": "Parrot",
    "placesToFly": ["over the garden", "over the house", "in the <strong>sky</strong>"],
    "birthYear": "2021",
    "photo": "../images/coco.jpg"
  },
  {
    "name": "Grivei",
    "species": "Dog",
    "favoriteFood": ["wet food", "dry food", "<strong>meat</strong>", "any food"],
    "placesToRun": ["in the field", "in front of the house", "any <strong>places</strong>"],
    "birthYear": "2010",
    "photo":"../images/grivei.jpg"
  }
];
//////
///yearOfBirth este parametru formal iar pet.birthYear este parametru real

function age(yearOfBirth){
  let calculatedAge= new Date().getFullYear() - yearOfBirth;
  if(calculatedAge == 1){
    return "1 year old";
  }else if(calculatedAge == 0){
      return "Baby";
  }else{
    return `${calculatedAge} years old`
  }
}
///////////////////////
function foods(foods){
  return `
<p>favorite foods</p>
<ul class="foods-list">
${foods.map(function(foodItem){
  return ` <li>${foodItem}</li> `
}).join(" ")}
</ul>
  `;
}
//////////////////////

function petFly(bird){
  return `
<p>favorite places to fly</p>
<ul class="bird-list">
${bird.map((petFly) => ` <li>${petFly}</li> `).join(" ")}
</ul>
  `;
}
///////////////////////

function petRun(petRun){
  return `
<p>favorite places to run</p>
<ul class="pet-run-list">
${petRun.map(animalRuns => ` <li>${animalRuns}</li> `).join(" ")}
</ul>
  `;
}

////////////////////

function petTemplate(pet) {
  return `
  <div class="animal-javascript">

          <div class="forJSimg">
          <img class="photoFromJs-file" src="${pet.photo}" alt="photo of animal from js">
          </div>
<div class="vl"></div>
   <div class="petTextDetail">
   <h3>${pet.name}</h3>
   <p><strong>${pet.species}</strong></p>
   <p><strong>age</strong> ${age(pet.birthYear)}</p>
   ${pet.favoriteFood ? foods(pet.favoriteFood) : " "}
    ${pet.placesToFly ? petFly(pet.placesToFly) : " "}
      ${pet.placesToRun ? petRun(pet.placesToRun) : " "}
   </div>
  </div>
  `
}

////
document.getElementById("catApp").innerHTML = `

  <div class="container">
<h1>pets ${petsData.length} results</h1>

${petsData.map(petTemplate).join("")}

<p id="pargraphRecently">These ${petsData.length} pets were added recently .</p>
<p>Check back soon for updates .</p>
  </div>

`;



//${petsData}//[object Object],[object Object],[object Object]



///////////////
