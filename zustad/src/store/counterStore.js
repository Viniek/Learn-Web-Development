
import {create} from 'zustand'
const counterStore= (set) =>({
    count:25

    addCount : ()=> {
        set((previousState)=>{
            console.log(previousState);
    })
    }
})
const userCounterStore =create (counterStore);

export default userCounterStore;
