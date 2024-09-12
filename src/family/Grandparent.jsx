import React, {useContext} from 'react'
import Parent from './Parent'
import { DataContext } from '../CreateContext'

function Grandparent() {
  const {data} = useContext(DataContext)
  return (
    <>  
    Grand Parent : {data}
    <button>Change Parent Data</button>
    <Parent/>
    </>
  )
}

export default Grandparent
