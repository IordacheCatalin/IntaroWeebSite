import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';
@Component({
  selector: 'app-directSettlement',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './directSettlement.component.html',
  styleUrls: ['./directSettlement.component.css']
})
export class DirectSettlement {

}