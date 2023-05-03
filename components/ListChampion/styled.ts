import styled from "styled-components/native";

export const ContainerCard = styled.View`
  flex-direction: row;
  margin-bottom: 8%;
  gap: 15px;
  align-items: center;
`;

export const CardImage = styled.Image`
  border-radius: 15px;
`;

export const CardName = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  opacity: 0.5;
  margin-bottom: 5px;
`;

export const CardTag = styled.Text`
  color: #4bd1ef;
  font-size: 14px;
  margin-bottom: 5px;
  margin-right: 5%;
`;

export const CardFlex = styled.View`
  flex-direction: row;
`;
