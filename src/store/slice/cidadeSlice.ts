import { buscarCidadesExtraReducers } from '@store/thunk/buscarCidades';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICidadeModelProps } from '@model/cidade';

export interface IInitialStateCidade {
    cidades: ICidadeModelProps[];
    cidade: ICidadeModelProps | undefined;
    loading: boolean;
}

const initialState: IInitialStateCidade = {
    cidades: [],
    cidade: undefined,
    loading: false
};

const cidadeSlice = createSlice({
    name: 'cidadeSlice',
    initialState,
    reducers: {
        atualizaCidadeAction: (state, action: PayloadAction<ICidadeModelProps>) => {
            state.cidade = action.payload;
        },
    },
    extraReducers: (builder) => {
        buscarCidadesExtraReducers(builder);
    },
});

export const { atualizaCidadeAction } = cidadeSlice.actions;
export default cidadeSlice.reducer;
