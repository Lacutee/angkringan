import React, {useState} from 'react';
import {View, StyleSheet,FlatList,Image, TouchableOpacity, Alert, Modal, Text, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function HomeItem(){
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    name:"",
    harga:"",
    url:"",
    key:1
  });
  const [items, setItems] = useState([
    {name: 'Nasi kucing',harga: '6000', url:'https://cdn-2.tstatic.net/solo/foto/bank/images/nasi-kucing-sajian-dari-angkringan.jpg', key: '1'},
    {name: 'Tahu bacem',harga: '2000', url:'https://cdn0-production-images-kly.akamaized.net/Cu0pqXs3OBJJJdZXk67LWcMBFaM=/0x50:1999x1177/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3328117/original/040143100_1608345140-bacem.jpg', key: '2'},
    {name: 'Tempe bacem',harga: '2000', url:'https://cdn.idntimes.com/content-images/post/20190924/45603441-120135938994030-151240224785788522-n-d65f7d1bf884808e953d1ada94976823_600x400.jpg', key: '3'},
    {name: 'Sat telur puyuh',harga: '3000', url:'https://img-global.cpcdn.com/recipes/61c4ee8ae9ebcdd4/751x532cq70/172-sate-telur-puyuh-ala-angkringan-foto-resep-utama.jpg', key: '4'},
    {name: 'Capcay',harga: '8000', url:'https://statics.indozone.news/content/2021/01/27/Z8seDa7/resep-capcay-goreng-jawa-seenak-buatan-angkringan80_700.jpg', key: '3'},
  ]);

return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalCover}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <MaterialIcons name='cancel' color="#686868" size={40}/>
              </TouchableOpacity>
            </View>
            <View style={styles.modalDesc}>
                <View>

                </View>
                <View>
                  
                </View>
            </View>

          </View>
        </View>
      </Modal>
        <FlatList
            numColumns={2}
            keyExtractor={(item) => item.key}
            data={items}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => {setModalVisible(true); setModalData({
                  name: item.name,
                  url:item.url,
                  harga:item.harga,
                  key:item.key
                })}}>
                <View style={styles.item}>
                  <View style={{flex:3, overflow:"hidden"}}>
                    <Image
                    style={styles.tinyLogo}
                    source={{uri:item.url}}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subtitle}>Rp. {item.harga}</Text>
                  </View>
                </View>
                </TouchableOpacity>
            )}
        />

    </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding:0,
  margin: 0,
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: "column"
},
item: {
  // flex:1,
  flexDirection: "column",
  backgroundColor: 'purple',
  // padding: 50,
  margin:20,
  height: 120,
  width: 120,
  borderRadius: 20,
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  fontSize: 10,
  elevation: 10,
  overflow:"hidden",

},
title: {
  paddingLeft:10,
  fontSize: 11,
  color: "white",
  fontWeight:"bold"
},
subtitle:{
  paddingLeft:10,
  fontSize: 9,
  color: "white",
},
tinyLogo: {
  width: 120,
  height:120,

},

centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22,
  width: "100%",
  height: "100%"
},
modalView: {
  display:"flex",
  flexDirection: "col",

  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  width:"90%",
  height:"80%",
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
modalCover:{
  height:"30%",
  width:"100%",
  backgroundColor:'black'
},
modalDesc:{
  height: "70%",
  width:"100%",
  backgroundColor: 'red'
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}
});
