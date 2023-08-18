

export interface IRepresentacaoModelProps {
    statusAprovacao: string | null;
    representante: null,
    numeroCPF: string | null;
    dataFinalRepresentacao: string | null;
    unidadeGestoraRepresentada: string | null;
    representacao: string | null;
    dataInicioRepresentacao: string | null;
    dataCadastro: string | null;
    idRepresentacao: string | null;

}

class RepresentacaoModel {

    protected props: IRepresentacaoModelProps;

    private constructor(props: IRepresentacaoModelProps) {
        this.props = props;
    }

}

export default RepresentacaoModel;                              