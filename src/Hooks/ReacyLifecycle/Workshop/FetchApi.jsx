import React, { useEffect, useState } from 'react'

export default function FetchApi() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch API
        const fetchApi = async () => {
            try {
                const url = 'https://jsonplaceholder.typicode.com/todos'
                const response = await fetch(url)
                if(!response.ok) throw new Error('HTTP Error! status: ' + response.status)
                const data = await response.json()
                setData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchApi()
    }, []);

    return (
        <>
            <div> Fetching Api </div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && 
            <ul>
                {data.map((item, index) => (
                    <li key={item.id}>ID: {item.id} Title:{item.title}</li>
                ))}
            </ul>}
        </>
    )
}
