import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  View,
} from 'react-native';

class Screen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen1')}
          style={styles.touchable}>
          <Text>Go to Screen1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Screen2;


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 8,
  },
  text: {
    paddingBottom: 2,
    padding: 8,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 8,
    padding: 8,
    width: '95%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    padding: 8,
    width: '95%',
  },
});
