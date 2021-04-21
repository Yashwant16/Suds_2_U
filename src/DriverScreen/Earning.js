import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput,Button,FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import { ButtonGroup } from 'react-native-elements';
export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      
      drawerLabel: 'Earning',
      drawerIcon: ({ tintColor }) => (
        <View>
        
    <Image  style={{width:25,height:25,tintColor:'#FFF'}} source={require('../../Assets/money.png')}/> 
    </View>
      ),
    };
  
 
      constructor(props) {
          super(props);
          this.state = {
              search: '',
              showModal: false,
              password: '', visible: false,
              showpassword: true,
              selectedIndex: 0,
              DayselectedIndex: 0,
              JobType: '',
              selectedStartDate: null,
              Nav_Screen: 'JobDetails',
              data: [],
              metric: '',
              pin: '',
              value: 0,
              Data: [
                  {
                      status: 'Done 01:25 pm, 10.03.2021',
                      id: 3,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1517836257463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
                  {
                      status: 'Started 10:25 am, 10.03.2021',
                      id: 0,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
                  {
                      status: 'Pending',
                      id: 2,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
                  {
                      status: 'Pending',
                      id: 1,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
                  {
                      status: 'Pending',
                      id: 0,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1517836257463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
                  {
                      status: 'Pending',
                      id: 2,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
                  {
                      status: 'Pending',
                      id: 1,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
                  {
                      status: 'Pending',
                      id: 0,
                      dueAmount: '500 Rs',
                      content: 'Headline of the featured training in view words',
                      image: 'https://images.unsplash.com/photo-1517836257463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                      like: '25',
                      comment: '50',
                  },
              ],
  
  
          }
          this.updateIndex = this.updateIndex.bind(this)
  
      }
  
      updateIndex(selectedIndex) {
          this.setState({ selectedIndex })
          if (selectedIndex === 0) {
              //   this.Search_JOB("UPCOMING");
              // this.setState({ Nav_Screen: 'JobDetails' })
          } else if (selectedIndex === 1) {
  
              //   this.Search_JOB("RECURRING");
              // this.setState({ Nav_Screen: 'RecurringJobDetails' })
          } else if (selectedIndex === 2) {
              //   this.Search_JOB("COMPLETED");
              // this.setState({ Nav_Screen: 'CompletedJobDetails' })
          }
      }

      renderWishlist = ({ item, index }) => (
        <View style={{ padding: 3, flex: 1, }}>

            <View style={{ flexDirection: 'row' }}>
              <Image style={{width:45,height:45,borderRadius:22 ,backgroundColor:'#aaa'}}/>
                <View style={{ marginLeft: 10, width: '68%' }}>
                    <Text numberOfLines={1} style={{  marginTop: 3,fontWeight:'bold' }}>Donnie McClurkin </Text>

                    <Text numberOfLines={2} style={{  }}>5:35 pm</Text>


                </View>
                <View>
                    <View style={{  marginBottom: 5 }}>
                        <Text style={{   }}>1.5 km</Text>
                        <Text style={{  }}>Distance</Text>
                    </View>
      
                </View>
            </View>
            <View style={{ width: '100%', height: 2, backgroundColor: '#B5B5B5', marginTop: 3 }} />

        </View>
    )

    render() {
      const buttons = ['Today', 'Weekly',]

      const { selectedIndex, DayselectedIndex } = this.state
      return (
        <View style={{flex:1,backgroundColor:'#f8f8f8'}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
  
                          <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                  height={82}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                       <TouchableOpacity  onPress={() => {this.props.navigation.openDrawer();}}>
                           <Image style={{width:25,height:25,tintColor:'#fff'}} source={require('../../Assets/menu.png')}/>

                      </TouchableOpacity> 
                    }
                  centerComponent={
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>EARNINGS</Text>
                }
                />

<View style={{flex:1}}>
<ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 0, borderRadius: 0, backgroundColor: '#fff' }}
                    buttonStyle={{}}
                    innerBorderStyle={{ width: 0, }}
                    selectedButtonStyle={{ marginHorizontal: 5, marginTop: 4, borderBottomColor: 'orange', borderBottomWidth: 3, backgroundColor: '#fff' }}
                    selectedTextStyle={{ color: '#1F292D' }}
                    textStyle={{ color: "#8B9193", fontSize: 16 }}
                />
             
                    {selectedIndex == 0 ?
                    <View style={{padding:10,flex:1}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      
                      <View style={{width:'31%',height:65,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',shadowOpacity:0.1}}>  
                        <Text style={{color:'#7DD948',fontSize:16,textAlign:'center',fontWeight:'bold'}}>24.5s</Text>
                        <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>My Earning</Text>
                        </View>
                       
                      <View style={{width:'31%',height:65,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',shadowOpacity:0.1}}>  
                        <Text style={{color:Colors.blue_color,fontSize:16,textAlign:'center',fontWeight:'bold'}}>4h 32m</Text>
                        <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>Speed Time</Text>
                        </View>
                        <View style={{width:'31%',height:65,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',shadowOpacity:0.1}}>  
                        <Text style={{color:'orange',fontSize:16,textAlign:'center',fontWeight:'bold'}}>06</Text>
                        <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>Washes Completed</Text>
                        </View>
                       </View>
                       <Text style={{marginVertical:10,color:Colors.dark_gray}}>TODAYS TRIP</Text>
                   <View style={{flex:1}}>
                       <FlatList
                                //  horizontal
                                style={{ width: '100%', flex: 1 }}

                                showsVerticalScrollIndicator={false}
                                data={this.state.Data}
                                renderItem={this.renderWishlist}
                            // ListEmptyComponent={this.ListEmpty}
                            />
                            </View>
                    </View>:null}


{selectedIndex == 1 ?
                          <View style={{padding:10,flex:1}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                           
                           <View style={{width:'31%',height:65,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',shadowOpacity:0.1}}>  
                             <Text style={{color:'#7DD948',fontSize:16,textAlign:'center',fontWeight:'bold'}}>24.5s</Text>
                             <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>My Earning</Text>
                             </View>
                            
                           <View style={{width:'31%',height:65,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',shadowOpacity:0.1}}>  
                             <Text style={{color:Colors.blue_color,fontSize:16,textAlign:'center',fontWeight:'bold'}}>4h 32m</Text>
                             <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>Speed Time</Text>
                             </View>
                             <View style={{width:'31%',height:65,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',shadowOpacity:0.1}}>  
                             <Text style={{color:'orange',fontSize:16,textAlign:'center',fontWeight:'bold'}}>06</Text>
                             <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>Washes Completed</Text>
                             </View>
                            </View>
                            <Text style={{marginVertical:10,color:Colors.dark_gray}}>TODAYS TRIP</Text>
                        <View style={{flex:1}}>
                            <FlatList
                                     //  horizontal
                                     style={{ width: '100%', flex: 1 }}
     
                                     showsVerticalScrollIndicator={false}
                                     data={this.state.Data}
                                     renderItem={this.renderWishlist}
                                 // ListEmptyComponent={this.ListEmpty}
                                 />
                                 </View>
                         </View>
                          :null
    }
               
   </View>    
        </View>
      );
    }
  }
  
  