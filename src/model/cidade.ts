export interface ICidadeModelProps {
    codigoIBGE: string;
    municipio: string;
}

class CidadeModel {

    protected props: ICidadeModelProps;

    private constructor(props: ICidadeModelProps) {
        this.props = props;
    }

    public static create(props: ICidadeModelProps): CidadeModel {
        return new CidadeModel(props);
    }

    public static convertList(list: ICidadeModelProps[]): ICidadeModelProps[] {
        return list.map(
            ({ codigoIBGE, municipio }) => CidadeModel.Builder().codigoIBGE(codigoIBGE).municipio(municipio).build()
        );
    }

    public static Builder(): CidadeModel {
        return new CidadeModel({
            codigoIBGE: "",
            municipio: ""
        });
    }

    codigoIBGE(codigoIBGE: string): CidadeModel {
        this.props.codigoIBGE = codigoIBGE;
        return this;
    }

    municipio(municipio: string): CidadeModel {
        this.props.municipio = municipio;
        return this;
    }

    build(): ICidadeModelProps {
        return this.props;
    }



}

export default CidadeModel;