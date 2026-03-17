import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

@Component({
  selector: 'app-rcaRisc',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './rcaRisc.component.html',
  styleUrl: './rcaRisc.component.css'
})
export class RcaRiscComponent {}