import { MediumText, SmallText } from "@componentes/text";
import { ColsStyled } from "./styled";

interface Iprops {
    titulo: string | null;
    label: string | null;
    size?: 1 | 2 | 3;
}

const Cols = ({ label = '', titulo = '', size = 3 }: Iprops) => {
    return (
        <ColsStyled size={size}>
            <SmallText>{titulo}:</SmallText>
            <MediumText>{label}</MediumText>
        </ColsStyled>
    )
}

export default Cols;