import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LucideAngularModule, icons,MoveUpRight } from 'lucide-angular';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    BrowserModule,
    LucideAngularModule.pick({MoveUpRight})
  ],
  providers: [],
  bootstrap: [HeroComponent]
})
export class AppModule { }
