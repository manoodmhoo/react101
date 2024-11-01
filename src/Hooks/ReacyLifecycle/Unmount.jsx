import React, { useEffect } from 'react'

export default function Unmount() {

    useEffect(() => {
        // Mounting
        console.log('Functional Component will mount')

        // Unmounting
        return () => {
            console.log('Functional Component will unmount')
        }
    },[])

  return (
    <>Unmount</>
  )
}
