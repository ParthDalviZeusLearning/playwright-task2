import {test,expect} from '../fixtures/customFixtures';
import { mockBooksResponse,mockBooksEmptyResponse,mockBooksDelayedResponse } from '../test-data/mockBook';

//Verify API response with Custom Data
test('TC_005 Mock Books API', async({page,bookStorePage,logger})=>{
     
    logger.info('Mocking books with Custom Data');
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

    await bookStorePage.goto();
    //checks whether the mock book is displayed
    await expect(page.getByText('Learn Playwright Automation')).toBeVisible();


});

//Verify API response with Empty Data
test('TC_006 Mock Empty Book Response', async({page,bookStorePage,logger})=>{
  
   logger.info('Mocking books with Empty Data');
   await page.route('**/BookStore/v1/books',
    
    async route => {

        await route.fulfill({

            status:200,
            contentType: 'application/json',

             body: JSON.stringify({books:mockBooksEmptyResponse.books})

        });
    }
   );


   await bookStorePage.goto();
 
   await expect(bookStorePage.bookRows).toHaveCount(0);

});

//Verify API response with delay
test('TC_007 Delay API Response', async({page,bookStorePage,logger})=>{

    logger.info('Mocking books with Delayed Response');
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

       
   await bookStorePage.goto();
    await expect(page.getByText('Delayed Book')).toBeVisible();
});


// test('Test Timeout Example', async({page,bookStorePage})=>{

//     await bookStorePage.goto();
//     await new Promise(resolve=>{

//        setTimeout(resolve,35000);

//     });
// });