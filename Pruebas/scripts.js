let names = ["Eyder","Gianella"];
let input = document.getElementById("input");
input.addEventListener("keyup",(e) => {
   removeElements();
   for (let i of names) {

      if (i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != "") {
         let listItem = document.createElement("li");
         listItem.classList.add("list-items");
         listItem.style.cursor = "pointer";
         listItem.setAttribute("onclick","displayNames('" + i + "')'");
         let word = "<b>"+ i.substr(0,input.value.length) +"</b>";
         word += i.substr(input.value.length);
         listItem.innerHTML = word;
         document.querySelector(".list").appendChild(listItem);
      }
   }
});
function displayNames(value) {
   input.value = value;
}
function removeElements() {
   let items = document.querySelectorAll(".list-items");
   items.forEach((item) => {
      item.remove();
   })
}