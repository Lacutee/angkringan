import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form'
import {View, StyleSheet,FlatList,Image, TouchableOpacity, Alert, Modal, Text, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import style from '../styles/globalStyle.css'


export default function HomeItem(){
  const { register, handleSubmit } = useForm();

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
    // console.log(data);
  }
  const postDataAPI = (dataComming) =>{
    const api = "http://ec2-3-145-66-178.us-east-2.compute.amazonaws.com:3001/hist/";
    fetch(api,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataComming)
    }).then(()=>{console.log('s')}).catch(err=>{console.log(err)})
    // console.log(res)
    console.log(dataComming);
  }

  useEffect(()=>getDataAPI(),[]);

  const [items, setItems] = useState([]);

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
                        <input {...register("userName")} type="text"/>
                      </View>
                    </View>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <View style={styles.formik} >
                    <View style={styles.radioCon}>
                      <Text style={styles.fontForm}>Suhu</Text>
                      <View style={styles.valueRadioCon}>
                        <label className="suhu">
                          <input {...register("suhu")} type="radio" value="Panas"/>
                          <Text style={styles.fontForm}>Panas</Text>  
                        </label>
                        <label className="suhu">
                          <input {...register("suhu")} type="radio" value="Dingin"/>
                          <Text style={styles.fontForm}>Dingin</Text>
                        </label>
                      </View>
                    </View>
                    <View style={styles.radioCon}>
                      <Text style={styles.fontForm}>Rasa</Text>
                      <View style={styles.valueRadioCon}>
                        <label className="rasa">
                          <input {...register("rasa")} type="radio" value="Pedas"/>
                          <Text style={styles.fontForm}>Pedas</Text>
                        </label>
                        <label className="rasa">
                          <input {...register("rasa")} type="radio" value="Sedang"/>
                          <Text style={styles.fontForm}>Sedang</Text>
                        </label>
                        <label className="rasa">
                          <input {...register("rasa")} type="radio" value="Manis"/>
                          <Text style={styles.fontForm}>Manis</Text> 
                        </label>
                      </View>
                    </View>
                    <View style={styles.radioCon}>
                      <Text style={styles.fontForm}>Ukuran</Text>
                      <View style={styles.valueRadioCon}>
                        <label className="ukuran">
                          <input {...register("ukuran")} type="radio" value="Jumbo"/>
                          <Text style={styles.fontForm}>Jumbo</Text> 
                        </label>
                        <label className="ukuran">
                          <input {...register("ukuran")} type="radio" value="Sedang"/>
                          <Text style={styles.fontForm}>Sedang</Text>  
                        </label>
                        <label className="ukuran">
                          <input {...register("ukuran")} type="radio" value="Mini"/>
                          <Text style={styles.fontForm}>Mini</Text> 
                        </label>
                      </View>
                    </View>
                    <View style={styles.radioCon}>
                      <Text style={styles.fontForm}>Tambahan</Text>
                      <View style={styles.valueRadioCon}>
                        <input {...register("Tambahan")} type="text"/>
                      </View>
                    </View>
                    <View style={styles.radioCon}>
                      <Text style={styles.fontForm}>Jumlah</Text>
                      <View style={styles.valueRadioCon}>
                        <input {...register("jumlah")} type='number'/>
                      </View>
                    </View>
                    <input type="submit" />
                    </View>                        
                  
                </form>
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
                  name: item.nama,
                  cover:item.cover,
                  harga:item.harga,
                  key:item._id,
                  jenis: item.jenis,
                })}}>
                <View style={styles.item}>
                  <View style={{flex:3, overflow:"hidden"}}>
                    <Image
                    style={styles.tinyLogo}
                    source={{uri:item.cover}}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <Text style={styles.title}>{item.nama}</Text>
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
  height: "100%",
  overflow: 'hidden',
  borderRadius: 10 ,

},
modalView: {
  display:"flex",
  flexDirection: 'column',
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
});
