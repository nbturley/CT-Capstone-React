// to be used in the future Log feature


import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'

export const useGetLogData = () => {
    const [ logData, setData ] = useState<[]>([])
    const carId = 'carIdPlaceHolder'

    async function handleDataFetch(){
        const result = await server_calls.get_logs(carId);
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { logData, getLogData:handleDataFetch}
}