import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.imagemcss}
        source={require('/assets/logoUvv.png')}
        />
      </View>
      <View style={styles.container}>
      <Text>
          Digite seu Email
        </Text>
        <TextInput
        
        />
        <Text>
          Digite sua senha
        </Text>
        <TextInput
        
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    padding: '5rem' ,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'flex-start',
  },
  imagemcss: {
    position: 'initial' ,
    width: 100,
    height: 100,
  }
});


