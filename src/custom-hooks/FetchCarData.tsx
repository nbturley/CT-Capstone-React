import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'

export const useGetCarData = () => {
    const [ carData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get_cars();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { carData, getCarData:handleDataFetch}
}