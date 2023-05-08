import { View, Text, Image, TouchableOpacity } from 'react-native'

import logo from '../assets/instagram-logo.png'

import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SignIn() {
  return (
    <View className="flex-1 bg-white items-center px-6" >
      <Image 
        source={logo}
        className='mt-36'
      />

      <View className='w-full mt-12 space-y-4'>
        <Input placeholder='Username' />
        <Input placeholder='Password' secureTextEntry/>
      </View>

      <TouchableOpacity className='self-end mt-6'>
        <Text className='color-blue-500 font-bold'>Forgot password?</Text>
      </TouchableOpacity>

      <Button 
        className='mt-8'
        title='Log in'
      />

      <TouchableOpacity className='mt-8'>
        <Text className='color-blue-500 font-bold text-base'>Log in with Facebook</Text>
      </TouchableOpacity>

      <Text className='mt-8 text-gray-400 text-sm'>
        OR
      </Text>

      <View className='flex flex-row items-center mt-8 space-x-1'>
        <Text className='text-gray-400 text-base '>
          Don't have an account? 
        </Text>

        <TouchableOpacity>
          <Text className='color-blue-500 text-base'>Sign up.</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  )
}