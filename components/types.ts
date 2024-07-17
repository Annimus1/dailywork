export type JobType = {
  title: String,
  description: String | null,
  status: Number | null,
  category: Number | null,
  payment: Number | null,
  date: String,
  dueDate: String
}

export type FeatureType = {
  label: String,
  value: Number
}