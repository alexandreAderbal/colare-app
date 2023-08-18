import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IInitialStateRepresentacao } from '@store/slice/representacao';
import { IRepresentacaoModelProps } from '@model/representacao';
import { replaceIbge } from '@core/util/stringParamsUtil';
import Contextos from '@core/service/contextos';
import Service from '@core/service';


const { REPRESENTACOES } = Contextos;
const NAME_ACTION = 'representacao/buscarRepresentacoes';

export const buscarRepresentacaoAction = createAsyncThunk(NAME_ACTION, async (codigoIBGE: string): Promise<IRepresentacaoModelProps[]> => {
    const response = await Service.getNoAuth()
        .url(replaceIbge(REPRESENTACOES, codigoIBGE))
        .request();
    return response.data;
});

export const buscarRepresentacaoExtraReducers = (builder: ActionReducerMapBuilder<IInitialStateRepresentacao>) => {
    builder.addCase(buscarRepresentacaoAction.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(buscarRepresentacaoAction.fulfilled, (state, action) => {
        state.representacaos = action.payload;
        state.loading = false;
    });
    builder.addCase(buscarRepresentacaoAction.rejected, (state) => {
        state.representacaos = [];
        state.loading = false;
    });
};
