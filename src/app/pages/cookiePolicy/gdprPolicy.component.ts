import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

@Component({
  selector: 'app-gdprPolicy',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './gdprPolicy.component.html',
  styleUrl: './cookiePolicy.component.css'
})
export class GdprPolicyComponent {}