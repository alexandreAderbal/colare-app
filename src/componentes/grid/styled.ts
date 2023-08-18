import { styled } from "styled-components/native";

interface IColsProps {
    size: 1 | 2 | 3
}

export const ColsStyled = styled.View<IColsProps>`
    flex-direction: column;
    margin-bottom: 4px;
    width: ${({ size }: IColsProps) => 31 * size}%;
`

export const Row = styled.View`
    flex-direction: row;
`