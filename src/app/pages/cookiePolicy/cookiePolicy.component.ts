import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

@Component({
  selector: 'app-cookiePolicy',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './cookiePolicy.component.html',
  styleUrl: './cookiePolicy.component.css'
})
export class CookiePolicyComponent {}