import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutComponent } from 'app/layout/empty/empty.component';

@NgModule({
  declarations: [
    EmptyLayoutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    EmptyLayoutComponent,
  ],
})
export class EmptyLayoutModule {}
