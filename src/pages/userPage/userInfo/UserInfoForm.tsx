import { Button, TextField } from '@mui/material'
import { useFormikContext } from 'formik'
import { User } from '../../../models'

const fieldProps = [
  { label: 'Name', fieldName: 'name' },
  { label: 'Age', fieldName: 'age' },
  { label: 'Address', fieldName: 'address' },
  { label: 'Emergency Contact', fieldName: 'emergencyContact' },
  { label: 'Blood Type', fieldName: 'bloodType' },
  { label: 'Allergies', fieldName: 'allergies' },
  { label: 'Conditions', fieldName: 'conditions' },
  { label: 'Medications', fieldName: 'medications' },
  { label: 'BMI', fieldName: 'BMI' },
  { label: 'Height', fieldName: 'height' },
  { label: 'Weight', fieldName: 'weight' },
]

export const UserInfoForm = () => {
  const { values, submitForm } = useFormikContext<User>()

  const field = (label: string, fieldName: string) => (
    <TextField
      style={{ padding: '10px' }}
      key={fieldName}
      type={fieldName}
      name={fieldName}
      label={label}
      defaultValue={values[fieldName]}
      variant='outlined'
    />
  )

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onSubmit={() => {}}
    >
      {fieldProps.map(({ label, fieldName }) => field(label, fieldName))}
      <Button type='submit' onSubmit={submitForm}>
        Submit
      </Button>
    </form>
  )
}
