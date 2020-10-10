import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ExpenseTypes } from 'src/app/constants/constants';
import { ExpenseInterface } from 'src/app/interfaces/expenseInterface';
import { DatetimeService } from 'src/app/services/datetime/datetime.service';
import { ExpenseStorageService } from 'src/app/services/storage/expense-storage.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {

  expenseForm: ExpenseInterface;
	expenseTypes: any;

  addExpenseForm = new FormGroup({
		amount: new FormControl('', Validators.required),
		description: new FormControl(''),
		type: new FormControl('', Validators.required),
	});

  constructor(
		private modalController: ModalController,
		private dateTimeService: DatetimeService,
		private expenseService: ExpenseStorageService,

	) {
		this.expenseTypes = ExpenseTypes;
	}

  ngOnInit() {}


  initCreateExpense(): void {
		const expense: ExpenseInterface = this.addExpenseForm.value;
		expense.amount = Number(expense.amount.toFixed(2));
		this.dateTimeService.getSelectedDate()
			.then((date: Date) => {
				if (!expense.createdOn) {
					expense.createdOn = date
				}
			}).then(() => {
			this.expenseService.createExpense(expense).then(() => {
				console.log('Expense Was Created');
				this.dismissModal();
			}).catch((err) => console.log(err));
		})
	}

  dismissModal(){
    this.modalController.dismiss().then().catch();
  }

}
