import React from 'react'
import GreatGreatGrandparent from './family/GreatGreatGrandparent'

import DataProvider from './DataProvider'



function App() {
  return (
    <>
    <DataProvider>
      <GreatGreatGrandparent>
        
      </GreatGreatGrandparent>
      </DataProvider>
    </>
  )
}

export default App
