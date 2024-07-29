import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';


const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-black flex space-y-4" edges={['top']}>
        <StatusBar style="dark" />

        {/* punchline and avatar */}
        <View className="flex-row justify-between items-center mx-5">
            <View className="space-y-2">
                <Text
                    style={{
                        fontSize: hp(3.5),
                    }}
                    className="font-bold text-white tracking-wider"
                >READY TO</Text>
                <Text
                    style={{
                        fontSize: hp(3.5),
                    }}
                    className="font-bold text-yellow-400 tracking-wider"
                >WORKOUT</Text>
            </View>
            <View className="flex justify-center items-center space-y-2">
                <Image
                    source={require('../assets/images/avatar.jpg')}
                    style={{
                        height: hp(10),
                        width: hp(10),
                    }}
                    className="rounded-full"
                />
                {/* <View
                    style={{
                        height: hp(5.5),
                        width: hp(5.5),
                    }}
                    className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300 ">
                <Ionicons name="notifications" size={hp(3)} color="gray" />
                </View> */}
            </View>
        </View>

        {/* image slider */}
        <View>
            <ImageSlider/>
        </View>
            
        {/*muscles tab */}
        <View className="flex-1">
            <BodyParts/>
        </View>



    </SafeAreaView>
  )
}

export default Home