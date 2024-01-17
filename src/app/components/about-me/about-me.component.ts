import { ScrollService } from './../../service/scroll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private scrollServ: ScrollService){}

  scroll(){
    this.scrollServ.scrollTo(300)
  }
}
