import {Injectable} from '@angular/core';
import {DataService} from '../data/data.service';
import {ExpenseInterface} from '../../interfaces/expenseInterface';
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
    }

    async createExpense(expense: ExpenseInterface): Promise<void> {
        const key = this.dateTimeService.getDateTimeISO(expense.createdOn);
        this.storageService.saveExpenseToLocal(expense);
        return this.dataService.setExpenses(expense);
    }

    async getTodayExpensesFromLocal(): Promise<ExpenseInterface[]> {
        return await this.storageService.getExpensesFromLocal().then((expenses: ExpenseInterface[]) => {
            return expenses;
        });
    }
}