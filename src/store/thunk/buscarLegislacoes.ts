import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IInitialStateLegislacao } from '@store/slice/legislacao';
import { ILegislacaoModelProps } from '@model/legislacao';
import { replaceIbge } from '@core/util/stringParamsUtil';
import Contextos from '@core/service/contextos';
import Service from '@core/service';


const { LEGISLACAOES } = Contextos;
const NAME_ACTION = 'legislacao/buscarLegislacoes';

export const buscarLegislacaoAction = createAsyncThunk(NAME_ACTION, async (codigoIBGE: string): Promise<ILegislacaoModelProps[]> => {
    const response = await Service.getNoAuth()
        .url(replaceIbge(LEGISLACAOES, codigoIBGE))
        .request();
    return response.data;
});

export const buscarLegislacaoExtraReducers = (builder: ActionReducerMapBuilder<IInitialStateLegislacao>) => {
    builder.addCase(buscarLegislacaoAction.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(buscarLegislacaoAction.fulfilled, (state, action) => {
        state.legislacoes = action.payload;
        state.loading = false;
    });
    builder.addCase(buscarLegislacaoAction.rejected, (state) => {
        state.legislacoes = [];
        state.loading = false;
    });
};
