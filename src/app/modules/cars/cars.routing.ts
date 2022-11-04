import { Route } from '@angular/router';

import { CarsComponent } from 'app/modules/cars/cars.component';
import { CarsListComponent } from 'app/modules/cars/list/list.component';
import { CarsListResolver } from 'app/modules/cars/cars.resolvers';

export const carsRoutes: Route[] = [
  {
    path: '',
    resolve: [CarsListResolver],
    component: CarsComponent,
    children: [
      {
        path: '',
        component: CarsListComponent,
      },
    ],
  },
];
