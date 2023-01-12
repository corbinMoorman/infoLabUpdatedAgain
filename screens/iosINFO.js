import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';

var iosInfo = require('./ios.json');
export default class IOSINFO extends React.Component {
  renderItems = ({ item }) => {
    return (
      <View>
        <ImageBackground
          source={{
            uri: 'https://www.macobserver.com/imgs/tmo_articles/20141001iPhone6pair.jpg?x58429',
          }}
          style={{
            resizeMode: 'cover',
            width: '100',
            height: 200,
          }}>
          
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#189AB4',
            justifyContent: 'center',
            opacity:0.6
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
              marginTop: '10%',
              opacity:1
            }}>
            {item.interface}
          </Text>
        </View>

        <View style={{ marginTop: 10, backgroundColor: '#05445E' }}>
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

        <View style={{ marginTop: 10, backgroundColor: '#189AB4' }}>
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

        <View style={{ marginTop: 10, backgroundColor: '#05445E' }}>
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
            {item.encryption}
          </Text>
        </View>
        <View style={{ marginTop: 10, backgroundColor: '#05445E' }}>
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
            {item.faceID}
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
          data={iosInfo}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => {
            index.toString();
          }}
        />
      </View>
    );
  }
}
