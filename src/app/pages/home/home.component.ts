import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOne } from "./component-one/component-one.component";
import { ComponenTwo } from "./component-two/component-two.component";
import { ComponentThree } from './component-three/component-three.component';

import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ComponentOne, ComponenTwo, ComponentThree],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './component-two/component-two.component.css']
})
export class HomeComponent {
  constructor(private readonly languageService: LanguageService) { }

  public t(key: string): string {
    return this.languageService.translate(key);
  }
}