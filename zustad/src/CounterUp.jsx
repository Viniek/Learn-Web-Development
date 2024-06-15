import React from 'react'
import userCounterStore from './store/counterStore'

function CounterUp() {
    const count =userCounterStore((state) => state.count)
  return (
   <>
   <button>+ count is {count} </button>
   </>
  )
}

export default CounterUp