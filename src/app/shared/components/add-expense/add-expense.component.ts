import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActionService } from "../../../services/action/action.service";
import { ExpenseInterface } from "../../../interface/expenseInterface";
import { DatetimeService } from "../../../services/datetime/datetime.service";
import { ExpenseTypes } from 'src/app/constants/constants';

@Component({
  selector: "app-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.scss"],
})
export class AddExpenseComponent implements OnInit {
  expenseForm: ExpenseInterface;
  expenseTypes: any;

  addExpenseForm = new FormGroup({
    amount: new FormControl("", Validators.required),
    description: new FormControl(""),
    type: new FormControl("", Validators.required),
  });

  constructor(
    private modalController: ModalController,
    private actionService: ActionService,
    private dateTimeService: DatetimeService
  ) {
    this.expenseTypes = ExpenseTypes;
  }

  ngOnInit() {}

  initCreateExpense(): void {
    const expense: ExpenseInterface = this.addExpenseForm.value;
	expense.amount = Number(expense.amount.toFixed(2));
    this.dateTimeService
      .getSelectedDate()
      .then((date: Date) => {
        if (!expense.createdOn) {
          expense.createdOn = date;
        }
      })
      .then(() => {
        this.actionService
          .createExpense(expense)
          .then(() => {
            console.log("Expense Was Created");
            this.dismissModal();
          })
          .catch((err) => console.log(err));
      });
  }

  dismissModal(): void {
    this.modalController.dismiss().then().catch();
  }
}
