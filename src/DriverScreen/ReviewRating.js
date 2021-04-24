import React, {useMemo} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import Colors from '../../Constants/Colors';
import CustomHeader from '../Components/CustomHeader';
import Rating from '../Components/Rating';

class ReviewRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingData: [
        {rating: 1, amount: 112},
        {rating: 2, amount: 205},
        {rating: 3, amount: 702},
        {rating: 4, amount: 550},
        {rating: 5, amount: 845},
      ],
      Data: [
        {
          userName: 'Donnie Smith',
          review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`,
          rating: 4,
          userImage: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          t: '29 july 2019',
          id: 1,
        },
        {
          userName: 'Donnie Smith',
          review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          rating: 4,
          userImage: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          t: '29 july 2019',
          id: 2,
        },
        {
          userName: 'Donnie Smith',
          review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          rating: 4,
          userImage: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          t: '29 july 2019',
          id: 3,
        },
        {
          userName: 'Donnie Smith',
          review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
          rating: 4,
          userImage: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          t: '29 july 2019',
          id: 4,
        },
        {
          userName: 'Donnie Smith',
          review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          rating: 4,
          userImage: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          t: '29 july 2019',
          id: 5,
        },
        {
          userName: 'Donnie Smith',
          review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
          rating: 4,
          userImage: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          t: '29 july 2019',
          id: 6,
        },
        {
          userName: 'Donnie Smith',
          review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
          rating: 4,
          userImage: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          t: '29 july 2019',
          id: 7,
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Overview ratingData={this.state.ratingData} />
        <FlatList
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          data={this.state.Data}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#ddd'}} />}
          // ListEmptyComponent={this.ListEmpty}
        />
      </View>
    );
  }
}
export default ReviewRating

const renderItem = ({item, index}) => (
  <View style={{padding: 17}}>
    <View style={{flexDirection: 'row', paddingBottom: 10}}>
      <Image style={{height: 40, width: 40, marginRight: 10, borderRadius: 35}} source={{uri: item.userImage}} />
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.userName}</Text>
        <Rating rating={item.id} />
      </View>
      <Text style={{marginLeft: 'auto', color: '#999'}}>{item.t}</Text>
    </View>
    <Text numberOfLines={3} style={{color: '#999', lineHeight: 25}}>
      {item.review.trim()}
    </Text>
  </View>
);

const Overview = ({ratingData}) => {
  const totalReviews = useMemo(() => ratingData.map(v => v.amount).reduce((p, c) => p + c), [ratingData]);
  const largestReview = useMemo(()=>ratingData.map(v => v.amount).reduce((p, c) => p > c? p : c),[ratingData])
  const avarageRating = useMemo(()=> ratingData.map(v => v.amount).reduce((p,c,ci)=>  p + c*(ci+1))/totalReviews, [ratingData])
  return (
    <View style={{flexDirection: 'row', padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1}}>
      <View style={{width: '50%', alignItems: 'center', justifyContent: 'center', height: 100}}>
        <Text style={{color: Colors.blue_color, fontSize: 30}}>{avarageRating.toFixed(1)}</Text>
        <Rating rating={avarageRating} />
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Image style={{width: 16, height: 16, tintColor: '#777'}} source={require('../../Assets/icon/user.png')} />
          <Text style={{marginHorizontal: 3, color: '#999'}}>{totalReviews} Total</Text>
        </View>
      </View>
      <View style={{width: '50%'}}>
        <Percent rate={5} percent={(ratingData[4].amount/largestReview) * 100} amount={ratingData[4].amount} />
        <Percent rate={4} percent={(ratingData[3].amount/largestReview) * 100} amount={ratingData[3].amount} />
        <Percent rate={3} percent={(ratingData[2].amount/largestReview) * 100} amount={ratingData[2].amount} />
        <Percent rate={2} percent={(ratingData[1].amount/largestReview) * 100} amount={ratingData[1].amount} />
        <Percent rate={1} percent={(ratingData[0].amount/largestReview) * 100} amount={ratingData[0].amount} />
      </View>
    </View>
  );
};

const Percent = ({rate, percent, amount}) => (
  <View style={{padding:0}}>
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Image style={{width: 16, height: 16, tintColor: '#aaa'}} source={require('../../Assets/review.png')} />
      <Text style={{marginHorizontal: 3, color: '#999'}}>{rate}</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 4, backgroundColor: '#eee'}}>
        <View style={{width: percent + '%', height: '100%', backgroundColor: Colors.dark_orange}} />
      </View>
    </View>
    <Text style={{textAlign: 'right', fontSize: 10, color: '#777', lineHeight:10}}>{amount}</Text>
  </View>
);
