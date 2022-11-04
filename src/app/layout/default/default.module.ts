import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { DefaultLayoutComponent } from 'app/layout/default/default.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    DefaultLayoutComponent,
  ],
})
export class DefaultLayoutModule {}
