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
  // { field: 'checkbox', headerName: '', width: 100, renderCell: () => <input type="checkbox" /> },
  { field: 'slno', headerName: 'Sl No', width: 100 },
  { field: 'customer_order_id', headerName: 'CUSTOMER ORDER ID', width: 200 },
  { field: 'salesorg', headerName: 'SALES ORG', width: 150 },
  { field: 'distribution_channel', headerName: 'DISTRIBUTION CHANNEL', width: 100, wrapText: true },
  { field: 'company_code', headerName: 'COMPANY CODE', width: 150 },
  { field: 'order_creation_date', headerName: 'ORDER CREATION DATE', width: 200 },
  { field: 'order_amount', headerName: 'ORDER AMOUNT', width: 150 },
  { field: 'order_currency', headerName: 'ORDER CURRENCY', width: 150 },
  { field: 'customer_number', headerName: 'CUSTOMER NUMBER', width: 200 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
