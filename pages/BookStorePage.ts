import { Page ,test, expect} from '@playwright/test';

export class BookStorePage{

    readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }
    
    async goto(): Promise<void> {

        await this.page.goto('https://demoqa.com/books');
    }

}