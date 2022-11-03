import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Injectable()
export class SplashScreenService {
  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------

  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _router: Router
  ) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.hide();
      if (event instanceof NavigationStart) this.show();
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Show the splash screen
   */
  show(): void {
    this._document.body.classList.remove('splash-screen-hidden');
  }

  /**
   * Hide the splash screen
   */
  hide(): void {
    this._document.body.classList.add('splash-screen-hidden');
  }
}
