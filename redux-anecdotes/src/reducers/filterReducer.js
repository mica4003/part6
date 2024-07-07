import {createSlice} from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name:'filter',
  initialState: '',
  reducers:{
    filterChange(state, action){
      return action.payload
    }
  }
})
export default filterSlice.reducer
export const {filterChange} = filterSlice.actions


/*const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET-FILTER':
      return action.payload;
    default:
      return state;
  }
};

export const filterChange = (filter) => {
  return {
    type: 'SET-FILTER',
    payload: filter,
  };
};

export default filterReducer;*/
