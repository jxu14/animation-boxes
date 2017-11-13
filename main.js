let box = document.querySelector("#box");
box.addEventListener("click", function() {
  if (box.classList.contains("vertical")) {
    box.classList.remove("vertical");
  } else {
    box.classList.add("vertical");
  }
})

let box2 = document.querySelector("#box2");
box2.addEventListener("click", function() {
  if (box.classList.contains("box2move")) {
    box2.classList.remove("box2move");
  } else {
    box2.classList.add("box2move");
  }
})


let input = document.querySelector("#my-input");
input.addEventListener("keydown", function(event){
  if (event.key === "Enter") {
    console.log("You typed " + input.value);
    input.value = "";
  }
})