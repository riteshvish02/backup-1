import {incrementby2} from '../reducers/CounterSlice'

export {increment,incrementby2,decrement} from '../reducers/CounterSlice'

export const asyncincrement = (value) => async(dispatch,getstate)=>{
  try {
    setTimeout(() => {
        dispatch(incrementby2(value))
      }, 1000);
  } catch (error) {
    console.log(error);
  }
}