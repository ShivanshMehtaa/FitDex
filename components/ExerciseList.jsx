import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ExerciseList = ({data}) => {
    const router  = useRouter();
  return (
    <View>
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50, paddingTop:20}}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item , index}) => <ExerciseCard router={router} index={index} item={item}/>}
     />
  </View>
  )
}

const ExerciseCard = ({item,router,index}) => {
    return (
        <Animated.View entering={FadeInDown.duration(4000).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({pathname:'/exerciseDetails', params:item})}
                className="flex py-3 space-y-2"
            >
               <View className="bg-neutral shadow rounded-[25px]">
                   <Image 
                    source={{uri:item.gifUrl}}
                    contentFit='cover'
                    style={{height:hp(30), width:wp(43)}}
                    className="rounded-[25px]"
                   />
               </View> 
               <Text
                style={{fontSize:hp(1.7)}}
                className="text-white capitalize font-semibold ml-1 tracking-wide"
               >
                {
                    item?.name?.length>15?item.name.slice(0,15)+'...':item.name
                }

               </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default ExerciseList