import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const exerciseDetails = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log(item);
  return (
    <View className="bg-black flex flex-1">
      <View className="shadow-md bg-neutral-100 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ height: wp(100), width: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-10 bg-yellow-400 mx-4 absolute rounded-full flex justify-center items-center pr-1"
      >
        <Ionicons name="caret-back-outline" size={hp(5)} color="black" />
      </TouchableOpacity>

      {/* Exercise Details */}

      <ScrollView className="mx-4 space-y-2 mt-3">
        <Text
          style={{ fontSize: hp(2.5) }}
          className="text-white capitalize mb-10 tracking-wide font-semibold"
        >
          {item.name}
        </Text>
        <Text style={{ fontSize: hp(2) }} className="text-white tracking-wide">
          Equipment :{" "}
          <Text className="text-yellow-400 font-bold">{item?.equipment}</Text>
        </Text>
        <Text style={{ fontSize: hp(2) }} className="text-white tracking-wide">
          Aux Muscles :{" "}
          <Text className="text-yellow-400 font-bold">
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text style={{ fontSize: hp(2) }} className="text-white tracking-wide">
          Main Muscle :{" "}
          <Text className="text-yellow-400 font-bold">{item?.target}</Text>
        </Text>
        <Text style={{ fontSize: hp(4) }} className="text-white tracking-wide ">
          Instructions
        </Text>
        {item?.instructions.split(",").map((instructions, index) => {
          return (
            <Text key={instructions} className="text-white" style={{ fontSize: hp(2) }}>
              <Text className="text-yellow-300 font-bold">{index+1 }.</Text> {instructions}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
