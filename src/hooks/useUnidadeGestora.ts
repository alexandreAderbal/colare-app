
import { buscarUnidadeGestoraAction } from '@store/thunk/buscarUnidadesGestoras';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { useEffect } from 'react';

export function useUnidadeGestora() {
    const dispatch = useAppDispatch();
    const { unidadeGestoras } = useAppSelector((state) => state.unidadeGestoraSlice);
    const { cidade } = useAppSelector((state) => state.cidadeSlice);

    const buscarUnidadesGestoras = () => {
        if (cidade?.codigoIBGE)
            dispatch(buscarUnidadeGestoraAction(cidade?.codigoIBGE));
    }

    useEffect(() => {
        if (unidadeGestoras.length === 0) buscarUnidadesGestoras();
    }, []);

    return { unidadeGestoras };
}
