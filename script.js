function rangeSlide(value){
  document.getElementById('rangeValue').innerHTML = value
}

document.querySelector(".lines").addEventListener("click", () =>
  document.querySelector(".container").classList.toggle("show-menu")
);