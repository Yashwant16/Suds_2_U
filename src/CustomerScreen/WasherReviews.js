import { useNetInfo } from '@react-native-community/netinfo';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView, RefreshControl, ActivityIndicator } from 'react-native';
import Colors from '../../Constants/Colors';
import ListEmpty from '../Components/ListEmpty';
import { ERROR, LOADING, partialProfileUrl } from '../Providers';
import { AppContext } from '../Providers/AppProvider';
import { ACTIONS, BookingContext, WASHER_ACCEPTED, WASHER_ARRIVED, WASHR_ON_THE_WAY, WASH_COMPLETED, WASH_IN_PROGRESS, WASH_PENDING, WASH_REJECTED } from '../Providers/BookingProvider';

const WasherReviews = ({ }) => {
    const [state, setState] = useState(LOADING)
    const { getWasherReviews } = useContext(BookingContext)

    useEffect(() => getWasherReviews(state,setState), []);

    const List = () => {
        switch (state) {
            case ERROR: return <ListEmpty retry={() => getWasherReviews(state,setState)} netInfo={netInfo} emptyMsg="No Reviews Yet" />
            case LOADING: return <ActivityIndicator size="large" color={Colors.blue_color} />
            default: return (
                <FlatList
                    keyExtractor={item => item.id}
                    style={{ width: '100%' }}
                    showsVerticalScrollIndicator={false}
                    data={state.reviews}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
                    ListEmptyComponent={ (()=><ListEmpty retry={() => getWasherReviews(state,setState)} emptyMsg="No Reviews Yet" />)}
                    ListFooterComponent={!state.hasLoadedAllItems && ListFooter}
                    onEndReached={!state.hasLoadedAllItems && (() => getWasherReviews(state,setState))}
                    onEndReachedThreshold={0.1}
                />
            )
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView />
            <List />
        </View>
    );
};

export default WasherReviews;

const renderItem = ({ item, index }) => (
    <View style={{ padding: 17 }}>
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <Image style={{ height: 40, width: 40, marginRight: 10, borderRadius: 35 }} source={{ uri: item.userImage }} />
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.userName}</Text>
                <Rating rating={item.rating} />
            </View>
            <Text style={{ marginLeft: 'auto', color: '#999' }}>{item.created_date}</Text>
        </View>
        <Text numberOfLines={3} style={{ color: '#999', lineHeight: 25 }}>
            {item.review.trim()}
        </Text>
    </View>
);


const ListFooter = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', padding: 8 }}>
        <ActivityIndicator color={Colors.blue_color} size="large" />
    </View>
);
