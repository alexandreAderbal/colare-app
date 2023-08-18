
import { buscarRepresentacaoAction } from '@store/thunk/buscarRepresentacoes';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { useEffect } from 'react';

export function useRepresentacao() {
    const dispatch = useAppDispatch();
    const { representacaos } = useAppSelector((state) => state.representacaoSlice);
    const { cidade } = useAppSelector((state) => state.cidadeSlice);

    const buscarRepresentacaos = () => {
        if (cidade?.codigoIBGE)
            dispatch(buscarRepresentacaoAction(cidade?.codigoIBGE));
    }

    useEffect(() => {
        if (representacaos.length === 0) buscarRepresentacaos();
    }, []);

    return { representacaos };
}
