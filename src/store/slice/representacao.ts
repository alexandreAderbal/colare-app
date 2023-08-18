import { buscarRepresentacaoExtraReducers } from '@store/thunk/buscarRepresentacoes';
import { IRepresentacaoModelProps } from '@model/representacao';
import { createSlice } from '@reduxjs/toolkit';

export interface IInitialStateRepresentacao {
    representacaos: IRepresentacaoModelProps[];
    loading: boolean;
}

const initialState: IInitialStateRepresentacao = {
    representacaos: [],
    loading: false
};

const representacaoSlice = createSlice({
    name: 'representacaoSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        buscarRepresentacaoExtraReducers(builder);
    },
});

export default representacaoSlice.reducer;
