
import {create} from 'zustand'
const counterStore= (set) =>({
    count:25
})
const userCounterStore =create (counterStore);

export default userCounterStore;