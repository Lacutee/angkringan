import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, FlatList,Image, TouchableOpacity, Alert, Modal, Text, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function HistItem(){

    const [items, setItems] = useState([]);

    const getDataAPI = async() =>{
        const api = "https://61a32ae6014e1900176deaec.mockapi.io/menu/";
        const res = await fetch(api);
        // console.log(res)
        const data = await res.json();
        setItems(data);
        console.log(items);
    }

    useEffect(()=>{
        getDataAPI();
    },[])
    return(
        <View style={{
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flex: 1
        }}>
            <View style={{
                backgroundColor:'#3A3A3A',
                width:'100%',
                height:'30%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:10,
            }}>
                <Text style={{
                    fontFamily:'Segoe UI',
                    fontSize:50,
                    fontWeight:'700',
                    color:'#FFFFFF'
                }}>RP 300.000</Text>
                <View style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        color:'#42FF00',
                        fontWeight:'200'
                    }}>+21.000</Text>
                </View>
            </View>
            <View style={{
                display:'flex',
                justifyContent:'flex-start',
                alignItems: 'flex-end',
                marginRight: 30,
                paddingVertical:10,
                width:'100%'
            }}>
                <select style={{
                    width:90,
                    height:30,
                    borderRadius:20,
                    
                }}>
                    <option value="Hari">Hari</option>
                    <option value="Minggu">Minggu</option>
                    <option value="Bulan">Bulan</option>
                </select>
            </View>
            <FlatList
                style={{
                    height:'70%',
                    paddingVertical:10,
                }}
                numColumns={1}
                keyExtractor={(item) => item.key}
                data={items}
                renderItem={({item}) => (
                    <View style={{
                        backgroundColor: '#6D6D6D',
                        width: 340,
                        height: 60,
                        borderRadius: 10,
                        marginVertical:5,
                        display:'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                        flexDirection:'row',
                        elevation:20
                        
                    }}>
                        <View style={{
                            width:'80%'
                        }}>
                            <Text style={{
                                paddingLeft:10,
                                paddingBottom:3,
                                fontSize: 22,
                                color: '#FFD600'
                            }}>{item.nama}</Text>
                            <Text style={{
                                paddingLeft:10,
                                fontSize: 10,
                                color: '#FFFFFF'
                            }}>Harga : Rp.{item.harga}</Text>
                        </View>
                        <View style={{
                            width:'20%',
                            display:'flex',
                            justifyContent:'center',
                            alignItems: 'center',
                            flexDirection:'row'
                        }}>
                            <TouchableOpacity>
                                <MaterialIcons name='edit' size={25} color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialIcons name='delete' size={25} color='white' style={{paddingHorizontal:6}}/>
                            </TouchableOpacity>
                        </View>
                </View>
            )}
        />
                
        </View>
    )
}
