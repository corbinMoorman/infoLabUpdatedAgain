import *as React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

s22info = require("./sGS22.json")
export default class SamGalaxyS22Screen extends React.Component{
    renderItems = ({item}) => {
        return(
            <View>
                <View
          style={{
            marginTop: 10,
            backgroundColor: '#189AB4',
            justifyContent: 'center',
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
            }}>
            {item.chipsets}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#189AB4',
            justifyContent: 'center',
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
            }}>
            {item.display}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#189AB4',
            justifyContent: 'center',
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
            }}>
            {item.storage}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#189AB4',
            justifyContent: 'center',
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
            }}>
            {item.batteries}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#189AB4',
            justifyContent: 'center',
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
            }}>
            {item.connectivity}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#189AB4',
            justifyContent: 'center',
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
            }}>
            {item.s_pen}
          </Text>
        </View>
            </View>
        )
    }
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#05445E' }}>
        <FlatList
          data={s22info}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          style={{
            width: '90%',
            backgroundColor: '#189AB4',
            height: '100%',
            alignSelf: 'center',
            borderRadius: 30,
            //marginTop: 25,
            borderColor: '#53DFD1',
            borderWidth: 4,
            justifyContent: 'center',
          }}
        />
      </View>
        )
    }
}