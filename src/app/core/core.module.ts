import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SplashScreenModule } from 'app/core/splash-screen/splash-screen.module';

@NgModule({
  imports: [
    HttpClientModule,
    SplashScreenModule,
  ],
})
export class CoreModule {
  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
  }
}
