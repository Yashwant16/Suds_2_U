import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, FlatList, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
import { ScrollView } from 'react-native';
// import { CheckBox } from 'react-native-elements'

export default class MyNotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: '',
            coupnecode:''

        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    height={79}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SelectAddOns') }}>
                            <Image style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 10 }} source={require('../../Assets/back_arrow.png')} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>WORK IN PROGRESS</Text>
                    }
                />
    
                    <View style={{ alignItems: 'center', width: '100%',padding:21,flex:1 }}>

                    <Image style={{ width: 85, height: 85, tintColor: '#0AFF06', marginTop:30 }} source={require('../../Assets/checkmark.png')} />
                       
<Text style={{fontSize:22,marginVertical:10,fontWeight:'bold',color:'#262121',marginTop:50}}>Congratulations!</Text>
               
                                      
<Text style={{fontSize:14,marginVertical:1,fontWeight:'bold',color:'#262121'}}>Your services has been started now!</Text>
    
                <View style={{ flexDirection:'row',alignItems: 'center', justifyContent:'center' ,height:'100%',marginTop:-70}}>


<View style={{marginBottom:36,}}> 
    <Text style={{fontSize:65,fontWeight:'bold'}}>59:</Text>
    <Text style={{textAlign:'center'}}>Hours</Text>
</View>
<View style={{marginBottom:36}}> 
<Text style={{fontSize:65,fontWeight:'bold'}}>48</Text>
<Text style={{textAlign:'center'}}>Minutes</Text>
</View>

                </View>

                    </View>
                    
                    <View style={{backgroundColor:'red', justifyContent: 'flex-end' ,flexDirection:'row'}}>



                    <TouchableOpacity
                            elevation={5}
                            onPress={() => { this.props.navigation.navigate('Help'); }}
                            style={styles.auth_btn1}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Need Help?</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { this.props.navigation.navigate('BookingDetail'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>+ Add Ads-on</Text>

                        </TouchableOpacity>

                    </View>
                   
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    auth_textInput: {

        alignSelf: 'center',
        width: '60%',
        // borderWidth: 1,
        borderBottomWidth: 0,
        height: 40,fontSize:16,
        color: Colors.text_color,
        marginTop: 5,
        backgroundColor:'#fff',padding:5,borderRadius:5

    },
    auth_btn: {

        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#e28c39',

        width: '50%',
        height: 65,
        justifyContent: 'center',
    },
    auth_btn1: {

        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.blue_color,

        width: '50%',
        height: 65,
        justifyContent: 'center',
    },
})