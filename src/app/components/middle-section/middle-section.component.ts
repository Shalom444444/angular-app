import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-middle-section',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './middle-section.component.html',
  styleUrl: './middle-section.component.css'
})
export class MiddleSectionComponent {

}
