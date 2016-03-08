import Rx from 'rx'
import Cycle from '@cycle/core'
import { makeDOMDriver, div, input, p } from '@cycle/dom'

function main(drivers) {
  return {
    DOM: drivers.DOM.select('input').events('click')
      .map(evt => evt.target.checked)
      .startWith(false)
      .map(toggled =>
        div([
          input({ type: 'checkbox' }), 'Toggle me',
          p(toggled ? 'ON' : 'off')
        ])
      )
  }
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers)
