import React, {useContext} from 'react'
import { DataContext } from '../CreateContext'

function Children() {
    const {data} = useContext(DataContext)
  return (
    <div>
      {data}
      <button >Change Children Data</button>
    </div>
  )
}

export default Children
