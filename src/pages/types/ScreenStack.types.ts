import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"
import { HomeProps } from "../../interfaces/Home.interface"


export type HomeStackParamList = {
    Home: undefined
    Usuario: HomeProps
    hobbie: {
        id: number
        nome: string
    }[]
  }
type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList>
export type HomeTypes = {
  navigation: HomeScreenNavigationProp
}