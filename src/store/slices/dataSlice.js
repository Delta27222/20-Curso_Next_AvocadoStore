import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAvocados } from 'utils/api';

const initialState ={
  avocados:[],
  avocadosCart: []
}

export const fetchAvocadosWithDetails = createAsyncThunk(
  'data/fetchAvocadosWithDetails',
  async (_, { dispatch }) => {
    try {
      const avocadosRes = await fetchAvocados();
      dispatch(setAvocados(avocadosRes));
    } catch (error) {
      console.error('Error fetching avocados:', error);
      throw error;
    }
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers:{
    setAvocados: (state, action) => {
      state.avocados = action.payload
    },
    addProduct: (state, action) => {
      const avocadoIndex = state.avocadosCart.findIndex((avocado) => avocado.product.id === action.payload.product.id)
      if(avocadoIndex < 0) {
        state.avocadosCart.push(action.payload)
      }else{
        state.avocadosCart[avocadoIndex].cant += action.payload.cant
      }
    },
    deleteProduct: (state, action) => {
      const avocadoIndex = state.avocadosCart.findIndex((avocado) => avocado.product.id === action.payload)

      if(state.avocadosCart[avocadoIndex].cant === 1) {
        state.avocadosCart.splice(avocadoIndex, 1)
      }else {
        state.avocadosCart[avocadoIndex].cant -= 1
      }
    }
  },
});


export const { setAvocados, addProduct, deleteProduct } = dataSlice.actions;
export default dataSlice.reducer;
