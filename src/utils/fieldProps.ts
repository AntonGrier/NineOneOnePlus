export enum FieldType {
  Text = 'Text',
  List = 'List',
}

export interface FieldGroups {
  [group: string]: FieldProps[]
}

export interface FieldProps {
  label: string
  fieldName: string
  type: FieldType
  listItemLabel?: string
}

export const accountGroup: FieldGroups = {
  Account: [
    { label: 'Username', fieldName: 'username', type: FieldType.Text },
    { label: 'Password', fieldName: 'password', type: FieldType.Text },
  ],
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

export const fieldGroups: FieldGroups = {
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
