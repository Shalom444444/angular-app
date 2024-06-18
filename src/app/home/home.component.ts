import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { MiddleSectionComponent } from '../components/middle-section/middle-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HeroComponent,MiddleSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
