import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {

  @Input() imgPath = ''
  @Input() link = '';
}
