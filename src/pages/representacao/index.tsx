import { DefaultContainer, PageContainer } from "@componentes/containers";
import { IRepresentacaoModelProps } from "@model/representacao";
import { useRepresentacao } from "@hooks/useRepresentacao";
import { Text, TitlePage } from "@componentes/text"
import { Cols, Row } from "@componentes/grid";
import { CardRepresentacao } from "./styled";
import { Lista } from "@componentes/Lista";

const Representacao = () => {

    const { representacaos } = useRepresentacao();

    const renderItem = (repre: IRepresentacaoModelProps) => {
        return (
            <DefaultContainer>
                <CardRepresentacao>
                    <Row >
                        <Cols label={`${repre.idRepresentacao} - ${repre.representante}`} titulo="Nome" />
                    </Row>
                    <Row >
                        <Cols label={repre.unidadeGestoraRepresentada} titulo="Unidade gestora Representada" />
                    </Row>
                    <Row >
                        <Cols label={repre.representacao} titulo="Representação" />
                    </Row>
                    <Row >
                        <Cols label={repre.dataCadastro} titulo="Data Cadastro" size={1} />
                        <Cols label={repre.dataInicioRepresentacao} titulo="Data inicio" size={1} />
                        <Cols label={repre.dataFinalRepresentacao} titulo="Data final" size={1} />
                    </Row>
                    <Row >
                        <Cols label={repre.statusAprovacao} titulo="Status aprovação " size={2} />
                    </Row>
                </CardRepresentacao>
            </DefaultContainer>
        )
    }

    return (
        <PageContainer>
            <TitlePage>Representações</TitlePage>
            <Lista
                data={representacaos}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={({ idRepresentacao }) => idRepresentacao} />
        </PageContainer>
    )
}

export default Representacao;