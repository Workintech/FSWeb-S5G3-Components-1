const { server } = require('./mocks/server')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')

beforeAll(() => {
  server.listen()
  document.body.innerHTML = `
    <div class="header">
      <img class="menu-button" src="http://localhost:9000/img/menu.png" />
      <h1>Tekno Haber</h1>
    </div>
    <div class="articles"></div>
  `
  require('./src/index')
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})

describe('sadece sağlıklılık testi', () => {
  test('[1] Haber kaynağı başlığı DOM içerisinde yer alıyor', () => {
    expect(screen.findByText(/Tekno Haber/i, { selector: 'h1' }))
  })
})
