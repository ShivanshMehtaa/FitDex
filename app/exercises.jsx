import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getExercisesbyBodyPart } from "../api/exerciseDB";
import { dummyExercises } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  const router = useRouter();
  const item = useLocalSearchParams();

  useEffect(() => {
    if(item) getExercises(item.name)
  }, [item]);

  const getExercises = async (bodyPart) => {
    let data = await getExercisesbyBodyPart(bodyPart);
    setExercises(data);
  };

  return (
    <ScrollView className="bg-black">
      <StatusBar style="auto" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        className="bg-yellow-400 mx-4 absolute rounded-full flex justify-center items-center pr-1"
        onPress={() => router.back()}
        style={{height: hp(6), width: hp(6),marginTop:hp(7)}}
      >
        <Ionicons name="caret-back-outline" size={hp(5)} color="black" />
      </TouchableOpacity>
      
      {/* exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{
            fontSize: hp(2.5),
          }}
          className="font-bold text-white capitalize">
          list of all {item.name} exercises 
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises}/>
        </View>
      </View>

    </ScrollView>
  );
};

export default Exercises;
