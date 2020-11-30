import { Component, OnInit } from '@angular/core';
function hello(){
  const carousel = document.getElementById("carouselExampleControls");
const items = carousel.querySelectorAll(".carousel-item");
let currentItem = 0;
let isActive = true;

function setCurrentItem(index) {
  currentItem = (index + items.length) % items.length;
}

function hideItem(direction) {
  isActive = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isActive = true;
  });
}

document.getElementById("carouselPrev").addEventListener("click", function(e) {
  e.preventDefault();
  if (isActive) {
    hideItem("to-right");
    setCurrentItem(currentItem - 1);
    showItem("from-left");
  }
});

document.getElementById("carouselNext").addEventListener("click", function(e) {
  e.preventDefault();
  if (isActive) {
    hideItem("to-left");
    setCurrentItem(currentItem + 1);
    showItem("from-right");
  }
});


}
@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css']
})
export class TShirtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hello()
  }

}
