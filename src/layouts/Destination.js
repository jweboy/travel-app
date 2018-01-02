import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  WebView,
} from 'react-native'

class Destination extends Component {
  static navigationOptions = {
    title: '目的地'
  }
  // onShouldStartLoadWithRequest = (event) => {
  //   // Implement any custom loading logic here, don't forget to return!
  //   return true;
  // };
  render() {
    return (
      <View style={styles.container}>
        <WebView
          // onLoad={(e) => console.log('onLoad')}
          // onLoadEnd={(e) => console.log('onLoadEnd')}
          // onLoadStart={(e) => console.log('onLoadStart')}
          // renderError={() => {
          //   console.log('renderError')
          //   return <View><Text>renderError回调了，出现错误</Text></View>
          // }}
          // renderLoading={() => {
          //   return <View><Text>这是自定义Loading...</Text></View>
          // }}
          // onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          // domStorageEnabled={true}
          // javaScriptEnabled={true}
          // automaticallyAdjustContentInsets={false}
          // startInLoadingState={true}
          source={{ uri: 'http://h5.m.taobao.com/trip/home/index.html?_projVer=0.1.122' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default Destination