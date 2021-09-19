import { Button, TextField, Typography } from '@mui/material'
import { navigate, RouteComponentProps } from '@reach/router'
import { Form, Formik } from 'formik'
import { FunctionComponent, useState } from 'react'

const initialValues = {
  login: '',
  password: '',
}

export const LoginPage: FunctionComponent<RouteComponentProps> = () => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      navigate('/')
    }, 1500)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography variant='h1'>Login</Typography>
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
                Invalid Password or Email
              </Typography>
            )}
          </div>
          <Button
            disabled={submitting}
            color='primary'
            variant='outlined'
            type='submit'
            style={{
              // marginBottom: '10vh',
              backgroundColor: 'white',
              borderWidth: '5px',
              margin: '10px',
              width: '300px',
              borderRadius: '30px',
              padding: '10px 25px',
            }}
            onClick={() => console.log('logging in')}
          >
            <Typography variant='h4'>Login</Typography>
          </Button>
        </Form>
      </div>
    </Formik>
  )
}
