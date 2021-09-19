import { Button, TextField, Typography } from '@mui/material'
import { FieldArray, Form, useFormikContext } from 'formik'
import { Fragment } from 'react'
import { User } from '../../../models'

enum FieldType {
  Text = 'Text',
  List = 'List',
}

interface FieldGroups {
  [group: string]: FieldProps[]
}

interface FieldProps {
  label: string
  fieldName: string
  type: FieldType
  listItemLabel?: string
}

const fieldGroups: FieldGroups = {
  Contact: [
    { label: 'Name', fieldName: 'name', type: FieldType.Text },
    { label: 'Age', fieldName: 'age', type: FieldType.Text },
    { label: 'Address', fieldName: 'address', type: FieldType.Text },
    {
      label: 'Emergency Contact',
      fieldName: 'emergencyContact',
      type: FieldType.Text,
    },
  ],
  Medical: [
    { label: 'Blood Type', fieldName: 'bloodType', type: FieldType.Text },
    {
      label: 'Allergies',
      listItemLabel: 'Allergy',
      fieldName: 'allergies',
      type: FieldType.List,
    },
    {
      label: 'Existing Conditions',
      listItemLabel: 'Existing Condition',
      fieldName: 'conditions',
      type: FieldType.List,
    },
    {
      label: 'Medications',
      listItemLabel: 'Medication',
      fieldName: 'medications',
      type: FieldType.List,
    },
    { label: 'BMI', fieldName: 'BMI', type: FieldType.Text },
    { label: 'Height', fieldName: 'height', type: FieldType.Text },
    { label: 'Weight', fieldName: 'weight', type: FieldType.Text },
  ],
}

export const UserInfoForm = () => {
  const { values, handleSubmit, setFieldValue } = useFormikContext<User>()

  const field = ({ label, fieldName, type, listItemLabel }: FieldProps) =>
    type === FieldType.List ? (
      <FieldArray
        key={fieldName}
        name={fieldName}
        render={(arrayHelpers) => (
          <>
            <Typography
              style={{
                textAlign: 'left',
                marginTop: '20px',
                marginBottom: '5px',
                width: '100%',
              }}
              variant='h6'
            >
              {label}
            </Typography>
            {values[fieldName] && values[fieldName].length ? (
              values[fieldName].map((_: any, index: number) => (
                <div
                  key={index}
                  style={{ position: 'relative', margin: '10px 0' }}
                >
                  <TextField
                    label={`${listItemLabel} ${index + 1}`}
                    name={`${fieldName}.${index}`}
                    type={`${fieldName}.${index}`}
                    onChange={(e) =>
                      arrayHelpers.replace(index, e.target.value)
                    }
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'absolute',
                      left: '100%',
                      top: '0',
                      height: '100%',
                    }}
                  >
                    <Button
                      style={{ height: '50%' }}
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      <Typography variant='h5'>-</Typography>
                    </Button>
                    <Button
                      style={{ height: '50%' }}
                      onClick={() => arrayHelpers.insert(index, '')}
                    >
                      <Typography variant='h5'>+</Typography>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <Button onClick={() => arrayHelpers.push('')}>Add</Button>
            )}
          </>
        )}
      />
    ) : (
      <TextField
        style={{ margin: '10px 0' }}
        key={fieldName}
        type={fieldName}
        name={fieldName}
        label={label}
        defaultValue={values[fieldName]}
        variant='outlined'
        onChange={(e) => setFieldValue(fieldName, e.target.value)}
      />
    )

  return (
    <Form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {Object.keys(fieldGroups).map((group) => {
        return (
          <Fragment key={group}>
            <Typography
              style={{
                textAlign: 'left',
                marginTop: '20px',
                marginBottom: '5px',
                width: '100%',
              }}
              variant='h5'
            >
              {group}
            </Typography>
            {fieldGroups[group].map((props: any) => field(props))}
          </Fragment>
        )
      })}
      <Button
        variant='contained'
        style={{ width: '100%', marginTop: '20px', marginBottom: '10vh' }}
        color='primary'
        onClick={() => handleSubmit()}
        type='submit'
      >
        <Typography style={{ fontWeight: 'bold' }} variant='subtitle1'>
          Save
        </Typography>
      </Button>
    </Form>
  )
}
