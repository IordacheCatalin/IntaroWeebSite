import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-miniLoader',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './miniLoader.component.html',
  styleUrls: ['./miniLoader.component.css']
})
export class MiniLoaderComponent {
    @Input() isMiniLoading: boolean = false;
    @Input() miniLoadingSize: string = '20px';

    get padding(): string {
      const size = parseInt(this.miniLoadingSize, 10);
      return `${size - 8}px`;
    }

    get margin(): string {
      const size = parseInt(this.miniLoadingSize, 0);
      return `${size + 20}px`;
    }
}