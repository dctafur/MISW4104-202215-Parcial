import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CarsService } from 'app/modules/cars/cars.service';
import { Brand, Car } from 'app/modules/cars/cars.types';

@Component({
  selector: 'cars-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent implements OnInit, OnDestroy {
  // -----------------------------------------------------------------------------------------------------
  // @ Attributes
  // -----------------------------------------------------------------------------------------------------
  
  cars: Car[];
  brands: Brand[] = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _carsService: CarsService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._carsService.cars$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((cars) => {
        this.cars = cars;
        this._countCarsByBrand();
        this._changeDetectorRef.markForCheck();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Track by function for ngFor loops
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Count cars by brand
   */
  private _countCarsByBrand(): void {
    if (!this.cars || !this.cars.length) return;
    const brands = new Set(this.cars.map((car) => car.marca));
    for (const brand of brands) {
      this.brands.push({ 
        name: brand, 
        count: this.cars.filter((car) => car.marca === brand).length,
      });
    }
  }
}
