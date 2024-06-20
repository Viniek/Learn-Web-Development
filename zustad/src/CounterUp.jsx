import React from 'react'
import userCounterStore from './store/counterStore'

function CounterUp() {
    const count =userCounterStore((state) => state.count)
    const addCount= userCounterStore(state =>state.addCount)
  return (
   <>
   <button>+ count is {count} </button>
   </>
  )
}

export default CounterUp