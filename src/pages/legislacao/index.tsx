import { DefaultContainer, PageContainer } from "@componentes/containers";
import { ILegislacaoModelProps } from "@model/legislacao";
import { useLegislacao } from "@hooks/useLegislacao";
import { TouchableOpacity } from "react-native";
import { Cols, Row } from "@componentes/grid";
import { TitlePage } from "@componentes/text";
import { Lista } from "@componentes/Lista";
import { CardLegislacao } from "./styled";

const Legislacao = () => {

    const { legislacoes, downloadLegislacao } = useLegislacao()

    const renderItem = (lei: ILegislacaoModelProps) => {
        return (
            <TouchableOpacity onPress={() => downloadLegislacao(lei)}>
                <DefaultContainer>
                    <CardLegislacao>
                        <Row >
                            <Cols label={`${lei.numeroNorma}`} titulo="Numero" size={1} />
                            <Cols label={`${lei.anoNorma}`} titulo="Ano" size={1} />
                            <Cols label={`${lei.tipoNorma}`} titulo="Tipo" size={1} />
                        </Row>
                        <Row >
                            <Cols label={lei.detalhamentoNorma} titulo="Detalhamento" />
                        </Row>
                        <Row >
                            <Cols label={lei.ementa} titulo="Ementa" />
                        </Row>
                        <Row >
                            <Cols label={lei.representante} titulo="Representante" />
                        </Row>
                        <Row >
                            <Cols label={`${lei.unidadeGestoraId} - ${lei.unidadeGestora}`} titulo="Unidade gestora" />
                        </Row>
                        <Row >
                            <Cols label={lei.idEnvioColare} titulo="Codigo envio" size={1} />
                            <Cols label={lei.situacaoEnvio} titulo="Status Envio" size={1} />
                            <Cols label={lei.dataEnvio} titulo="Data Envio" size={1} />
                        </Row>
                    </CardLegislacao>
                </DefaultContainer>
            </TouchableOpacity>
        )
    }


    return (
        <PageContainer>
            <TitlePage>Legislações</TitlePage>
            <Lista
                data={legislacoes}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={({ idEnvioColare }) => idEnvioColare} />
        </PageContainer>
    )
}

export default Legislacao;