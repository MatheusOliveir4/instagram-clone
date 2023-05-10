import { View, Image, Text, Pressable, TouchableOpacity } from 'react-native'

import UserImg from '../assets/user.jpg'
import PostPhotoImg from '../assets/post-photo.jpg'

import ConfigSvg from '../assets/config.svg'
import LikeSvg from '../assets/like.svg'
import CommentSvg from '../assets/comment.svg'
import DirectSvg from '../assets/direct.svg'
import { UserPhoto } from './UserPhoto'

export function Post() {
  return (
    <View className="w-full border-t-2 border-gray-100 py-4 ">
      <View className="w-full flex-row items-center px-2 ">
        <View className='flex-row space-x-3 items-center'>
          <UserPhoto size={11} userImg={UserImg}/>

          <View >
            <Text className='text-gray-700'>joshua_l</Text>
            <Text className='text-gray-700'>Tokyo, Japan</Text>
          </View>
        </View>
        
        <TouchableOpacity className='ml-auto'>
          <ConfigSvg />
        </TouchableOpacity>
      </View>
      
      <Image
        className='w-full h-96 my-2' 
        source={PostPhotoImg}
      />

      <View className='flex-row space-x-4 px-2 items-center'>
        <LikeSvg />
        <CommentSvg />
        <DirectSvg />
      </View>

      <View className='mt-2 px-2 space-y-2'>
        <View className='flex-row space-x-2 items-center'>
          <UserPhoto size={6} userImg={UserImg}/>

          <Text className="text-sm text-gray-700">
            Liked by craig_love and 44,686 others
          </Text>
        </View>

        <Text>
          <Text className="font-bold">
            joshua_l
          </Text> The game in Japan was amazing and i want to share some photos
        </Text>

        <Text className="text-gray-500">View all 4 comments</Text>
      </View>
    </View>
  )
}