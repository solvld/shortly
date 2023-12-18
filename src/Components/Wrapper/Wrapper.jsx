import React from 'react'

function Wrapper({children}) {
  return (
    <div className='container mx-auto py-8 px-10 min-h-screen'>
      {children}
    </div>
  )
}

export default Wrapper;