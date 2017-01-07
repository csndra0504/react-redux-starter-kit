import NewRoute from 'routes/New'

describe('(Route) New Route', () => {
  let _component

  beforeEach(() => {
    _component = NewRoute.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof NewRoute).to.equal('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
