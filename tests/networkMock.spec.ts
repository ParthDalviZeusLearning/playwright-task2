import {test,expect} from '@playwright/test';
import { BookStorePage } from '../pages/BookStorePage';
import { mockBooksResponse,mockBooksEmptyResponse,mockBooksDelayedResponse } from '../test-data/mockBook';
test('TC_005 Mock Books API', async({page})=>{
   
    //Intercepts the original route before it reaches the server
    await page.route('**/BookStore/v1/Books', 
        async route => {
          
            //stops the real API call and sends the custom response
            await route.fulfill({

                status: 200,
                contentType: 'application/json',

                 body: JSON.stringify({books:mockBooksResponse.books})
            });
        }
    );

    const bookStorePage= new BookStorePage(page);
    await bookStorePage.goto();
    //checks whether the mock book is displayed
    await expect(page.getByText('Learn Playwright Automation')).toBeVisible();


});


test('TC_006 Mock Empty Book Response', async({page})=>{

   await page.route('**/BookStore/v1/books',
    
    async route => {

        await route.fulfill({

            status:200,
            contentType: 'application/json',

             body: JSON.stringify({books:mockBooksEmptyResponse.books})

        });
    }
   );


   const bookStorePage= new BookStorePage(page);
   await bookStorePage.goto();
   const rows= page.locator('.rt-tbody .rt-tr-group');
   await expect(rows).toHaveCount(0);

});

test('TC_007 Delay API Response', async({page})=>{


    await page.route('**/BookStore/v1/Books',

        async route=> {

            await new Promise(resolve =>

                setTimeout(resolve,3000)
            );
            
        await route.fulfill({

                status: 200,
                contentType: 'application/json',

                body: JSON.stringify({books:mockBooksDelayedResponse.books})
            });
           

        }
    );

    const bookStorePage= new BookStorePage(page);    
   await bookStorePage.goto();
    await expect(page.getByText('Delayed Book')).toBeVisible();
});