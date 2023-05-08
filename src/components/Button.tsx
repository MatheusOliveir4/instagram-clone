import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className='
        bg-blue-500
        h-12
        w-full
        rounded
        items-center 
        justify-center
      '
      {...rest}
    >
      <Text className='color-white font-bold'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}