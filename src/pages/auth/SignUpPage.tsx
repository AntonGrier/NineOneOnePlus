import { Button, TextField, Typography, IconButton } from '@mui/material'
import { navigate, RouteComponentProps } from '@reach/router'
import { Form, Formik } from 'formik'
import { FunctionComponent, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Avatar } from './../../ui/Avatar'
import { UserInfoFormController } from './../userPage/userInfo/UserInfoFormController'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

const initialValues = {
  login: '',
  password: '',
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
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const { root } = useStyles()

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
    }, 1500)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div
        style={{
          backgroundColor: 'rgb(249, 81, 81, 0.2)',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography variant='h1'>Sign Up</Typography>
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            disabled={submitting}
            style={{ margin: '10px 0' }}
            type='username'
            name='username'
            label='Username'
            variant='outlined'
          />

          <TextField
            disabled={submitting}
            style={{ margin: '10px 0' }}
            type='password'
            name='password'
            label='Password'
            variant='outlined'
          />
          <div style={{ height: '4vh' }}>
            {error && (
              <Typography color='primary' variant='subtitle2'>
                Username Already in Use
              </Typography>
            )}
          </div>
          <div className={root}>
            <Typography variant='h4'>Your Information</Typography>
            <div style={{ position: 'relative' }}>
              <Avatar />
              <IconButton
                style={{
                  color: '#F95151',
                  position: 'absolute',
                  bottom: '0',
                  left: '80%',
                }}
              >
                <ControlPointIcon fontSize='large' />
              </IconButton>
            </div>
            <UserInfoFormController />
          </div>

          <Button
            disabled={submitting}
            color='primary'
            variant='contained'
            style={{
              margin: '10px',
              width: '300px',
              borderRadius: '30px',
              padding: '10px 25px',
            }}
            type='submit'
            onClick={handleSubmit}
          >
            <Typography variant='h4'>Sign Up</Typography>
          </Button>
        </Form>
      </div>
    </Formik>
  )
}
