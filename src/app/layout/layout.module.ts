import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/empty/empty.module';
import { DefaultLayoutModule } from 'app/layout/default/default.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    SharedModule,
    EmptyLayoutModule,
    DefaultLayoutModule,
  ],
  exports: [
    LayoutComponent,
    EmptyLayoutModule,
    DefaultLayoutModule,
  ],
})
export class LayoutModule {}
