function bodyGenerator(){

const header=document.getElementsByClassName("navBarTop")[0];
const navBarBottomMenu=document.getElementsByClassName("navBarBottomMenu")[0];

const headerTopObject = getHeaderTopObject();
const mainMenuObject = getMainMenuObject();

//navBarTop Sinistra
const headerTopLeft=document.createElement("div");
headerTopLeft.classList.add("navBarTopLeft");
generateMenu(headerTopObject.splice(0,1), headerTopLeft);
header.appendChild(headerTopLeft);

//navBarTop Destra
const headerTopRight=document.createElement("div");
headerTopRight.classList.add("navBarTopRight");
generateMenu(headerTopObject.splice(0,5), headerTopRight);
header.appendChild(headerTopRight);

//navBarBottom 

window.onscroll = function() {fixedNav()};

var navBar=document.getElementsByClassName('navBarBottom')[0];
var sticky = navBar.offsetTop;

function fixedNav(){
  if(window.pageYOffset >= sticky){
    navBar.classList.add('sticky');
  }
  else {
    navBar.classList.remove('sticky');
  }
}

//Logo
const navBarBottomMenuLeft=document.createElement("div");
navBarBottomMenuLeft.classList.add("logo");
const spanLeft= document.createElement("span");
const spanRight= document.createElement("span");
spanLeft.innerHTML='NEX';
spanLeft.id='spanLeft';
spanRight.innerHTML='GEN';
spanRight.id='spanRight';
navBarBottomMenuLeft.appendChild(spanLeft);
navBarBottomMenuLeft.appendChild(spanRight);
navBarBottomMenuLeft.href='www.';
navBarBottomMenu.appendChild(navBarBottomMenuLeft);

//navBarBottom Destra
const navBarBottomMenuRight=document.createElement("div");
navBarBottomMenuRight.classList.add("navBarBottomMenuRight");
generateMenu(mainMenuObject, navBarBottomMenuRight);

//navBarBottom Bottone Destra
const navBarBottomMenuRightBtn=document.createElement("div");
navBarBottomMenuRightBtn.classList.add("navBarBottomMenuRightBtn");
navBarBottomMenuRightBtn.innerHTML='GET IN TOUCH';
navBarBottomMenuRightBtn.href="www.";
navBarBottomMenuRight.appendChild(navBarBottomMenuRightBtn);

navBarBottomMenu.appendChild(navBarBottomMenuRight);


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