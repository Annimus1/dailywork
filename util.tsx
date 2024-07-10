import { Float } from "react-native/Libraries/Types/CodegenTypes";

type Job = { 
  date: string;
  title: string;
  description: string | null;
  category: "Mantenimiento"|"Compresor"|"Cambio de partes" | "Carga de Gas";
  payment: Float| null;
  status : "Pagado" | "Pendiente"
  paymentDue: string | null;
}

const testJobs: Job[] = [
  {
    date: '2023-07-09',
    title: 'test1',
    description: 'asmdlaksdml lakdnl lakdnml aksmdlmdla djqjbhduq m wdq skjq djhq j jq dq dygq su q sd qsd oqsd q',
    category: 'Mantenimiento',
    payment: 0.0,
    status: 'Pendiente',
    paymentDue: null
  },
  {
    date: '2023-07-08',
    title: 'test2',
    description: 'Lorem Ipsum',
    category: 'Carga de Gas',
    payment: 20.0,
    status: 'Pagado',
    paymentDue: '2023-07-08'
  },
  {
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  }, {
    date: '2023-07-09',
    title: 'test1',
    description: 'asmdlaksdml lakdnl lakdnml aksmdlmdla djqjbhduq m wdq skjq djhq j jq dq dygq su q sd qsd oqsd q',
    category: 'Mantenimiento',
    payment: 0.0,
    status: 'Pendiente',
    paymentDue: null
  }, {
    date: '2023-07-09',
    title: 'test1',
    description: 'asmdlaksdml lakdnl lakdnml aksmdlmdla djqjbhduq m wdq skjq djhq j jq dq dygq su q sd qsd oqsd q',
    category: 'Mantenimiento',
    payment: 0.0,
    status: 'Pendiente',
    paymentDue: null
  }, {
    date: '2023-07-09',
    title: 'test1',
    description: 'asmdlaksdml lakdnl lakdnml aksmdlmdla djqjbhduq m wdq skjq djhq j jq dq dygq su q sd qsd oqsd q',
    category: 'Mantenimiento',
    payment: 0.0,
    status: 'Pendiente',
    paymentDue: null
  }, {
    date: '2023-07-09',
    title: 'test1',
    description: 'asmdlaksdml lakdnl lakdnml aksmdlmdla djqjbhduq m wdq skjq djhq j jq dq dygq su q sd qsd oqsd q',
    category: 'Mantenimiento',
    payment: 0.0,
    status: 'Pendiente',
    paymentDue: null
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },{
    date: '2023-07-07',
    title: 'test3',
    description: null,
    category: 'Compresor',
    payment: 5.0,
    status: 'Pagado',
    paymentDue: '2023-07-07'
  },
]

export const CategoryData = [
  { label: "Mantenimiento", value: 'Mantenimiento' },
  { label: "Compresor", value: 'Compresor' },
  { label: "Cambio de partes", value: "Cambio de partes" },
  { label: "Carga de Gas", value: "Carga de gas" }
]

export const StatusData = [
  {label:'Pagado',value:'Pagado'},
  {label:'Pendiente',value:'Pendiente'}
]

export default testJobs;