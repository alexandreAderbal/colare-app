

export interface ILegislacaoModelProps {
    arquivoPrincipalNorma: string | null;
    municipio: string | null,
    anoNorma: string | null;
    dataEnvio: string | null;
    unidadeGestora: string | null;
    tipoNorma: string | null;
    detalhamentoNorma: string | null;
    unidadeGestoraId: string | null;
    representante: string | null;
    numeroNorma: string | null;
    ementa: string | null;
    idEnvioColare: string | null;
    situacaoEnvio: string | null;

}

class LegislacaoModel {

    protected props: ILegislacaoModelProps;

    private constructor(props: ILegislacaoModelProps) {
        this.props = props;
    }

}

export default LegislacaoModel;                              