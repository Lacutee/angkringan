import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView,FlatList,Image, TouchableOpacity } from 'react-native';

export default function HomeItem(){
const [items, setItems] = useState([
  {name: 'Nasi kucing',harga: '6000', url:'https://cdn-2.tstatic.net/solo/foto/bank/images/nasi-kucing-sajian-dari-angkringan.jpg', key: '1'},
  {name: 'Tahu bacem',harga: '2000', url:'https://cdn0-production-images-kly.akamaized.net/Cu0pqXs3OBJJJdZXk67LWcMBFaM=/0x50:1999x1177/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3328117/original/040143100_1608345140-bacem.jpg', key: '2'},
  {name: 'Tempe bacem',harga: '2000', url:'https://cdn.idntimes.com/content-images/post/20190924/45603441-120135938994030-151240224785788522-n-d65f7d1bf884808e953d1ada94976823_600x400.jpg', key: '3'},
  {name: 'Sat telur puyuh',harga: '3000', url:'https://img-global.cpcdn.com/recipes/61c4ee8ae9ebcdd4/751x532cq70/172-sate-telur-puyuh-ala-angkringan-foto-resep-utama.jpg', key: '4'},
  {name: 'Capcay',harga: '8000', url:'https://statics.indozone.news/content/2021/01/27/Z8seDa7/resep-capcay-goreng-jawa-seenak-buatan-angkringan80_700.jpg', key: '3'},
]);

return (
    <View style={styles.container}>

        <FlatList
            numColumns={2}
            keyExtractor={(item) => item.key}
            data={items}
            renderItem={({item}) => (
              <TouchableOpacity>
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
});
