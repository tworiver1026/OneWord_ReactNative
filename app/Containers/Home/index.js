import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Carousel from 'react-native-looped-carousel';
// import Carousel from 'react-native-carousel';

//const image
const mobileExplore = require('../../Assets/images/iphone-jet-black1.png');
const mobileJoin = require('../../Assets/images/iphone-jet-black2.png');
const mobileAdd = require('../../Assets/images/iphone-jet-black3.png');
const { width, height } = Dimensions.get('window');
export default class ClientInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
      <Carousel
        autoplay = {false}
        style={this.state.size}
        indicatorOffset = {400}
        width = {width}
        bullets = {true}
        

          //delay={2000}
          //autoplay
          //pageInfo
          //onAnimateNextPage={(p) => console.log(p)}
          //animate = {false}
          //hideIndicators = {false}
          //indicatorColor = '#ffffff'
          //inactiveIndicatorColor = '#aaa'
          //style = {styles.Caroussel}
          //indicatorOffset = {400}
          //indicatorSize = {40}
        loop = {false}
      >
        {/* Explore */}
        <View style={styles.containerExplore}>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>Explore Stories</Text>
            <View style={styles.contentContainer}>
              <Text style={styles.contentText}>Nam dapibus nisl vitae elit fringilla rutrum. </Text>
              <Text style={styles.contentText}>Aenean sollicitudin, erat a elementum rutrum, </Text>
              <Text style={styles.contentText}>neque sem.</Text>
            </View>
          </View>
        
          <ScrollView >
            <Image source={ mobileExplore } resizeMode="contain" />
          </ScrollView>
        </View>
        {/* Join */}
        <View style={styles.containerJoin}>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>Join or Start a Story</Text>
            <View style={styles.contentContainer}>
              <Text style={styles.contentText}>Aenean sollicitudin, erat a elementum rutrum,</Text>
              <Text style={styles.contentText}>neque sem. Nam dapibus nisl vitae elit </Text>
              <Text style={styles.contentText}>fringilla rutrum.</Text>
            </View>
          </View>
        
          <ScrollView >
            <Image source={ mobileJoin } resizeMode="contain" />
          </ScrollView>
        </View>
        {/* Add */}
        <View style={styles.containerAdd}>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>Add a Word to your Story!</Text>
            <View style={styles.contentContainer}>
              <Text style={styles.contentText}>Nam dapibus nisl vitae elit fringilla rutrum.</Text>
              <Text style={styles.contentText}>Aenean sollicitudin, erat a elementum rutrum,</Text>
              <Text style={styles.contentText}>neque sem.</Text>
            </View>
          </View>
        
          <ScrollView >
            <Image source={ mobileAdd } resizeMode="contain" />
          </ScrollView>
        </View>
      </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7CA42',
    alignItems: 'center',
  },
  containerExplore:{
    flex: 1,
    backgroundColor: '#F7CA42',
    alignItems: 'center',
  },
  containerJoin:{
    flex: 1,
    backgroundColor: '#FF9244',
    alignItems: 'center',
  },
  containerAdd:{
    flex: 1,
    backgroundColor: '#FF7878',
    alignItems: 'center',
  },
  topContainer: {
    marginTop : 100,
    marginBottom : 70
  },
  titleText:{
    //flexDirection: 'row',
    //flex : 1,
    //justifyContent : 'center',
    textAlign : 'center',
    color: '#fff',
    fontSize : 25,
    paddingBottom : 15,
    fontWeight : 'bold'
    
    
  },
  contentContainer:{
    marginHorizontal : 10
  },
  contentText:{
    color: '#fff',
    textAlign : 'center',
    fontSize : 17,
    alignItems : 'center',
    justifyContent: 'center',
  },
  Caroussel:{
    marginVertical : 100,
  }
});