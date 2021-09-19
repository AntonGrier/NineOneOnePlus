import { Formik } from 'formik'
import { BloodType, User } from '../../../models'
import { UserInfoForm } from './UserInfoForm'
import { toast, ToastOptions } from 'react-toastify'
import axios from 'axios'
import React, { FunctionComponent, useState } from 'react'
import { handleErrors, handleSuccess } from '../../../helpers'
const INITIAL_VALUES: User = {
  name: 'Liang Liu',
  age: 20,
  address: '2205 Lower Mall',
  emergencyContact: 'Linda Ma',
  bloodType: BloodType.ABPos,
  allergies: [],
  conditions: [],
  medications: [],
  BMI: 20,
  height: 165,
  weight: 50,
}

const URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'
    : 'https://htn2021be.herokuapp.com/'

export const UserInfoFormController = () => {
  const [editing, setEditing] = useState(false)
  const onValidate = (values: any) => {
    return {}
  }
  const onSubmit = async (
    {
      name,
      age,
      address,
      emergencyContact,
      bloodType,
      allergies,
      conditions,
      medications,
      BMI,
      height,
      weight,
    }: any,
    actions: any,
  ) => {
    console.log(name, age, address)
    try {
      const emergency_contact = emergencyContact
      const blood_type = bloodType
      const bmi = BMI
      const userData: any = {
        name,
        age,
        address,
        emergency_contact,
        blood_type,
        allergies,
        conditions,
        medications,
        bmi,
        height,
        weight,
      }
      const response = await axios.put(`${URI}/edit`, userData)
      if (response.status === 200) {
        userData.foreach((field: any) => {
          handleSuccess(`Succesfully updated to "${field}"`)
        })
      }
    } catch (err) {
      handleErrors(err, 'Edit error occurred', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={onValidate}
      onSubmit={onSubmit}
    >
      <UserInfoForm />
    </Formik>
  )
}
