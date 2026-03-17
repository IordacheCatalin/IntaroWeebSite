import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

@Component({
  selector: 'app-termsConditions',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './termsConditions.component.html',
  styleUrl: './cookiePolicy.component.css'
})
export class TermsConditionsComponent {}