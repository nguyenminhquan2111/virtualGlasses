import dataGlasses from "../data/data.js";

let listGlasses = dataGlasses;

let beforeRemove = [];
let afterRemove = [];

const findIndexbyId = (id, list) => {
  return list.findIndex((item) => item.id === id);
};

const removeDuplicateGlasses = (list) => {
  let arr = new Set(list);
  return [...arr];
};

const showListGlasses = (data) => {
  let listGlassesHTML = "";
  for (let i in data) {
    listGlassesHTML += `<div class="col-4 vglasses__items" onclick="handleWearGlasses('${data[i].id}');">
    <img src="${data[i].src}" alt="${data[i].name}" style="width: 100%;"></img>
    </div>`;
  }
  document.getElementById("vglassesList").innerHTML = listGlassesHTML;
};

const handleWearGlasses = (id) => {
  let wearGlassesHTML = "";
  let glassesInfoHTML = "";
  let btnHTML = "";

  for (let i = 0; i < listGlasses.length; i++) {
    if (listGlasses[i].id === id) {
      wearGlassesHTML = `<img src="${listGlasses[i].virtualImg}"></img>`;
      glassesInfoHTML = `
      <p class="glasses__title">${listGlasses[i].name} - ${listGlasses[i].brand} (${listGlasses[i].color})</p>
      <span class="glasses__price">$${listGlasses[i].price}</span>
      <span class="glasses__stock">Stocking</span>
      <p class="glasses__description">${listGlasses[i].description}</p>`;
      beforeRemove.push(listGlasses[i]);

      btnHTML = `<button class="btn btn-warning" onclick="beforeGlasses('${listGlasses[i].id}')">
      Before
      </button>
      <button class="btn btn-warning" onclick="afterGlasses('${listGlasses[i].id}')">
      After
      </button>`;
    }
  }
  afterRemove = removeDuplicateGlasses(beforeRemove);
  document.getElementById("buttonContainer").innerHTML = btnHTML;
  document.getElementById("avatar").innerHTML = wearGlassesHTML;
  document.getElementById("glassesInfo").style.display = "block";
  document.getElementById("glassesInfo").innerHTML = glassesInfoHTML;
  console.log(beforeRemove);
  console.log(afterRemove);
};

const beforeGlasses = (id) => {
  let wearGlassesHTML = "";
  let glassesInfoHTML = "";
  let btnHTML = "";
  // console.log(afterRemove);
  let foundedIndex = findIndexbyId(id, afterRemove);

  let i = foundedIndex - 1;
  if (i < 0) {
    i = +afterRemove.length - 1;
  }
  wearGlassesHTML = `<img src="${afterRemove[i].virtualImg}"></img>`;
  glassesInfoHTML = `
      <p class="glasses__title">${afterRemove[i].name} - ${afterRemove[i].brand} (${afterRemove[i].color})</p>
      <span class="glasses__price">$${afterRemove[i].price}</span>
      <span class="glasses__stock">Stocking</span>
      <p class="glasses__description">${afterRemove[i].description}</p>`;

  btnHTML = `<button class="btn btn-warning" onclick="beforeGlasses('${afterRemove[i].id}')">
      Before
      </button>
      <button class="btn btn-warning" onclick="afterGlasses('${afterRemove[i].id}')">
      After
      </button>`;
  document.getElementById("buttonContainer").innerHTML = btnHTML;
  document.getElementById("avatar").innerHTML = wearGlassesHTML;
  // document.getElementById("glassesInfo").style.display = "block";
  document.getElementById("glassesInfo").innerHTML = glassesInfoHTML;
};

const afterGlasses = (id) => {
  let wearGlassesHTML = "";
  let glassesInfoHTML = "";
  let btnHTML = "";
  let foundedIndex = findIndexbyId(id, afterRemove);
  let i = foundedIndex + 1;
  if (i > afterRemove.length - 1) {
    i = 0;
  }
  wearGlassesHTML = `<img src="${afterRemove[i].virtualImg}"></img>`;
  glassesInfoHTML = `
      <p class="glasses__title">${afterRemove[i].name} - ${afterRemove[i].brand} (${afterRemove[i].color})</p>
      <span class="glasses__price">$${afterRemove[i].price}</span>
      <span class="glasses__stock">Stocking</span>
      <p class="glasses__description">${afterRemove[i].description}</p>`;

  btnHTML = `<button class="btn btn-warning" onclick="beforeGlasses('${afterRemove[i].id}')">
      Before
      </button>
      <button class="btn btn-warning" onclick="afterGlasses('${afterRemove[i].id}')">
      After
      </button>`;
  document.getElementById("buttonContainer").innerHTML = btnHTML;
  document.getElementById("avatar").innerHTML = wearGlassesHTML;
  // document.getElementById("glassesInfo").style.display = "block";
  document.getElementById("glassesInfo").innerHTML = glassesInfoHTML;
};

const removeGlasses = (boolean) => {
  let wearGlassesHTML = "";
  let glassesInfoHTML = "";
  if (boolean === true) {
    wearGlassesHTML = `<img src="${beforeRemove[0].virtualImg}"></img>`;
    glassesInfoHTML = `
    <p class="glasses__title">${beforeRemove[0].name} - ${beforeRemove[0].brand} (${beforeRemove[0].color})</p>
    <span class="glasses__price">$${beforeRemove[0].price}</span>
    <span class="glasses__stock">Stocking</span>
    <p class="glasses__description">${beforeRemove[0].description}</p>`;

    document.getElementById("avatar").innerHTML = wearGlassesHTML;
    document.getElementById("glassesInfo").style.display = "block";
    document.getElementById("glassesInfo").innerHTML = glassesInfoHTML;
  } else {
    wearGlassesHTML = "";
    glassesInfoHTML = `
    <p class="glasses__title">${beforeRemove[0].name} - ${beforeRemove[0].brand} (${beforeRemove[0].color})</p>
    <span class="glasses__price">$${beforeRemove[0].price}</span>
    <span class="glasses__stock">Stocking</span>
    <p class="glasses__description">${beforeRemove[0].description}</p>`;

    document.getElementById("avatar").innerHTML = wearGlassesHTML;
    document.getElementById("glassesInfo").style.display = "block";
    document.getElementById("glassesInfo").innerHTML = glassesInfoHTML;
  }
};

window.handleWearGlasses = handleWearGlasses;
window.removeGlasses = removeGlasses;
window.beforeGlasses = beforeGlasses;
window.afterGlasses = afterGlasses;
console.log(listGlasses);
showListGlasses(listGlasses);
