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
        <TextInput style={{backgroundColor: '#89CFF0'}}
        
        />
        <Text>
          Digite sua senha
        </Text>
        <TextInput style={{backgroundColor: '#89CFF0'}}
        
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
    marginBottom: 80,
  },
  logo: {
    marginTop: 80,
    padding: '5rem' ,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'flex-start',
  },
  imagemcss: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 10 ,
    position: 'initial' ,
    width: 70,
    height: 70,
  }
});
