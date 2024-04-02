const fs = require('fs')
const puppeteer = require('puppeteer')

async function run() {
    const results = []

    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu',
        ],
    })
    page = await browser.newPage()

    await page.goto('http://localhost:1337')

    await Promise.all([
        page.addScriptTag({
            url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        }),
        page.addScriptTag({
            url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js',
        }),
    ])

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            assert(document.getElementsByTagName('header').length === 1)
        })
        console.log('Test #1 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #1 failed! Did you create a header element and text Page Header?')
        results.push(false)
    }

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            assert(document.getElementsByTagName('nav').length === 1)
            const navbar = document.getElementsByTagName('nav')[0]
            assert(navbar.children[0].nodeName === 'UL' && navbar.children[0].children[0].nodeName === 'LI')
        })
        console.log('Test #2 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #2 failed! Did you create a nav element which contains a list of links using the li element?')
        results.push(false)
    }

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            assert(document.getElementsByTagName('main').length === 1)
        })
        console.log('Test #3 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #3 failed! Did you create a main content using the main tag which occupies the remaining space after header and navbar')
        results.push(false)
    }

    try {
        await page.evaluate(async () => {
            const assert = window.chai.assert
            assert(document.getElementsByTagName('footer').length === 1)
        })
        console.log('Test #4 passed!')
        results.push(true)
    } catch (error) {
        console.log('Test #4 failed! Did you create a footer element and add the text Footer?')
        results.push(false)
    }

    fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(results))
    await browser.close().catch((err) => {})

    process.exit(0)
}
run()