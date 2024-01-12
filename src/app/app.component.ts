import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portifolio';

  constructor() {



  }
  ngOnInit(): void {
    console.log("constructor");

    const myObserver = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");

      })

    });
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((element) => {
      console.log("foreach");

      myObserver.observe(element);
    })
  }

}
