function bodyGenerator(){

const header=document.getElementsByClassName("header")[0];
const mainMenu=document.getElementsByClassName("mainMenu")[0];

const headerTopObject=[{ 
    name:"orari",
    url:"www."},
  { name:"telefono",
    url:"www."},
  { name:"mail",
    url:"www."},
  { name:"facebook",
    url:"www."},
  { name:"twitter",
    url:"www."},
  { name:"instagram",
    url:"www."}];

const mainMenuObject=[{
    name:"NEXGEN",
    url:"www."},
  { name:"HOME",
    url:"www."},
  { name:"SERVICES",
    url:"www."},
  { name:"ABOUT",
    url:"www."},
  { name:"PROJECTS",
    url:"www."},
  { name:"RESULTS",
    url:"www."}];

//Header Sinistra
const headerTopLeft=document.createElement("div");
headerTopLeft.classList.add("headerTopLeft");
generateMenu(headerTopObject.splice(0,1), headerTopLeft);
header.appendChild(headerTopLeft);

//Header Destra
const headerTopRight=document.createElement("div");
headerTopRight.classList.add("headerTopRight");
generateMenu(headerTopObject.splice(1,5), headerTopRight);
header.appendChild(headerTopRight);

//Menu Main Sinistra
const mainMenuLeft=document.createElement("div");
mainMenuLeft.classList.add("mainMenuLeft");
generateMenu(mainMenuObject.splice(0,1), mainMenuLeft);
mainMenu.appendChild(mainMenuLeft);

// Menu Main Destra
const mainMenuRight=document.createElement("div");
mainMenuRight.classList.add("mainMenuRight");
generateMenu(mainMenuObject.splice(1,4), mainMenuRight);

//Bottone Menu Main Destra
const mainMenuRightBtn=document.createElement("div");
mainMenuRightBtn.classList.add("mainMenuRightBtn");
mainMenuRightBtn.innerHTML='GET IN TOUCH';
mainMenuRightBtn.href="www.";
mainMenuRight.appendChild(mainMenuRightBtn);

mainMenu.appendChild(mainMenuRight);


function generateMenu(array, parent){
    const node= document.createElement("div");
    array.map(menuItem=>generateItemsMenu(menuItem, node));
    parent.appendChild(node);
}

function generateItemsMenu(item, node){
    const menuItem = document.createElement("a");
    menuItem.innerHTML=item.name;
    menuItem.href=item.url;
    node.appendChild(menuItem);
}

//Fine 
}