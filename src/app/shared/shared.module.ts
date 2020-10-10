import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AddExpenseComponent],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        AddExpenseComponent
    ]
})
export class SharedModule { }
