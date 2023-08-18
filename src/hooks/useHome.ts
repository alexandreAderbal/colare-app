
import { ICidadeModelProps } from '@model/cidade';
import { useEffect, useState } from 'react';
import { useCidade } from './useCidade';
import { useNavigation } from '@react-navigation/native';

export function useHome() {
  const [cidadeResult, setCidadeResult] = useState<ICidadeModelProps[]>([]);
  const { buscarCidades, cidades, atualizaCidade } = useCidade();
  const [filtro, setFiltro] = useState("");
  const { navigate } = useNavigation();

  useEffect(() => {
    if (cidades.length === 0) buscarCidades();
  }, []);

  useEffect(() => {
    if (filtro.length > 0) filtrarCidades();
    else setCidadeResult(cidades);
  }, [cidades])

  const filtrarCidades = () => {
    const f = filtro.toLowerCase();
    setCidadeResult(
      cidades.filter(
        c => c.codigoIBGE.toLowerCase().includes(f) || c.municipio.toLowerCase().includes(f)
      )
    );
  }

  const selecionaCidade = (cidade: ICidadeModelProps) => {
    atualizaCidade(cidade);
    navigate("Home" as never);
  }

  return { setFiltro, filtrarCidades, selecionaCidade, cidadeResult };
}
