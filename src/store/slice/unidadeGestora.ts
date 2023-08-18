import { buscarUnidadeGestoraExtraReducers } from '@store/thunk/buscarUnidadesGestoras';
import { IUnidadeGestoraModelProps } from '@model/unidadeGestora';
import { createSlice } from '@reduxjs/toolkit';

export interface IInitialStateUnidadeGestora {
    unidadeGestoras: IUnidadeGestoraModelProps[];
    loading: boolean;
}

const initialState: IInitialStateUnidadeGestora = {
    unidadeGestoras: [],
    loading: false
};

const unidadeGestoraSlice = createSlice({
    name: 'unidadeGestoraSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        buscarUnidadeGestoraExtraReducers(builder);
    },
});

export default unidadeGestoraSlice.reducer;
