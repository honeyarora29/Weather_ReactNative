/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React,{useEffect,useState} from 'react';
import type {Node} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import config from './config';



async function storeUserSession() {
    try {
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({
                age : 21,
                token : "ACCESS_TOKEN",
                username : "emeraldsanto",
                languages : ["fr", "en", "de"]
            })
        );

        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
    }
}
const age = ()=>{
const [players, setPlayers] = useState([])
useEffect(() => {
async function retrieveUserSession() {

    try {
        const session = await EncryptedStorage.getItem("user_session");

        if (session !== undefined) {
            // Congrats! You've just retrieved your first value!
         setPlayers(JSON.parse(session).age);
        }
    } catch (error) {
        // There was an error on the native side
    }
}
retrieveUserSession()},[])

return players;
}


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

//storeUserSession();
const value = age();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={config.API_URL}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then hello back to see your edits.
          </Section>

          <Section title={value}>

            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
