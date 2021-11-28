import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, FlatList,Image, TouchableOpacity, Alert, Modal, Text, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useForm } from 'react-hook-form'

export default function EditItem(){
    const { register, handleSubmit } = useForm();
    const [items, setItems] = useState([]);
   
    const onSubmit = (data)=>{
        console.log(data);
        const newData = {nama: modalData.name, jenis: modalData.jenis, ...data}
        postDataAPI(newData);
    
      }
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({
      name:"",
      harga:"",
      cover:"",
      key:1,
      jenis: "",
    });

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
              <Image
                style={styles.coverIMG}
                source={modalData.cover}
              />
              <View style={{
                position:'absolute',
                left:0,
                top:0,
              }}>
                <TouchableOpacity style={{

                }}onPress={() => setModalVisible(!modalVisible)}>
                  <MaterialIcons  name='cancel' color="#686868" size={40}/>
                </TouchableOpacity>
              </View>  
            </View>
            <View style={styles.modalDesc}>
                    <View style={styles.radioCon}>
                        <Text style={styles.fontForm}>{modalData.name}</Text>
                      <View style={styles.valueRadioCon}>
                        <Text style={{
                            fontSize:15,
                            fontWeight:'400',
                            color: '#FFFFFF',
                        }}>{modalData.harga}</Text>
                      </View>
                    </View>
                    <View style={styles.radioCon}>
                      <Text style={styles.fontForm}>Pelanggan</Text>
                      <View style={styles.valueRadioCon}>
                      </View>
                    </View>
           </View>

          </View>
        </View>
      </Modal>
        <FlatList
            style={{
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
                        width:'68%'
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
                        width:'32%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems: 'center',
                        flexDirection:'row'
                    }}>
                        <TouchableOpacity
                            onPress={()=>{
                                    setModalVisible(true); 
                            }}
                        >
                            <MaterialIcons name='visibility' size={22} color='white' style={{paddingHorizontal:3}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name='edit' size={22} color='white'/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name='delete' size={22} color='white' style={{paddingHorizontal:3}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
        <View style={{
            position:'absolute',
            bottom:30,
            right:30
        }}>
            <TouchableOpacity>
                <MaterialIcons name='add-circle' size={60} color='#FA00C0'/>
            </TouchableOpacity>
        </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: "100%",
        height: "100%",
        overflow: 'hidden',
        borderRadius: 10 ,
      
      },
      modalView: {
        display:"flex",
        flexDirection: "column",
        overflow: 'hidden',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width:"95%",
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
        overflow:"hidden",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      modalDesc:{
        height: "70%",
        width:"100%",
        backgroundColor: '#6D6D6D',
        display: 'flex',
        borderBottomStartRadius:10,
        borderBottomEndRadius: 10,
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
      },
      
      
      radioCon:{
        marginHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 10
      },
      valueRadioCon:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width:'75%'
      },
      fontForm:{
        fontSize:15,
        fontWeight:'400',
        color: '#FFFFFF',
        width:'25%'
      },
      formik:{
        display:'flex',
        flex:1,
      },
      coverIMG:{
        height:'100%',
        width:'100%'
      
      },
      exitBTN:{
        position: 'absolute',
      
      }
})