import { Formik } from 'formik'
import { BloodType, User } from '../../../models'
import { UserInfoForm } from './UserInfoForm'

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

export const UserInfoFormController = () => {
  const onValidate = (values: any) => {
    return {}
  }
  const onSubmit = (values: any) => {
    console.log('submitting', values)
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
