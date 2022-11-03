import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CarsService } from 'app/modules/cars/cars.service';
import { Car } from 'app/modules/cars/cars.types';

@Injectable()
export class CarsListResolver implements Resolve<any> {
  /**
   * Constructor
   */
  constructor(private _carsService: CarsService) {}

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car[]> {
    return this._carsService.getCars();
  }
}
