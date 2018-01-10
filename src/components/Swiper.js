// import React, { Component } from 'react'
// import { View, Text, StyleSheet } from 'react-native'
// import Swiper from 'react-native-swiper'

// // https://github.com/leecade/react-native-swiper/issues/426

// class OwnSwiper extends Component {
//   render() {
//     return (
//       <Swiper
//         height={200}
//         dot={<Dot />}
//       // paginationStyle={{ position: 'absolute', top: -140 }}
//       >
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>
//       </Swiper>
//     )
//   }
// }

// const Dot = (props) => (
//   <View style={[styles.dot, (props.active && styles.active)]} />
// );

// const styles = StyleSheet.create({
//   swiper: {
//     height: 200,
//     // overflow: 'hidden'
//   },
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB',
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5',
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   dot: {
//     width: 11,
//     height: 11,
//     borderRadius: 6,
//     margin: 5,
//     backgroundColor: 'rgba(246, 246, 246, .2)'
//   },
//   active: {
//     backgroundColor: 'rgba(246, 246, 246, .7)'
//   }
// })

// export default OwnSwiper