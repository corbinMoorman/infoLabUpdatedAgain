import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground
          style={{ flex: 2 }}
          source={{
            uri: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1081560/retina_1708x683_cover-design-psychology-neuroscience-of-ux-19d2229e978c099c6083f5ba40449aea.png',
          }}>
          <TouchableOpacity
            style={[Styles.andriodButtonStyle, { marginTop: 200 }]}
            onPress={() => {
              this.props.navigation.navigate('Android');
            }}>
            <Text style={Styles.andriodBtnText}> Andriod Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.IOSButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('IOS');
            }}>
            <Text style={Styles.IOSBtnText}>IOS Info</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  andriodButtonStyle: {
    alignSelf: 'center',
    backgroundColor: '#1C9B8E',
    width: '75%',
    height: '10%',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 15,
  },
  andriodBtnText: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
  IOSButtonStyle: {
    alignSelf: 'center',
    backgroundColor: '#1C9B8E',
    width: '75%',
    height: '10%',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 30,
  },
  IOSBtnText: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
});
