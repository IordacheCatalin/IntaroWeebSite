import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentOne} from "./component-one/component-one.component";
import {ComponenTwo} from "./component-two/component-two.component";
import { ComponentThree } from './component-three/component-three.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ComponentOne, ComponenTwo, ComponentThree ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}