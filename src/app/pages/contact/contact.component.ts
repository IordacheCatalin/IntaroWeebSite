import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Banner } from '../home/banner/banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,Banner],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps?q=Ethos+House+Bucuresti&z=13&output=embed'
  );
}