import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-startup-overlay',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './startup-overlay.component.html',
  styleUrl: './startup-overlay.component.css'
})
export class StartupOverlayComponent implements OnInit, OnDestroy {
  @Output() closed = new EventEmitter<void>();

  public secondsLeft = 5;
  public isVisible = true;

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private readonly storageKey = 'startupOverlaySeen';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isVisible = false;
      return;
    }

    const alreadySeen = sessionStorage.getItem(this.storageKey) === 'true';

    if (alreadySeen) {
      this.isVisible = false;
      return;
    }

    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearCountdown();
  }

  public markAsSeen(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(this.storageKey, 'true');
    }

    this.closeOverlay();
  }

  public closeOverlay(): void {
    this.isVisible = false;
    this.clearCountdown();
    this.closed.emit();
    this.changeDetectorRef.detectChanges();
  }

  private startCountdown(): void {
    this.intervalId = setInterval(() => {
      this.secondsLeft--;

      if (this.secondsLeft <= 0) {
        this.markAsSeen();
        return;
      }

      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  private clearCountdown(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}