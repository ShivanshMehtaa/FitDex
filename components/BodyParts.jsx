import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';


const BodyParts = () => {
    const router = useRouter();
  return (
    <View className="mx-4">
      <Text style={{fontSize:hp(3)}} className="font-semibold text-white">Muscle Groups</Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50, paddingTop:20}}
        columnWrapperStyle={{justifyContent:'space-between'}}
        renderItem={({item , index}) => <BodyPartCard router={router} index={index} item={item}/>}
       />
    </View>
  )
}

const BodyPartCard = ({item, router,index}) => {
    return (
        <Animated.View entering={FadeInDown.duration(4000).delay(index*200).springify()}>
            <TouchableOpacity
            onPress={() => router.push({pathname:'/exercises', params:item})}
                style={{width:wp(45), height:hp(30)}}
                className="flex justify-end mb-4"
            >
            <Image
                source={item.image}
                style={{height:hp(30), width:wp(41)}}
                className="rounded-3xl"
                resizeMode='cover'
            />
            <LinearGradient
                colors={['transparent','rgba(0,0,0,0.8)']}
                style={{height:hp(15), width:wp(41)}}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0 rounded-3xl"
            />
            <Text
                style={{fontSize:hp(2.5)}}
                className="text-yellow-400 capitalize font-semibold absolute bottom-2 left-2">
                {item?.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default BodyParts