import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { IInitialStateUnidadeGestora } from '@store/slice/unidadeGestora';
import { IUnidadeGestoraModelProps } from '@model/unidadeGestora';
import { replaceIbge } from '@core/util/stringParamsUtil';
import Contextos from '@core/service/contextos';
import Service from '@core/service';


const { UNIDADES_GESTORAS } = Contextos;
const NAME_ACTION = 'unidadesGestoras/buscarUnidadesGestoras';

export const buscarUnidadeGestoraAction = createAsyncThunk(NAME_ACTION, async (codigoIBGE: string): Promise<IUnidadeGestoraModelProps[]> => {
    const response = await Service.getNoAuth()
        .url(replaceIbge(UNIDADES_GESTORAS, codigoIBGE))
        .request();
    return response.data;
});

export const buscarUnidadeGestoraExtraReducers = (builder: ActionReducerMapBuilder<IInitialStateUnidadeGestora>) => {
    builder.addCase(buscarUnidadeGestoraAction.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(buscarUnidadeGestoraAction.fulfilled, (state, action) => {
        state.unidadeGestoras = action.payload;
        state.loading = false;
    });
    builder.addCase(buscarUnidadeGestoraAction.rejected, (state) => {
        state.unidadeGestoras = [];
        state.loading = false;
    });
};
