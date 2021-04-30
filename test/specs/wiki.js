describe('Go to wikipedia through Google.com', () => {
  it('Go from google to wikipedia', () => {
    browser.url('https://www.google.com/')
    let userInput = $('.gLFyf')
    userInput.setValue('Wikipedia')
    let wikiResult = $('//h3[@class="LC20lb DKV0Md"]')
    userInput.keys('Enter')
    wikiResult.click()
    browser.pause(3000)
    expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    expect(browser).toHaveTitle('Wikipedia, la enciclopedia libre')
  })
})
