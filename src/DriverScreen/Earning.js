import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Header, Icon, Avatar} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {ButtonGroup} from 'react-native-elements';
import CustomHeader from '../Components/CustomHeader';
export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Earning',
    drawerIcon: ({tintColor}) => (
      <View>
        <Image style={{width: 25, height: 25, tintColor: '#FFF'}} source={require('../../Assets/money.png')} />
      </View>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      showModal: false,
      password: '',
      visible: false,
      showpassword: true,
      selectedIndex: 0,
      DayselectedIndex: 0,
      JobType: '',
      selectedStartDate: null,
      Nav_Screen: 'JobDetails',
      data: [
        {earning: '24.5$', speed: '4h 32m', completed: 6},
        {earning: '154.5$', speed: '3h 5m', completed: 42},
      ],
      metric: '',
      pin: '',
      value: 0,

      Data: [
        {
          status: 'Done 01:25 pm, 10.03.2021',
          id: 1,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          status: 'Started 10:25 am, 10.03.2021',
          id: 2,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          status: 'Pending',
          id: 3,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          status: 'Pending',
          id: 4,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          status: 'Pending',
          id: 5,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          status: 'Pending',
          id: 6,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          status: 'Pending',
          id: 7,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          status: 'Pending',
          id: 8,
          dueAmount: '500 Rs',
          content: 'Headline of the featured training in view words',
          image: 'https://images.unsplash.com/photo-1517836257463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
      ],
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
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

  render() {
    const buttons = ['Today', 'Weekly'];

    const {selectedIndex, DayselectedIndex} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
        <CustomHeader title="EARNINGS" leftIconSource={require('../../Assets/menu.png')} onLeftButtonPress={() => this.props.navigation.openDrawer()} />

        <View style={{flex: 1}}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 0, borderRadius: 0, backgroundColor: '#fff', height:50}}
            buttonStyle={{}}
            innerBorderStyle={{width: 0}}
            selectedButtonStyle={{marginHorizontal: 5, marginTop: 4, borderBottomColor: 'orange', borderBottomWidth: 3, backgroundColor: '#fff'}}
            selectedTextStyle={{color: '#1F292D'}}
            textStyle={{color: '#8B9193', fontSize: 18}}
          />

          <View style={{paddingTop: 7, paddingHorizontal:7, flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:7}}>
              <Detail detail="My Earning" title={this.state.data[selectedIndex].earning} color="#7DD948" />
              <Detail detail="Speed Time" title={this.state.data[selectedIndex].speed} color={Colors.blue_color} />
              <Detail detail="Washes Completed" title={this.state.data[selectedIndex].completed} color="orange" />
            </View>
            <Text style={{marginTop: 25, marginHorizontal:10, color: '#888', fontSize:18}}>TODAY'S TRIP</Text>
            <View style={{flex: 1}}>
              <FlatList
                keyExtractor={item => item.id}
                style={{width: '100%', flex: 1}}
                showsVerticalScrollIndicator={false}
                data={this.state.Data}
                renderItem={renderItem}
                // ListEmptyComponent={this.ListEmpty}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const renderItem = ({item, index}) => (
  <View style={styles.item}>
    <View style={{flexDirection: 'row'}}>
      <Image style={{width: 45, height: 45, borderRadius: 22}} source={{uri: item.image}} />
      <View style={{marginLeft: 10, width: '68%'}}>
        <Text numberOfLines={1} style={{marginTop: 3, fontWeight: 'bold'}}>
          Donnie McClurkin
        </Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{width: 14, height: 14, tintColor: '#999'}} source={require('../../Assets/list.png')} />
          <Text style={{marginHorizontal: 3, color: '#999'}}>5:35</Text>
        </View>
      </View>
      <View>
        <View style={{marginBottom: 5}}>
          <Text style={{fontSize: 16, color: '#999', textAlign: 'right'}}>1.5 km</Text>
          <Text style={{fontSize: 12, color: '#777', textAlign: 'right'}}>Distance</Text>
        </View>
      </View>
    </View>
  </View>
);

const Detail = ({color, title, detail}) => (
  <View style={styles.detail}>
    <Text style={{color: color, fontSize: 24, textAlign: 'center', paddingTop: 16, paddingRight: 16, paddingLeft: 16}}>{title}</Text>
    <Text style={{color: '#777', fontSize: 10, textAlign: 'center', padding: 8}}>{detail}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    margin: 7,
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#aaa',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 5,
  },

  detail: {
    width: '31%',
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#aaa',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
});
