import { Grid, Typography } from '@mui/material'
import { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { BloodType, User } from '../../../models'
import axios from 'axios'

const URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'
    : 'https://htn2021be.herokuapp.com/'

export const getUserInfo = async () => {
  const result = await axios.get(`${URI}/userinfo`)
  console.log(result)
  return result
}

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

const listFields: FieldProps[] = [
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
]

const fieldGroups: FieldGroups = {
  'Contact Information': [
    { label: 'Name', fieldName: 'name', type: FieldType.Text },
    { label: 'Age', fieldName: 'age', type: FieldType.Text },
    { label: 'Address', fieldName: 'address', type: FieldType.Text },
    {
      label: 'Emergency Contact',
      fieldName: 'emergencyContact',
      type: FieldType.Text,
    },
  ],
  'Medical Information': [
    { label: 'Blood Type', fieldName: 'bloodType', type: FieldType.Text },
    { label: 'BMI', fieldName: 'BMI', type: FieldType.Text },
    { label: 'Height', fieldName: 'height', type: FieldType.Text },
    { label: 'Weight', fieldName: 'weight', type: FieldType.Text },
  ],
}

export const InfoTab: FunctionComponent = () => {
  const [values, setValues] = useState<User>()

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { data } = await getUserInfo()
      setValues(data)
    }
    fetchUserInfo()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {Object.keys(fieldGroups).map((group) => {
        return (
          <Fragment key={group}>
            <Typography style={{ marginBottom: '30px' }} variant='h4'>
              {group}
            </Typography>
            <Grid
              spacing={3}
              container
              style={{
                marginBottom: '30px',
                width: '100%',
              }}
            >
              {fieldGroups[group].map((fieldProps: FieldProps) => (
                <Grid item xs={6}>
                  <Typography
                    style={{ color: 'grey', fontSize: '16px' }}
                    variant='subtitle2'
                  >
                    {fieldProps.label}
                  </Typography>
                  <Typography style={{ fontSize: '20px' }} variant='body1'>
                    {values ? values[fieldProps.fieldName] : '-'}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        )
      })}
      <Grid container>
        {listFields.map(({ label, fieldName }: FieldProps) => {
          return (
            <Grid item xs={6} style={{ marginBottom: '20px' }} key={fieldName}>
              <Typography
                style={{ color: 'grey', fontSize: '16px' }}
                variant='subtitle2'
              >
                {label}
              </Typography>
              <div>
                {(values && values[fieldName].length
                  ? values[fieldName]
                  : ['None']
                ).map((value: string, index: number) => {
                  return (
                    <Typography
                      key={index}
                      style={{ fontSize: '20px' }}
                      variant='body1'
                    >
                      {value}
                    </Typography>
                  )
                })}
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
