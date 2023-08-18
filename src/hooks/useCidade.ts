
import { buscarCidadesAction } from '@store/thunk/buscarCidades';
import { atualizaCidadeAction } from '@store/slice/cidadeSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { ICidadeModelProps } from '@model/cidade';

export function useCidade() {
  const dispatch = useAppDispatch();
  const { cidade, cidades } = useAppSelector((state) => state.cidadeSlice);

  const buscarCidades = () => {
    dispatch(buscarCidadesAction())
  }

  const atualizaCidade = (cidade: ICidadeModelProps) => {
    dispatch(atualizaCidadeAction(cidade))
  }

  return { cidade, cidades, buscarCidades, atualizaCidade };
}
