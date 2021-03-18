const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('Accordion tests', function () {
    this.timeout(60000);

    //{ headless: false, slowMo: 3000 }
    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 3000 }); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('load books', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#loadBooks');

        const books = await page.$$eval('tbody > tr > td', r => r.map(td => td.textContent));

        expect(books).includes('Harry Potter and the Philosopher\'s Stone');
        expect(books).includes('J.K.Rowling');
        expect(books).includes('C# Fundamentals');
        expect(books).includes('Svetlin Nakov');
    });

    it('add book', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#loadBooks');

        await page.fill('#createForm > input[type=text]:nth-child(3)', 'How to Win Friends and Influence People');
        await page.fill('#createForm > input[type=text]:nth-child(5)', 'Dale Carnegie');

        await page.click('#createForm > button');

        await page.click('#loadBooks');

        const books = await page.$$eval('tbody > tr > td', r => r.map(td => td.textContent));

        expect(books).includes('Harry Potter and the Philosopher\'s Stone');
        expect(books).includes('J.K.Rowling');
        expect(books).includes('C# Fundamentals');
        expect(books).includes('Svetlin Nakov');
        expect(books).includes('How to Win Friends and Influence People');
        expect(books).includes('Dale Carnegie');
    })

    it('add book with empty fields', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#loadBooks');

        await page.fill('#createForm > input[type=text]:nth-child(3)', '');
        await page.fill('#createForm > input[type=text]:nth-child(5)', '');

        await page.click('#createForm > button');

        await page.click('#loadBooks');

        const books = await page.$$eval('tbody > tr > td', r => r.map(td => td.textContent));

        // expect(books.length).to.equal(6);
        // expect(books[6]).to.equal(undefined);
        expect(books).includes('Harry Potter and the Philosopher\'s Stone');
        expect(books).includes('J.K.Rowling');
        expect(books).includes('C# Fundamentals');
        expect(books).includes('Svetlin Nakov');
    })

    it('after click button Edit - correct form should be made visible', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#loadBooks');

        await page.click('button.editBtn');

        const visible = await page.isVisible('#editForm');
        const notVisible = await page.isVisible('#createForm');

        const title = await page.$eval("#editForm > input[type=text]:nth-child(4)", el => el.value);
        const author = await page.$eval("#editForm > input[type=text]:nth-child(6)", el => el.value);

        expect(visible).to.be.true;
        expect(notVisible).to.be.false;

        expect(title).to.equal('Harry Potter and the Philosopher\'s Stone');
        expect(author).to.equal('J.K.Rowling');
    })

    it('edit book', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#loadBooks');

        await page.click('button.editBtn');

        await page.fill('#editForm > input[type=text]:nth-child(4)', 'Harry Potter and the Philosopher\'s Stone edited');
        await page.fill('#editForm > input[type=text]:nth-child(6)', 'J.K.Rowling edited');

        await page.click('#editForm > button')

        await page.click('#loadBooks');

        const books = await page.$$eval('tbody > tr > td', r => r.map(td => td.textContent));

        expect(books).includes('Harry Potter and the Philosopher\'s Stone edited');
        expect(books).includes('J.K.Rowling edited');
    })

    it('delete book', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#loadBooks');
        
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await page.click('button.deleteBtn');

        await page.click('#loadBooks');

        const books = await page.$$eval('tbody > tr > td', r => r.map(td => td.textContent));

        expect(books[0]).to.equal('C# Fundamentals');
        expect(books[1]).to.equal('Svetlin Nakov');
    })
});