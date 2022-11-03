import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DefaultLayoutComponent {
  // -----------------------------------------------------------------------------------------------------
  // @ Attributes
  // -----------------------------------------------------------------------------------------------------

  shrink = false;
  actualYear = new Date().getFullYear();

  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------

  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On scroll
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollOffset = event.srcElement.scrollingElement.scrollTop;
    this.shrink = scrollOffset > 100;
  }
}
