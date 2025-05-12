import { Component } from '@angular/core';
import { ShowReadingComponent } from './show-reading/show-reading.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reading',
  //standalone: true,
  imports: [ShowReadingComponent], //it works without CommomMOdule and RouterModule
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {

}
