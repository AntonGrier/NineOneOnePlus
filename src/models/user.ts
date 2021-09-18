import { BloodType } from './bloodType'

interface KeyValueMap {
  [key: string]: any
}

export interface User extends KeyValueMap {
  name: string
  age: number
  address: string
  emergencyContact: string
  bloodType: BloodType
  allergies: string[]
  conditions: string[]
  medications: string[]
  BMI: number
  height: number
  weight: number
}
