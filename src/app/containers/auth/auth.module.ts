import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VolatilityLogoComponent } from '@app/components/volatility-logo/volatility-logo.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    VolatilityLogoComponent
  ]
})
export class AuthModule { }
