import { Grid, Typography } from '@mui/material'
import { Fragment, FunctionComponent } from 'react'
import { BloodType, User } from '../../../models'

const values: User = {
  name: 'Liang Liu',
  age: 20,
  address: '2205 Lower Mall',
  emergencyContact: 'Linda Ma',
  bloodType: BloodType.ABPos,
  allergies: ['Honey', 'Peanut Butter'],
  conditions: ['Leukemia'],
  medications: ['Cold Medicine'],
  BMI: 20,
  height: 165,
  weight: 50,
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
                    {values[fieldProps.fieldName]}
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
                {values[fieldName].map((value: string, index: number) => {
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
