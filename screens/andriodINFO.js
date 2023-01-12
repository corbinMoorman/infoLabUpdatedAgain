import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';

var androidInfo = require('./android.json');
export default class AndroidINFO extends React.Component {
  renderItems = ({ item }) => {
    return (
      <View>
        <ImageBackground
          source={require('../assets/androidimg.jpg')}
          style={{
            resizeMode: 'cover',
            width: '100',
            height: 200,
          }}>
          <View
            style={{
              marginTop: 10,
              backgroundColor: '#189AB4',
              alignSelf: 'center',
              opacity: 0.3,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                // alignSelf: 'center',
                marginLeft: 38,
                marginRight: 38,
                alignSelf: 'center',
                marginTop: '100%',
                opacity: 1,
              }}>
              {item.interface}
            </Text>
          </View>
          <View
            style={{ marginTop: 10, backgroundColor: '#05445E', opacity: 0.3 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                // alignSelf: 'center',
                marginLeft: 38,
                marginRight: 38,
                alignSelf: 'center',
                //marginTop: 40,
              }}>
              {item.homeScreen}
            </Text>
          </View>

          <View
            style={{ marginTop: 10, backgroundColor: '#189AB4', opacity: 0.3 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                // alignSelf: 'center',
                marginLeft: 38,
                marginRight: 38,
                alignSelf: 'center',
              }}>
              {item.applications}
            </Text>
          </View>

          <View
            style={{ marginTop: 10, backgroundColor: '#05445E', opacity: 0.3 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                // alignSelf: 'center',
                marginLeft: 38,
                marginRight: 38,
                alignSelf: 'center',
                // marginTop: 40,
              }}>
              {item.storage}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#05445E' }}>
        <FlatList
          data={androidInfo}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => {
            index.toString();
          }}
        />
      </View>
    );
  }
}
