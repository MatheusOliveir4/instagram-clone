import { View, Pressable } from 'react-native'

import LikeSvg from '../assets/like.svg'
import DirectSvg from '../assets/direct.svg'
import LogoSvg from '../assets/instagram-logo-app.svg'

export function HomeHeader() {
  return (
    <View className="py-4 px-2 w-full flex-row justify-between items-center">
      <LogoSvg /> 

      <View className="flex-row space-x-4">
        <Pressable>
          <LikeSvg />
        </Pressable>
        
        <Pressable>
          <DirectSvg />
        </Pressable>
      </View>
    </View>
  )
}