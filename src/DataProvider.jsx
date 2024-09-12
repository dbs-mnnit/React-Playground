import React from 'react'
import { DataContext } from './CreateContext';

function DataProvider({children}) {

    const data = "Hello World";

  return (
    <DataContext.Provider value = {{data}} >
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider




