import { useState } from 'react'
import Modal from "./LogModal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetLogData } from '../custom-hooks/FetchLogData';

interface LogDataTableProps {
    selectedCarId?: string;
}

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width:70, hide: true },
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1 },
    { field: 'color', headerName: "Color", flex: 1 },
]

// const LogDataTable: React.FC<LogDataTableProps> = ({ selectedCarId }) => {
const LogDataTable = ( props:LogDataTableProps ) => {
    const [ open, setOpen ] = useState(false);
    const { logData, getLogData } = useGetLogData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    } 

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete_log(props.selectedCarId, selectionModel[0]);
        getLogData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {
            window.location.reload()
        }, 500)
    }


  return (
    <>
        <Modal 
            selectedCarId={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className={open ? "hidden" : "flex flex-row"}>
            <div>
                <button
                    className="p-3 bg-indigo-200 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    New Service Log
                </button>
            </div> 
            <button onClick={handleOpen} className="p-3 bg-indigo-200 rounded m-3 hover:bg-slate-800 hover:text-white" >Update Service Log</button>
            <button onClick={deleteData} className="p-3 bg-indigo-200 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-indigo-200 my-2 rounded">*My Car's Service Logs* Coming Soon</h2>
            <DataGrid rows={logData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default LogDataTable