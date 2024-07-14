
// document.addEventListener("visibilitychange", function () {
//   if (document.visibilityState === "hidden") {
//     document.title = "come back!";
//   } else {
//     document.title = "welcome to Ashish portfolio";
//   }
// });

// let sections = document.getElementsByClassName("section");
// let tabdetails = document.getElementsByClassName("tab-detail");

// sections.addEventListener('click', function opentab(tabname) {
//   for (let x of sections) {
//     x.classList.remove("active-link");
//   }
// }); 

// tabdetails.addEventListener('click', function opentab(tabname){
//   for (let y of tabdetails) {
//     y.classList.remove("active-tab");
//   }
// })
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab"); 

var tabsections =document.getElementsByClassName("sections");
var tabdetails=document.getElementsByClassName("tab-details");

function opentab(tabname){
  for(tabsection of tabsections){
    tabsection.classList.remove("active-link");
  }
  for(tabdetail of tabdetails){
    tabdetail.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}