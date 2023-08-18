import { ContainerInputIcon, ContainerLeftIcon, ContainerRightIcon, Input } from "./styled";
import { TextInputProps } from "react-native"
import { ReactElement } from "react"

interface IProps extends TextInputProps {
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
}

const InputTextIcon = (props: IProps) => {

    return (
        <ContainerInputIcon>
            <ContainerLeftIcon>{props.iconLeft}</ContainerLeftIcon>
            <Input {...props} />
            <ContainerRightIcon>{props.iconRight}</ContainerRightIcon>
        </ContainerInputIcon>
    )

}

export default InputTextIcon;