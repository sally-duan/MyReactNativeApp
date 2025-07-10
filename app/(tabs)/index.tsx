import { Image } from 'expo-image';
import { Platform, StyleSheet, Text } from 'react-native'; // ✅ Added Text here

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import TodoList from '@/src/components/TodoList';

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Press me here" onPress={() => console.log('Pressed!')} />
      
      <TodoList></TodoList>
    <SafeAreaView />
  </Layout>
);

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
        <StatusBar style="auto" />
      </ApplicationProvider>
    </>
  );
};


