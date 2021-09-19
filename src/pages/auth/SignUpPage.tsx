import { Button, TextField, Typography } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import { FieldArray, Form, Formik, useFormikContext } from 'formik'
import { Fragment, FunctionComponent, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { UserFields } from '../../utils/userFields'

const INITIAL_VALUES = {
  username: '',
  password: '',
  name: '',
  age: '',
  address: '',
  emergencyContact: '',
  bloodType: '',
  allergies: [],
  conditions: [],
  medications: [],
  BMI: '',
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
  const handleSubmit = (values: any) => {
    console.log('values', values)
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
