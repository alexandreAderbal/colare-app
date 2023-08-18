import { IUnidadeGestoraModelProps } from "@model/unidadeGestora";
import { useUnidadeGestora } from "@hooks/useUnidadeGestora";
import { DefaultContainer, PageContainer } from "@componentes/containers";
import { CardUnidadeGestora } from "./styled";
import { Cols, Row } from "@componentes/grid";
import { TitlePage } from "@componentes/text";
import { Lista } from "@componentes/Lista";

const UnidadesGestoras = () => {

    const { unidadeGestoras } = useUnidadeGestora();

    const renderItem = (ug: IUnidadeGestoraModelProps) => {
        return (
            <DefaultContainer>
                <CardUnidadeGestora>
                    <Row >
                        <Cols label={`${ug.id} - ${ug.nome}`} titulo="Unidade gestora" />
                    </Row>
                    <Row >
                        <Cols label={ug.cnpj} titulo="CNPJ" />
                    </Row>
                    <Row >
                        <Cols label={ug.nomePessoaJuridica} titulo="Pessoa juridica" />
                    </Row>
                    <Row >
                        <Cols label={ug.dataCadastro} titulo="Data criação" size={1} />
                        <Cols label={ug.dataLeiCriacao} titulo="Data lei criação" size={1} />
                        <Cols label={ug.dataLeiExtincao} titulo="Data lei extinção" size={1} />
                    </Row>
                    <Row >
                        <Cols label={ug.tipo} titulo="Tipo" size={2} />
                        <Cols label={ug.tipoCadastro} titulo="Tipo Cadastro" size={1} />
                    </Row>
                    <Row >
                        <Cols label={ug.aprovacaoStatus} titulo="Aprovação status" size={2} />
                        <Cols label={ug.status} titulo="Status" size={1} />
                    </Row>
                </CardUnidadeGestora>
            </DefaultContainer>
        )
    }

    return (
        <PageContainer>
            <TitlePage>Unidades Gestoras</TitlePage>
            <Lista
                data={unidadeGestoras}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={({ id }) => id} />
        </PageContainer>
    )
}

export default UnidadesGestoras;