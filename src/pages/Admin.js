import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table'
import AdminService from '../service/Admin.service'
function Admin() {
   const [data, setData] = useState([]);
    useEffect(() => {
        AdminService.List().then((res) => {
             setData(res);

        }, []);
    });
    const columns = [
        {
            title:'Sifra knjige', field:'sifra_knjige'
        },
        {
            title:'Naslov', field:'naslov'
        },
        {
            title:'Autor', field:'autor'
        },
        {
            title:'Izdavac', field:'izdavac'
        },
        {
            title:'Godina izdavanja', field:'godina_izdavanja'
        }
    ];
    return (
        <>
            <MaterialTable title="Admin Table"
            data={data}
            columns={columns}
            options={{
                exportButton:true,
                paging:false
            }}
            editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      setData([...data, newData]);
                      
                      resolve();
                    }, 1000)
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...data];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setData([...dataUpdate]);
        
                      resolve();
                    }, 1000)
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataDelete = [...data];
                      const index = oldData.tableData.id;
                      dataDelete.splice(index, 1);
                      setData([...dataDelete]);
                      
                      resolve()
                    }, 1000)
                  }),
              }}
            
            
            />
        </>
    )
}

export default Admin

  
    
  

