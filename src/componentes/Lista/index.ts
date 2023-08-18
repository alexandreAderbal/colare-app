import { FlatList, FlatListProps } from "react-native";
import { styled } from "styled-components/native";


export const Lista = styled(FlatList) <FlatListProps<any>>`
    background-color: ${(props: any) => props.primaryColor}; 
`;