import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, TouchableWithoutFeedback, View, Keyboard, StatusBar, Text } from 'react-native';
import * as S from '../../pages/Home/styles';
import { api } from '../../services';
import ListChampion from '../../components/ListChampion';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [champions, setChampions] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getChampions = useCallback(async () => {
    try {
      const response = await api.get('cdn/13.8.1/data/pt_BR/champion.json');
      const championsData = response.data.data;
      const championsList = Object.values(championsData);
      setChampions(championsList);
    } catch (error) {
      console.error('Error fetching champions: ', error);
    }
  }, []);

  useEffect(() => {
    getChampions();
  }, [getChampions]);

  const handleSearch = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const filteredData = useMemo(() => {
    return champions.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [champions, searchText]);

  const shuffledData = useMemo(() => {
    return filteredData.sort(() => 0.5 - Math.random());
  }, [filteredData]);

  return (
    <S.Container>
      <StatusBar barStyle='light-content' backgroundColor='#051038' translucent={false} />
      <S.Title>Pesquisar</S.Title>
      <S.ContainerInput>
        <Icon name='search-outline' size={25} color='#ffffff' />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <S.Input
              onChangeText={handleSearch}
              value={searchText}
              onPress={Keyboard.dismiss}
              underlineColorAndroid='transparent'
              selectionColor='#4bd1ef'
              cursorColor='#fff'
            />
          </View>
        </TouchableWithoutFeedback>
      </S.ContainerInput>
      {filteredData.length === 0 ? (
        <S.TextUnd>Nenhum campeão encontrado :(</S.TextUnd>
      ) : (
        <FlatList
          data={shuffledData.slice(0, 10)}
          keyExtractor={item => String(item.key)}
          renderItem={({ item }) => (
            <ListChampion item={item} />
          )}
        />
      )}
    </S.Container>
  );
};

export default Home;


