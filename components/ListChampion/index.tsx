import React from 'react';
import { View, Text, Image } from 'react-native';
import * as S from './styled';

const ListChampion = ({ item }) => {
  const imageName = `${item.name}_0.jpg`;
  const imagePath = `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${imageName}`;

  return (
    <S.ContainerCard>
      <S.CardImage source={{ uri: imagePath, width: 100, height: 100 }} />
      <View>
        <S.CardName>{item.name}</S.CardName>
        <S.CardTitle>{item.title}</S.CardTitle>
        <S.CardFlex>
          {item.tags.map((tagsName, index) => (
            <S.CardTag key={index}>● {tagsName}</S.CardTag>
          ))}
        </S.CardFlex>
      </View>
    </S.ContainerCard>
  );
};

export default ListChampion;
