import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { CarsComponent } from 'app/modules/cars/cars.component';
import { CarsService } from 'app/modules/cars/cars.service';
import { CarsListComponent } from 'app/modules/cars/list/list.component';
import { carsRoutes } from 'app/modules/cars/cars.routing';
import { CarsListResolver } from 'app/modules/cars/cars.resolvers';

@NgModule({
  declarations: [
    CarsComponent,
    CarsListComponent,
  ],
  imports: [
    RouterModule.forChild(carsRoutes),
    SharedModule,
  ],
  providers: [
    CarsService,
    CarsListResolver,
  ]
})
export class CarsModule {}
