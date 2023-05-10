import { Text, TouchableOpacity, ViewProps, View, Image } from 'react-native'

import UserImg from '../assets/user.jpg'
import { UserPhoto } from './UserPhoto'

type StoryProps = ViewProps & {
  type?: 'personal' | 'followed' 
}

export function Story({ type = 'followed', ...rest }: StoryProps) {
  if (type === 'personal') {
    return (
      <View {...rest} className='items-center'>
        <TouchableOpacity className="rounded-full border-2 p-1 border-yellow">
          <UserPhoto size={12} userImg={UserImg}/>
        </TouchableOpacity>

        <Text className='mt-1 text-gray-700'>
          Your Story
        </Text>
      </View>
    )
  } else {
    return (
      <View {...rest} className='items-center'>
        <TouchableOpacity 
          className='rounded-full p-1 border-2 border-yellow'
        >
          <UserPhoto size={12} userImg={UserImg}/>

        </TouchableOpacity>

        <Text className='mt-1 text-gray-700'>
          matheus_f
        </Text>
      </View>
    )
  }
}