import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute"
        source={require('../assets/images/onbrd.jpg')}
      />
      <LinearGradient
        colors={['transparent','#18181b']}
        style={{height: hp(70), width: wp(100)}}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
            <Text style={{fontSize:hp(5)}} className="text-white tracking-wide font-bold">Welcome to </Text>
            <Text style={{fontSize:hp(5)}} className="text-yellow-400 tracking-wide font-bold">FitDex</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity
                onPress={() => router.push('home')}
                style={{height:hp(7) , width:wp(80)}}
                className="bg-yellow-400 flex justify-center items-center rounded-full mx-auto"
            >
                <Text style={{fontSize:hp(3)}} className="text-black font-bold tracking-widest">Get Started</Text>
            </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  )
}

export default index