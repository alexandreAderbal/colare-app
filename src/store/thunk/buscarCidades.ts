import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IInitialStateCidade } from '@store/slice/cidadeSlice';
import CidadeModel, { ICidadeModelProps } from '@model/cidade';
import Contextos from '@core/service/contextos';
import Service from '@core/service';


const { MUNICIPIOS } = Contextos;
const NAME_ACTION = 'cidade/buscarCidades';

export const buscarCidadesAction = createAsyncThunk(NAME_ACTION, async (): Promise<ICidadeModelProps[]> => {
    const response = await Service.getNoAuth()
        .url(MUNICIPIOS)
        .request();
    return response.data;
});

export const buscarCidadesExtraReducers = (builder: ActionReducerMapBuilder<IInitialStateCidade>) => {
    builder.addCase(buscarCidadesAction.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(buscarCidadesAction.fulfilled, (state, action) => {
        state.cidades = CidadeModel.convertList(action.payload);
        state.loading = false;
    });
    builder.addCase(buscarCidadesAction.rejected, (state) => {
        state.cidades = [];
        state.loading = false;
    });
};
