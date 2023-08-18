import { ILegislacaoModelProps } from '@model/legislacao';
import { createSlice } from '@reduxjs/toolkit';
import { buscarLegislacaoExtraReducers } from '@store/thunk/buscarLegislacoes';

export interface IInitialStateLegislacao {
    legislacoes: ILegislacaoModelProps[];
    loading: boolean;
}

const initialState: IInitialStateLegislacao = {
    legislacoes: [],
    loading: false
};

const legislacaoSlice = createSlice({
    name: 'legislacaoSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        buscarLegislacaoExtraReducers(builder)
    },
});

export default legislacaoSlice.reducer;
