import { Button, TextField, Typography } from '@mui/material'
import { navigate, RouteComponentProps } from '@reach/router'
import { FieldArray, Form, Formik, useFormikContext } from 'formik'
import { Fragment, FunctionComponent, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { UserFields } from '../../utils/userFields'
import axios from 'axios'
import { toast, ToastOptions } from 'react-toastify'
import { handleErrors, handleSuccess } from './../../helpers'
const INITIAL_VALUES = {
  username: '',
  password: '',
  name: '',
  age: '',
  address: '',
  emergency_contact: '',
  blood_type: '',
  allergies: [],
  conditions: [],
  medications: [],
  bmi: '',
  height: '',
  weight: '',
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    paddingTop: '10vh',
  },
})

export const SignUpPage: FunctionComponent<RouteComponentProps> = () => {
  const handleSubmit = async (
    {
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
    }: any,
    actions: any,
  ) => {
    const userdata: any = {
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
    try {
      const response = await axios.post('/signup', userdata)
      if (response.status === 200) {
        userdata.foreach((field: any) => {
          handleSuccess(`Succesfully created an account`)
        })
        navigate('/')
      }
    } catch (err) {
      handleErrors(err, 'Sign-up error occurred', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          overflowY: 'auto',
        }}
      >
        <Typography variant='h1'>Sign Up</Typography>
        <UserFields signUp />
      </div>
    </Formik>
  )
}
