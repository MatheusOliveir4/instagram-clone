import { TextInput, TextInputProps } from 'react-native'

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput 
      className='
        border-1
        w-full
        h-12
        bg-gray-100
        px-4
        rounded
        text-base
        border
        border-gray-100
        focus:border-blue-500
      '
      {...rest}
    />
  )
}