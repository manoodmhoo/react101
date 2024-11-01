import React, { useEffect } from 'react'

export default function Mount() {

   useEffect(() => {
     console.log('Functional Component did mount')
    //  return () => {
    //  }
   }, [])
   

  return (
    <>Mount</>
  )
}
