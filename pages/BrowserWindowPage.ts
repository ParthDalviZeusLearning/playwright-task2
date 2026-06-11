import {Page,Locator} from '@playwright/test';


export class BrowserWindowPage{

    readonly page:Page;
    readonly newTabButton: Locator;
    readonly newWindowButton: Locator;
    readonly newWindowMessageButton:Locator;

    constructor(page: Page){

        this.page=page;
        this.newTabButton=page.locator('#tabButton');
        this.newWindowButton=page.locator('#windowButton');
        this.newWindowMessageButton=page.locator('#messageWindowButton');
    }

    async goto(): Promise<void> {

        await this.page.goto('https://demoqa.com/browser-windows');
    }
}