// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();

// onAuthStateChanged(auth, user => {
//     if(user==null) { return; }
//     const { uid, displayName, email, emailVerified } = user;
//     console.log(uid, displayName, email, emailVerified);
// })

// const token = auth.currentUser?.uid

export const server_calls = {
    create_car: async (data: any = {}) => {
        console.log(data);
        
        
        // const response = await fetch(`http://127.0.0.1:5000/api/cars`,
        const response = await fetch(`https://ct-capstone-flask-s859.onrender.com/api/cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
            
            

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    get_cars: async () => {
        const response = await fetch(`https://ct-capstone-flask-s859.onrender.com/api/cars` , 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    update_car: async (id: string, data:any = {}) => {
        const response = await fetch(`https://ct-capstone-flask-s859.onrender.com/api/cars/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete_car: async (id: string) => {
        const response = await fetch(`https://ct-capstone-flask-s859.onrender.com/api/cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
    
    create_log: async (data: any = {}) => {
        // console.log(data);
        const response = await fetch(`https://ct-capstone-flask-s859.onrender.com/api/cars/Gd-wl6bBYMMKFCxKvmtkuysdjY0F-Kfnxs43o6VTOkE/logs`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
            
            

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    get_logs: async (car_id: string) => {
        const response = await fetch(`https://ct-capstone-flask-s859.onrender.com/api/cars/${car_id}/logs` , 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    update_log: async (car_id: string, log_id: string, data:any = {}) => {
        const response = await fetch(`https://ct-capstone-flask-s859.onrender.com/api/cars/${car_id}/logs/${log_id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete_log: async (car_id: string | undefined, log_id: string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars/${car_id}/logs/${log_id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
    
}