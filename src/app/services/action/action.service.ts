import {Injectable} from '@angular/core';
import {DataService} from '../data/data.service';
import {ExpenseInterface} from '../../interface/expenseInterface';
import {StorageService} from '../storage/storage.service';
import {DatetimeService} from '../datetime/datetime.service';

@Injectable({
	providedIn: 'root'
})
export class ActionService {


	constructor(
		private dataService: DataService,
		private storageService: StorageService,
		private dateTimeService: DatetimeService
	) {
		this.getTodayExpensesFromLocal();
	}

	async createExpense(expense: ExpenseInterface): Promise<void> {
		return await this.storageService.saveExpenseToLocal(expense).then().catch();
	}

	async getTodayExpensesFromLocal(): Promise<void> {
		return this.storageService.getExpensesFromLocal().then((expenses: ExpenseInterface[]) => {
			this.dataService.setExpenses(expenses);
		});
	}

	async emitExpensesByDateFromLocal(date: Date): Promise<void> {
		return this.storageService.getExpensesFromLocal(date).then((expenses) => {
			this.dataService.setExpenses(expenses);
		})
	}

}