import {test, expect} from '../fixtures/customFixtures';


test.beforeEach(async({browserWindowPage, logger})=>{

  logger.info('Opening Browser Window Page');
  await browserWindowPage.goto();
});


test('TC_001 Verify new tab opens',async({page})=>{
     
    //creates an object of the Browser Window Page
  

    //Captures the array returned by Prmosie.all() that stores new tab 
    //Promise.all() exceutes both tasks simultaneously 
     const [newPage]= await Promise.all([
        
        //listens for any newly opened tab
        page.context().waitForEvent('page'),

        //clicks the button that opens the tab
        page.locator('#tabButton').click()

     ]);

    //Waits for the newly opened tab to load completely
     await newPage.waitForLoadState();
    
     //Verifies new tab exists i.e. newPage!=null and newPage!=undefined
     expect(newPage).toBeTruthy();
});

test('TC_002 Verify New Tab Content', async({page})=>{

    

    const [childPage]= await Promise.all([

        page.context().waitForEvent('page'),
        page.locator('#tabButton').click()

    ]);
    

    await childPage.waitForLoadState();
    
    const Heading= childPage.locator('#sampleHeading');

    await expect(Heading).toHaveText('This is a sample page');
});


test('TC_003 Close Child Tab', async({page})=>{


    const [childPage]= await Promise.all([
       
        page.context().waitForEvent('page'),
        page.locator('#tabButton').click()
    ]);
    
    //waits for the childPage to load completely
    await childPage.waitForLoadState();
    //closes the childPage
    await childPage.close();
   
    //checks whether closing child tab redirects to the Browser Window
    await expect(page).toHaveURL('https://demoqa.com/browser-windows');


});


test('TC_004 Verify New Window Message', async({page})=>{

    const [messageWindow]= await Promise.all([

        page.context().waitForEvent('page'),
        page.locator('#messageWindowButton').click()
    ]);

    await messageWindow.waitForLoadState();
    
    //Gets the text content mentioned in the body of the messageWindow
    const message= await messageWindow.locator('body').textContent();
    
    //Verifies whether the text contains appropriate message
    expect(message).toContain('Knowledge increases by sharing but not by saving');

});