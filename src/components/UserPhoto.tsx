import { Image, ImageSourcePropType } from 'react-native'

type UserPhotoProps = {
  size: number,
  userImg: ImageSourcePropType
}

export function UserPhoto({ size, userImg }: UserPhotoProps) {
  return (
    <Image  
      className={`w-${size} h-${size} rounded-full`}
      source={userImg}
    />
  )
}