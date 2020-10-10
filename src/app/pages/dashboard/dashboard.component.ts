import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubscriptionLike } from 'rxjs';
import { ExpenseInterface } from 'src/app/interfaces/expenseInterface';
import { DataService } from 'src/app/services/data/data.service';
import { AddExpenseComponent } from 'src/app/shared/components/add-expense/add-expense.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  expenses: ExpenseInterface[];
  subscription: SubscriptionLike;

  constructor(private modalController: ModalController,
    private dataService: DataService,) { }

  ngOnInit() {
    this.subscription = this.dataService.getExpensesSubscription()
            .subscribe({
                next: (expense: ExpenseInterface[]) => {
                    if (expense != null) {
                        this.expenses = expense;
                    } else {
                        this.expenses = [];
                    }
                },
                error: (err) => {
                    console.log(err);
                },
            });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
