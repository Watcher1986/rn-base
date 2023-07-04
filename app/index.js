import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';

const Home = () => {
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [isLocation, setIsLocation] = useState(false);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };
  const handleFilter = () => {
    setIsFilter(!isFilter);
  };
  const handleSort = () => {
    setIsSort(!isSort);
  };
  const handleLocation = () => {
    setIsLocation(!isLocation);
  };

  const handleScreenHeaderBtn = (route) => {
    router.push(route);
  };

  const handleNearbyjobs = () => {
    router.push('nearbyjobs');
  };

  const handlePopularjobs = () => {
    router.push('popularjobs');
  };

  const handleWelcome = () => {
    router.push('welcome');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
