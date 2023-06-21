import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'Sl No', width: 150 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
// ];
const columns = [
  { field: 'slno', headerName: 'Sl No', width: 100 },
  { field: 'customer_order_id', headerName: 'CUSTOMER ORDER ID', width: 150 },
  { field: 'salesorg', headerName: 'SALES ORG', width: 100 },
  { field: 'distribution_channel', headerName: 'DISTRIBUTION CHANNEL', width: 270, wrapText: true },
  { field: 'company_code', headerName: 'COMPANY CODE', width: 150 },
  { field: 'order_creation_date', headerName: 'ORDER CREATION DATE', width: 200 },
  { field: 'order_amount', headerName: 'ORDER AMOUNT', width: 150 },
  { field: 'order_currency', headerName: 'ORDER CURRENCY', width: 150 },
  { field: 'customer_number', headerName: 'CUSTOMER NUMBER', width: 200 },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const rows = [
  {
    id: 1,
    slno: '1',
    customer_order_id: '754349803',
    salesorg: '3911',
    distribution_channel: 'United Arab Emirates',
    company_code: '3290',
    order_creation_date: '01-01-2022',
    order_amount: '1405.54',
    order_currency: 'AED',
    customer_number: '1210499770',
  },
  {
    id: 2,
    slno: '2',
    customer_order_id: '930253442',
    salesorg: '2381',
    distribution_channel: 'Greece',
    company_code: '3290',
    order_creation_date: '01-01-2022',
    order_amount: '1441.4835',
    order_currency: 'EUR',
    customer_number: '1210351400',
  },
  {
    id: 3,
    slno: '3',
    customer_order_id: '819741436',
    salesorg: '3605',
    distribution_channel: 'Argentina',
    company_code: '3290',
    order_creation_date: '01-01-2022',
    order_amount: '1065.33',
    order_currency: 'EUR',
    customer_number: '1210124309',
  },
  {
    id: 4,
    slno: '4',
    customer_order_id: '881355361',
    salesorg: '3645',
    distribution_channel: 'Armenia',
    company_code: '3470',
    order_creation_date: '02-01-2022',
    order_amount: '302.85',
    order_currency: 'EUR',
    customer_number: '1231152',
  },
  {
    id: 5,
    slno: '5',
    customer_order_id: '821659852',
    salesorg: '2470',
    distribution_channel: 'United States of America',
    company_code: '3220',
    order_creation_date: '02-01-2022',
    order_amount: '8380.69',
    order_currency: 'EUR',
    customer_number: '1230021722',
  },
  {
    id: 6,
    slno: '6',
    customer_order_id: '957194828',
    salesorg: '3150',
    distribution_channel: 'United States Minor Outlying Islands',
    company_code: '3290',
    order_creation_date: '02-01-2022',
    order_amount: '545.85',
    order_currency: 'EUR',
    customer_number: '1210183107',
  },
  {
    id: 7,
    slno: '7',
    customer_order_id: '806322513',
    salesorg: '3396',
    distribution_channel: 'Serbia',
    company_code: '3290',
    order_creation_date: '02-01-2022',
    order_amount: '545.85',
    order_currency: 'EUR',
    customer_number: '1210499770',
  },
  {
    id: 8,
    slno: '8',
    customer_order_id: '922237131',
    salesorg: '2353',
    distribution_channel: 'Turks and Caico Islands',
    company_code: '3290',
    order_creation_date: '02-01-2022',
    order_amount: '562.73',
    order_currency: 'EUR',
    customer_number: '1210111951',
  },
  // Add more rows as needed
];



export default function DataGridDemo() {
  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
