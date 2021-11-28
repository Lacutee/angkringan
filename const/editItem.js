import React, {useState} from 'react';
import {View, StyleSheet,FlatList,Image, TouchableOpacity, Alert, Modal, Text, Pressable } from 'react-native';

export default function EditItem(){
    const [items, setItems] = useState([
        {name: 'Nasi kucing',harga: '6000', url:'https://cdn-2.tstatic.net/solo/foto/bank/images/nasi-kucing-sajian-dari-angkringan.jpg', key: '1'},
        {name: 'Tahu bacem',harga: '2000', url:'https://cdn0-production-images-kly.akamaized.net/Cu0pqXs3OBJJJdZXk67LWcMBFaM=/0x50:1999x1177/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3328117/original/040143100_1608345140-bacem.jpg', key: '2'},
        {name: 'Tempe bacem',harga: '2000', url:'https://cdn.idntimes.com/content-images/post/20190924/45603441-120135938994030-151240224785788522-n-d65f7d1bf884808e953d1ada94976823_600x400.jpg', key: '3'},
        {name: 'Sat telur puyuh',harga: '3000', url:'https://img-global.cpcdn.com/recipes/61c4ee8ae9ebcdd4/751x532cq70/172-sate-telur-puyuh-ala-angkringan-foto-resep-utama.jpg', key: '4'},
        {name: 'Capcay',harga: '8000', url:'https://statics.indozone.news/content/2021/01/27/Z8seDa7/resep-capcay-goreng-jawa-seenak-buatan-angkringan80_700.jpg', key: '3'},
      ]);
    return(
        <View>
        <FlatList
            numColumns={1}
            keyExtractor={(item) => item.key}
            data={items}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => {setModalVisible(true); setModalData({
                  name: item.name,
                  url:item.url,
                  harga:item.harga,
                  key:item.key
                })}}>
                <View>
                    <Text>BBBBBBBB</Text>
                </View>
                </TouchableOpacity>
            )}
        />
                
        </View>
    )
}
