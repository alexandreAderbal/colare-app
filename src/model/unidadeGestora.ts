

export interface IUnidadeGestoraModelProps {
    tipo: string | null;
    idUnidadeGestoraPai: null,
    nomePessoaJuridica: string | null;
    nome: string | null;
    cnpj: string | null;
    dataLeiCriacao: string | null;
    aprovacaoStatus: string | null;
    dataLeiExtincao: string | null;
    id: string | null;
    tipoCadastro: string | null;
    dataCadastro: string | null;
    razaoSocial: string | null;
    status: string | null;

}

class UnidadeGestoraModel {

    protected props: IUnidadeGestoraModelProps;

    private constructor(props: IUnidadeGestoraModelProps) {
        this.props = props;
    }

}

export default UnidadeGestoraModel;                              