import { Component } from '@angular/core';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private scroolServ: ScrollService) { }

  scroll(y: number) {
    window.scrollTo({ top: y, behavior: "smooth" });
  }

}
