import {test as base} from '@playwright/test';
import { BookStorePage} from '../pages/BookStorePage';
import { BrowserWindowPage } from '../pages/BrowserWindowPage';
import { Logger } from '../utils/logger';


type MyFixtures = {

    bookStorePage: BookStorePage;

    browserWindowPage : BrowserWindowPage;

    logger: Logger;
}

export const test = base.extend<MyFixtures> ({


    browserWindowPage: async({page}, use ) =>{
         
        await use (new BrowserWindowPage(page));
    },

    bookStorePage: async({page}, use)=>{

        await use(new BookStorePage(page));
    },

    logger: async({page}, use)=>{

        await use(new Logger());
    }


});

export {expect} from '@playwright/test';