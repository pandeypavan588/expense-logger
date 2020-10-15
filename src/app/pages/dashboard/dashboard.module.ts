import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatagoryPipe } from 'src/app/pipes/catagory.pipe';



@NgModule({
  declarations: [DashboardComponent, CatagoryPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '',component: DashboardComponent}]),
    IonicModule,
    FormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
