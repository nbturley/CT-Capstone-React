import { useState } from 'react';
import CarDataTable from '../components/CarDataTable'
// import LogDataTable from '../components/LogDataTable'

const Service = () => {
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);

    const handleCarSelect = (carId: string) => {
        setSelectedCarId(carId);
    }
    console.log(selectedCarId);

  return (
    <div>
    <h2 className="p-3 bg-indigo-200 my-2 rounded">My Cars</h2>
      <div className="p-3 my-2 rounded">
        <CarDataTable onCarSelect={handleCarSelect} />
        {/* Commented out LogDataTable while working on that feature */}
        {/* <LogDataTable selectedCarId={selectedCarId} /> */}
      </div>
    </div>
  )
}

export default Service