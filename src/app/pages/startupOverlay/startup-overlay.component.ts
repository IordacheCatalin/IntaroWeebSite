import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
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
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private readonly storageKey = 'startupOverlaySeen';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

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

    this.startTimers();
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  public closeOverlay(): void {
    this.isVisible = false;
    this.clearTimers();
    this.closed.emit();
  }

  public markAsSeen(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    sessionStorage.setItem(this.storageKey, 'true');
    this.closeOverlay();
  }

  private startTimers(): void {
    this.intervalId = setInterval(() => {
      if (this.secondsLeft > 1) {
        this.secondsLeft--;
      }
    }, 1000);

    this.timeoutId = setTimeout(() => {
      this.markAsSeen();
    }, 5000);
  }

  private clearTimers(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}