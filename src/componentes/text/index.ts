import { styled } from "styled-components/native";

export const Text = styled.Text`
  font-size: 16px;
  font-family: 'Roboto';
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
`;

export const TitlePage = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: white;
  background-color: gray;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
`;

export const SubTitle = styled(Text)`
  font-weight: 400;
  font-size: 16px;

`;

export const SmallText = styled(Text)`
  font-size: 12px;
`;
export const MediumText = styled(Text)`
  font-size: 14px;
`;

export const ExtraSmallText = styled(Text)`
  font-size: 10px;
`;