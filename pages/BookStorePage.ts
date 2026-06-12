import { Page ,test, expect,Locator} from '@playwright/test';

export class BookStorePage{

    readonly page: Page;
    readonly bookRows: Locator;

    constructor(page: Page){
        this.page=page;
        this.bookRows= page.locator('.rt-tbody .rt-tr-group');
    }
    

    async goto(): Promise<void> {

        await this.page.goto('https://demoqa.com/books');
    }

}