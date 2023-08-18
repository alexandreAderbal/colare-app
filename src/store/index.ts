import unidadeGestoraSlice from "@store/slice/unidadeGestora";
import representacaoSlice from "@store/slice/representacao";
import legislacaoSlice from "@store/slice/legislacao";
import cidadeSlice from "@store/slice/cidadeSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        unidadeGestoraSlice,
        representacaoSlice,
        legislacaoSlice,
        cidadeSlice,
    },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;