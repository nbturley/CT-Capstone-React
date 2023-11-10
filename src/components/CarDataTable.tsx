import { useState } from 'react'
import Modal from "./CarModal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetCarData } from '../custom-hooks/FetchCarData';

interface CarDataTableProps {
    onCarSelect: (carId: string) => void;
}

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width:70, hide: true },
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1 },
    { field: 'color', headerName: "Color", flex: 1 },
]

const CarDataTable: React.FC<CarDataTableProps> = ({ onCarSelect }) => {
    const [ open, setOpen ] = useState(false);
    const { carData, getCarData } = useGetCarData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    const [ selectedCarId, setSelectedCarId ] = useState<string | null>(null);

    console.log(onCarSelect); // Remove this when working on passing the carId prop to the logDataTable
    

    const handleOpen = () => {
        setOpen(true)
    } 

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete_car(selectionModel[0]);
        getCarData();
        console.log(`Selection model: ${selectionModel}`)
        console.log(`selectedCarId: ${selectedCarId}`)
        setTimeout( () => {
            window.location.reload()
        }, 500)
    }

    const handleCarSelect = (carId: string) => {
        setSelectedCarId(carId);
    }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className={open ? "hidden" : "flex flex-row"}>
            <div>
                <button
                    className="p-3 bg-indigo-200 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Car
                </button>
            </div> 
            <button onClick={handleOpen} className="p-3 bg-indigo-200 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
            <button onClick={deleteData} className="p-3 bg-indigo-200 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-indigo-200 my-2 rounded">My Cars</h2>
            <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
                setSelectedCarId(item)
            }}
            // Pass the selected car ID to the handleCarSelect function
            onRowClick={(params) => {
                handleCarSelect(params.row.id);
            }}
            />
        </div>
    </>
  )
}

export default CarDataTable