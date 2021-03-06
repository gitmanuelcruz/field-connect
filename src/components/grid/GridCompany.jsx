import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Company Name', width:200 },
  { field: 'title', headerName: 'Email', width: 300 },
  { field: 'body', headerName: 'Addres', width: 600 }
]

export const GridCompany = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])
  //console.log(tableData);
  
  return (
    <div className="container-xxl">
      <div className="mt-3 d-flex justify-content-center">

        <div style={{ height: 550, width: '100%', backgroundColor: '#ffffff', borderRadius: '30px' }}>
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            />
        </div>
      </div>
    </div>
  )
}
