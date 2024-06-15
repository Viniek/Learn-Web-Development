import React from 'react'
import userCounterStore from './store/counterStore'

function CounterDown() {
    const count= userCounterStore((state)=> state.count)
  return (
    <>
    <button>- Count is {count}</button>
    </>
  )
}

export default CounterDown