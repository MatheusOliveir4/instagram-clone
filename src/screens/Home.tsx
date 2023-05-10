import { HomeHeader } from "../components/HomeHeader";

import { SafeAreaView } from 'react-native-safe-area-context'
import { Story } from "../components/Story";
import { ScrollView, View } from "react-native";
import { Post } from "../components/Post";

export function Home() {
  return (
    <SafeAreaView className='flex-1'>
      <HomeHeader />

      <ScrollView>
        <View className='w-full pb-4 px-2 flex-row items-start space-x-4'>
          <Story type="personal"/>
          <Story />
          <Story />
         
        </View>

        <Post />
        <Post />
        <Post />

      </ScrollView>
      
    </SafeAreaView>
  )
}