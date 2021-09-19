import { Form } from 'formik'
import { useState } from 'react'
import { UserFields } from '../../../utils/userFields'

export const UserInfoForm = () => {
  const [editing, setEditing] = useState(false)
  return <UserFields editButton editing={editing} setEditing={setEditing} />
}
