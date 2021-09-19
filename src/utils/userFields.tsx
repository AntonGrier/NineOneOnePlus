import { Button, TextField, Typography } from '@mui/material'
import { FieldArray, Form, useFormikContext } from 'formik'
import { Dispatch, Fragment, FunctionComponent, SetStateAction } from 'react'
import { accountGroup, fieldGroups, FieldProps, FieldType } from './fieldProps'

interface Props {
  signUp?: boolean
  editButton?: boolean
  editing?: boolean
  setEditing?: Dispatch<SetStateAction<boolean>>
}

export const UserFields: FunctionComponent<Props> = ({
  signUp,
  editButton,
  editing = true,
  setEditing,
}) => {
  const { values, handleSubmit, setFieldValue } = useFormikContext<any>()

  const makeField = ({ label, fieldName, type, listItemLabel }: FieldProps) =>
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
                    disabled={!editing}
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
                      disabled={!editing}
                      style={{ height: '50%' }}
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      <Typography variant='h5'>-</Typography>
                    </Button>
                    <Button
                      disabled={!editing}
                      style={{ height: '50%' }}
                      onClick={() => arrayHelpers.insert(index, '')}
                    >
                      <Typography variant='h5'>+</Typography>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <Button disabled={!editing} onClick={() => arrayHelpers.push('')}>
                Add
              </Button>
            )}
          </>
        )}
      />
    ) : (
      <TextField
        disabled={!editing}
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

  const getEditButton = (bottom?: boolean) => (
    <Button
      variant='contained'
      style={{
        borderRadius: '20px',
        width: '100%',
        marginTop: '20px',
        marginBottom: bottom ? '10vh' : undefined,
      }}
      color='primary'
      onClick={() => {
        if (editing) {
          handleSubmit()
          setEditing!(false)
        } else {
          setEditing!(true)
        }
      }}
      type={editing ? 'submit' : undefined}
    >
      {
        <Typography style={{ fontWeight: 'bold' }} variant='subtitle1'>
          {editing ? 'Save' : 'Edit'}
        </Typography>
      }
    </Button>
  )

  const groups: any = signUp ? accountGroup : fieldGroups

  return (
    <Form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {editButton && getEditButton()}
      {Object.keys(groups).map((group) => {
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
            {groups[group].map((props: any) => makeField(props))}
          </Fragment>
        )
      })}
      {signUp && (
        <Button
          color='primary'
          variant='contained'
          style={{
            margin: '10px',
            width: '300px',
            borderRadius: '30px',
            padding: '10px 25px',
          }}
          type='submit'
          onClick={() => handleSubmit()}
        >
          <Typography variant='h4'>Sign Up</Typography>
        </Button>
      )}
      {editButton && getEditButton(true)}
    </Form>
  )
}
