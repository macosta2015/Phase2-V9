// July 28th

const puppeteer = require('puppeteer');
require('dotenv').config();

const { launchBrowserAndNavigateToDocument } = require('./components/launchBrowserAndNavigate.js');
const { newSketch } = require('./components/newSketch.js');
const { clickButtonByIndex } = require('./components/clickButtonByIndex.js');
const copySketchFunction = require('./components/copySketchFunction.js');
const pasteIntoSketchFunction = require('./components/pasteIntoSketchFunction.js');
const editIntoSketchFunction = require('./components/editIntoSketchFunction.js');
const renameIntoSketchFunction = require('./components/renameIntoSketchFunction.js');
const waitForEnter = require('./components/waitForEnter.js');
const searchAndClickTransform = require('./components/searchAndClickTransform.js');
const searchAndClickCustomExtrude2 = require('./components/searchAndClickCustomExtrude2.js');
const searchAndClickExtrude = require('./components/searchAndClickExtrude.js');
const { performRightClickOptionByTitle } = require('./components/performRightClickOptionByTitle.js');

(async () => {
    try {

        // Launch browser and navigate to the document
        const newPage = await launchBrowserAndNavigateToDocument(); // Ensure this returns a newPage object





        console.log("AAAAAAAAAA");
        await waitForEnter();
        console.log("BBBBBBBBBB");


        //Working on (2) Extrude 1(4.00)
        ////////////////////////////////////////////////////////////////////////////
        const selector = 'div[data-id="XgmGAQ7RqnVg1wa8"]'; // Replace with the appropriate selector
        const title = '(2) Extrude 1(4.00) did not regenerate properly: Select face or sketch region to extrude.'; // Replace with the desired title
        console.log('Right-clicking on the specified element.');
        const editOptions3 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log(editOptions3);
        console.log("CCCCCCCCCC");
        await waitForEnter();
        console.log("DDDDDDDDDD");
        console.log('editIntoSketchFunction')
        editIntoSketchFunction(editOptions3, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("EEEEEEEEEE");
        await waitForEnter();
        console.log("FFFFFFFFFF");


        ///////WORKING, NEED TO CHANGE THE (3) Extrude Sketch(1.03)
        await newPage.keyboard.press('Enter');
        console.log('await newPage.keyboard.press')

        //Select index
        const desiredIndex7 = 7;
        await clickButtonByIndex(newPage, desiredIndex7);
        console.log("GGGGGGGGGGGG");
        await waitForEnter();
        console.log("HHHHHHHHHH");
        const selector7 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title7 = '(3) Extrude Sketch(1.03) did not regenerate properly: Select a sketch plane.<br>1 missing selection'; // Replace with the desired title
        console.log('Right-clicking on the specified element.');
        const editOptions7 = await performRightClickOptionByTitle(newPage, selector7, title7);
        console.log(editOptions7);


        console.log("IIIIIIIIIIII");
        await waitForEnter();
        console.log("JJJJJJJJJJJJJ");


        editIntoSketchFunction(editOptions7, newPage);


        console.log("KKKKKKKKKKKKKK");
        await waitForEnter();
        console.log("LLLLLLLLLLLLL");


        ///////WORKING, NEED TO CHANGE THE (3) Extrude Sketch(1.03)
        await newPage.keyboard.press('Enter');
        console.log('await newPage.keyboard.press')


        //Select index
        const desiredIndex8 = 8;
        await clickButtonByIndex(newPage, desiredIndex8);
        console.log("MMMMMMMMMMMMM");
        await waitForEnter();
        console.log("NNNNNNNNNNN");


        //Working on (4) Extrude 2
        ////////////////////////////////////////////////////////////////////////////
        const selector8 = 'div[data-id="mypaWa+39o7YTdnA"]'; // Replace with the appropriate selector
        const title8 = '(4) Extrude 2 did not regenerate properly: No merge scope selected.<br>1 missing selection';
        console.log('Right-clicking on the specified element.');
        const editOptions8 = await performRightClickOptionByTitle(newPage, selector8, title8);
        console.log(editOptions8);
        console.log("OOOOOOOOOO");
        await waitForEnter();
        console.log("PPPPPPPPPP");
        editIntoSketchFunction(editOptions8, newPage);
        ////////////////////////////////////////////////////////////////////////////


        // Use the retrieved options for further actions (e.g., copySketchFunction)
        // console.log('copySketchFunction')
        // copySketchFunction(editOptions3, newPage);


        // Select sketch to click or unclick, good code to select and unselect
        // console.log('Waiting 10 seconds.');
        // await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        // await newPage.evaluate(() => {
        //     const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
        //     if (thirdButton) {
        //         thirdButton.click();
        //         thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        //     } else {
        //         console.error('Third button not found.');
        //     }
        // });
        // console.log("Third button clicked and scrolled into view.");


        console.log("QQQQQQQQQQQ");
        await waitForEnter();
        console.log("RRRRRRRRRRR");


        //Working on (5) Extrude 3 PLAY(2.00)
        ////////////////////////////////////////////////////////////////////////////
        const selector9 = 'div[data-id="zUc3/N14UtKVlcJg"]'; // Replace with the appropriate selector
        const title9 = '(5) Extrude 3 PLAY(2.00) did not regenerate properly: Select face or sketch region to extrude.<br>2 missing selections';
        console.log('Right-clicking on the specified element.');
        const editOptions9 = await performRightClickOptionByTitle(newPage, selector9, title9);
        console.log(editOptions9);
        console.log("SSSSSSSSSSS");
        await waitForEnter();
        console.log("TTTTTTTTTTT");
        editIntoSketchFunction(editOptions9, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("UUUUUUUUUUU");
        await waitForEnter();
        console.log("VVVVVVVVVVV");


        //Working on (6) Sketch 2(1.04)
        ////////////////////////////////////////////////////////////////////////////
        const selector10 = 'div[data-id="rscxt6ouKl+W1w6N"]'; // Replace with the appropriate selector
        const title10 = '(6) Sketch 2(1.04) did not regenerate properly: Select a sketch plane.<br>1 missing selection';
        console.log('Right-clicking on the specified element.');
        const editOptions10 = await performRightClickOptionByTitle(newPage, selector10, title10);
        console.log(editOptions10);
        console.log("WWWWWWWWWWW");
        await waitForEnter();
        console.log("XXXXXXXXXXX");
        editIntoSketchFunction(editOptions10, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("YYYYYYYYYYY");
        await waitForEnter();
        console.log("ZZZZZZZZZZZ");


        //Working on Extrude 1
        ////////////////////////////////////////////////////////////////////////////
        const selector11 = 'div[data-id="gdrROUTBVHLLvba1"]'; // Replace with the appropriate selector
        const title11 = 'Extrude 1 did not regenerate properly: Select face or sketch region to extrude.<br>2 missing selections';
        console.log('Right-clicking on the specified element.');
        const editOptions11 = await performRightClickOptionByTitle(newPage, selector11, title11);
        console.log(editOptions11);
        console.log("AAAAAAAAAAA");
        await waitForEnter();
        console.log("BBBBBBBBBBB");
        editIntoSketchFunction(editOptions11, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("CCCCCCCCCCC");
        await waitForEnter();
        console.log("DDDDDDDDDDDD");


        //Working on Fillet 1
        ////////////////////////////////////////////////////////////////////////////
        const selector12 = 'div[data-id="S2gcrVk07xQzvvV1"]'; // Replace with the appropriate selector
        const title12 = 'Fillet 1 did not regenerate properly: Select edges or faces to fillet.<br>1 missing selection';
        console.log('Right-clicking on the specified element.');
        const editOptions12 = await performRightClickOptionByTitle(newPage, selector12, title12);
        console.log(editOptions12);
        console.log("EEEEEEEEEEE");
        await waitForEnter();
        console.log("FFFFFFFFFFF");
        editIntoSketchFunction(editOptions12, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("GGGGGGGGGGG");
        await waitForEnter();
        console.log("HHHHHHHHHHH");


        //Working on Chamfer 1
        ////////////////////////////////////////////////////////////////////////////
        const selector13 = 'div[data-id="098TXre2LrwgVvuP"]'; // Replace with the appropriate selector
        const title13 = 'Chamfer 1 did not regenerate properly: Select edges or faces to chamfer.<br>2 missing selections';
        console.log('Right-clicking on the specified element.');
        const editOptions13 = await performRightClickOptionByTitle(newPage, selector13, title13);
        console.log(editOptions13);
        console.log("IIIIIIIIIII");
        await waitForEnter();
        console.log("JJJJJJJJJJJ");
        editIntoSketchFunction(editOptions13, newPage);
        ////////////////////////////////////////////////////////////////////////////
























        // Select sketch to click or unclick again
        console.log('Waiting 10 seconds.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            if (thirdButton) {
                thirdButton.click();
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("Third button clicked and scrolled into view again.");

        console.log("SSSSSSSSSSS");
        // Edit operation
        console.log('Waiting 10 seconds.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds

        const desiredIndex3 = 7; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex3);

        console.log('Waiting 10 seconds before editing.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds

        const selector3 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title3 = 'Second Sketch'; // Replace with the desired title
        const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        console.log(editOptions4);

        // Perform the edit function
        console.log('editIntoSketchFunction')
        editIntoSketchFunction(editOptions4, newPage);

        console.log('Waiting 40 seconds after edit.');
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 40 seconds
        console.log('AFTER THE CODE RUNS.');

        console.log("TTTTTTTTTTT");


        console.log("UUUUUUUUUUU");
        ////////////////////
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        console.log("VVVVVVVVVVV");
        ////////////////////
        await searchAndClickTransform(newPage);



        console.log('After waiting for the transform function')
        console.log("WWWWWWWWWWW")


        //         // //RENAME
        //         // console.log('Waited for 5 seconds.');
        //         // console.log('WE START THE RENAME PHASE');
        //         // await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5
        //         // //ALL THE CODE TOGETHERx
        //         // const desiredIndex3 = 7; // Or any other desired index
        //         // await clickButtonByIndex(newPage, desiredIndex3);
        //         // //Right click option 
        //         // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        //         // const title3 = 'Sketch 1'; // Replace with the desired title
        //         // const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        //         // console.log(editOptions4);
        //         // //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        //         // renameIntoSketchFunction(editOptions4, newPage);
        //         // await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        //         // console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');




        //         //WE ARE CHECKING ENDING OF EDIT OPTIONS
        //         console.log('Waited for 10 seconds.');
        //         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //         console.log('Typing "Third Sketch"...');
        //         await newPage.keyboard.type('Third Sketch');
        //         await new Promise(resolve => setTimeout(resolve, 5000));



        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("XXXXXXXXXX")





        //MOVING TO THE THIRD SKETCH
        console.log('moving to the third sketch')
        //ALL THE CODE TOGETHER
        // const desiredIndex = 5; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex);
        //Right click option
        // const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        // const title = 'First Sketch'; // Replace with the desired title
        const editOptions5 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log(editOptions5);
        // const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        console.log('copySketchFunction')
        copySketchFunction(editOptions5, newPage);
        console.log("YYYYYYYYYYY")


        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("ZZZZZZZZZZZ")


        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });









        console.log("QQQQQQQQQQQ")
        // RIGHT CLICK
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('pasteIntoSketchFunction');
        console.log('pasteIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        const desiredIndex9 = 8; //IMPORTANT PART THAT MAKES THE CODE RUN!
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 10 seconds
        console.log('Waiting 5 seconds.');
        await clickButtonByIndex(newPage, desiredIndex9);
        //Right click option
        const selector14 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        // const selector8 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title14 = 'Third Sketch'; // Replace with the desired title
        const editOptions14 = await performRightClickOptionByTitle(newPage, selector14, title14);
        console.log(editOptions14);
        //Paste into sketch function
        //TODO: THE CORE RUNS BECAUSE WE MADE IT RUN FOR 40 SECONDS. 
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        console.log('Waited for 10 seconds.');
        console.log('BEFORE THE CODE RUNS.');
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        console.log('pasteIntoSketchFunction');
        pasteIntoSketchFunction(editOptions14, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("RRRRRRRRRR")




        console.log("SSSSSSSSSS")
        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });



        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("SSSSSSSSSSSSSSSSS")






        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("TTTTTTTTTTTTTT")






        //EDIT
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('Waiting 10 seconds.');
        console.log('clickButtonByIndex');
        console.log('editIntoSketchFunction')
        console.log('editIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //ALL THE CODE TOGETHER
        const desiredIndex4 = 8; // IMPORTANT (NEEDS TO BE THE SAME AS THE SELECTOR) Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex4);
        //EDIT
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector //ORIGINAL
        // const selector4 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const selector4 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        // const title4 = 'Second Sketch'; // Replace with the desired title
        const title4 = 'Third Sketch'; // Replace with the desired title
        const editOptions6 = await performRightClickOptionByTitle(newPage, selector4, title4);
        console.log(editOptions6);
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        console.log('editIntoSketchFunction')
        editIntoSketchFunction(editOptions6, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("QQQQQQQQQQQQQQ")








        ////////////////////
        console.log('WAITING FOR USER TO CLICK ENTER')
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        ////////////////////
        await searchAndClickTransform(newPage);
        console.log('After waiting for the transform function')





        ////////////////////
        await waitForEnter();
        console.log("LLLLLLLLLLLLLLLLL")
        ////////////////////
















        await newPage.evaluate(() => {
            document.addEventListener('mousemove', (event) => {
                console.log(`Mouse coordinates: X = ${event.clientX}, Y = ${event.clientY}`);
            });
        });

        console.log('Move the mouse over the page to see the coordinates...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Script completed successfully.');



    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
