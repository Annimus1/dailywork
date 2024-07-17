export type JobType = {
  title: String,
  description: String | null,
  statusID: Number ,
  categoryID: Number,
  payment: Number,
  date: String,
  dueDate: String
}

export type FeatureType = {
  label: String,
  value: Number
}