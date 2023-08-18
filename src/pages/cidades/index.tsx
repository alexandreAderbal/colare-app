import { DefaultContainer, PageContainer } from "@componentes/containers";
import InputTextIcon from "@componentes/inputs/InputTextIcon";
import { ICidadeModelProps } from "@model/cidade";
import { TouchableOpacity } from "react-native"
import { Search } from "@componentes/icons";
import { Lista } from "@componentes/Lista";
import { Title } from "@componentes/text";
import { useHome } from "@hooks/useHome";
import { CardCidade } from "./styled";

const CidadesPage = () => {
    const { setFiltro, filtrarCidades, selecionaCidade, cidadeResult } = useHome();

    const renderItem = (cidade: ICidadeModelProps) => {
        return (
            <TouchableOpacity onPress={() => selecionaCidade(cidade)}>
                <DefaultContainer>
                    <CardCidade>
                        <Title>{`${cidade.codigoIBGE} - ${cidade.municipio}`}</Title>
                    </CardCidade>
                </DefaultContainer>
            </TouchableOpacity>
        )
    }

    const iconSearch = () => {
        return (
            <TouchableOpacity onPress={() => filtrarCidades()}>
                {/* @ts-ignore */}
                <Search />
            </TouchableOpacity>
        )
    }

    return (
        <PageContainer>
            <InputTextIcon placeholder="Digite para pesquisar" onChangeText={setFiltro} iconRight={iconSearch()} />
            <Lista
                data={cidadeResult}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={({ codigoIBGE }) => codigoIBGE} />
        </PageContainer>
    )
}

export default CidadesPage;