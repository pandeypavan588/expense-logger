import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ForgotPasswordComponent],
    imports: [
        CommonModule,
        IonicModule,
        ForgotPasswordRoutingModule,
        ReactiveFormsModule,
        FormsModule
        
    ]
})
export class ForgotPasswordModule { }
