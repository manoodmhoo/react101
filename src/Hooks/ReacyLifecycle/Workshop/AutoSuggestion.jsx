import React, { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

export default function AutoSuggestion() {
   const [querySearch, setQuerySearch] = useState("*")
   const [resultSearch, setResultSearch] = useState([])

   const fetchApi = async () => {
        const urlApi = `https://demo.dataverse.org/api/search?q=description:${querySearch}&per_page=50`
        const response = await fetch(urlApi)
        if(!response.ok) throw new Error('Response not ok')
        const data = await response.json()
        setResultSearch(data.data.items);
   }

   const debounceFetchApi = debounce(fetchApi, 1000)

   useEffect(() => {
        // fetchApi(querySearch)
        debounceFetchApi()

        return () => {
            debounceFetchApi.cancel()
        }
   }, [querySearch])
   
  return (
    <>
        <div>
            Result Search: 
            <input type="text" onChange={(e) => setQuerySearch(e.target.value)} />
            <ul>
                {resultSearch.map((item, index) => (
                    <li key={index}>{item.description}</li>
                ))}
            </ul>
        </div>
    </>
  )
}
