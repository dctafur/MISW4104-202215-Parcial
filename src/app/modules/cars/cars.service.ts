import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject } from 'rxjs';

import { environment } from 'environments/environment';
import { Car } from 'app/modules/cars/cars.types';

@Injectable()
export class CarsService {
  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------

  private _car: ReplaySubject<Car> = new ReplaySubject<Car>(null);
  private _cars: ReplaySubject<Car[]> = new ReplaySubject<Car[]>(null);

  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------

  constructor(private _httpClient: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for car
   */
  get car$(): Observable<Car> {
    return this._car.asObservable();
  }

  /**
   * Setter for car
   */
  set car(value: Car) {
    this._car.next(value);
  }

  /**
   * Getter for cars
   */
  get cars$(): Observable<Car[]> {
    return this._cars.asObservable();
  }

  /**
   * Setter for cars
   */
  set cars(value: Car[]) {
    this._cars.next(value);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get cars
   */
  getCars(): Observable<Car[]> {
    return this._httpClient.get<Car[]>(`${environment.api.url}/202212_MISW4104_Grupo1.json`)
      .pipe(
        map((cars) => {
          this._cars.next(cars);
          return cars;
        }),
      );
  }
}
