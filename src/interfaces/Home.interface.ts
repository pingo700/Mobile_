import { ImageSourcePropType } from 'react-native'

export interface HomeProps {
  id: number
  nome: string
  imagem: string
  hobbie: {
    id: number
    nome: string
  }[]
}

export interface IHome {
  status: string,
  message: string,
  hobbie: {
    id: number,
    nome: string,
    imagem: string,
    vacinacao: {
      id: number,
      nome: string
    }[]
  }[]
}

export interface IInterfaceHome {
  id: number,
  nome: string,
  imagem: string,
  hobbie: {
    id: number,
    nome: string
   }[]
}