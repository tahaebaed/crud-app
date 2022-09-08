import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableContainer, TableData, TableRow } from '../../styles/DataShown'
import MainContent from './MainContent'
import UpdateData from './UpdateData'

const DataTable = () => {
  const { elements } = useSelector(store => store.elements)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')
  return (
    <TableContainer>
      <thead>
        <TableRow>
          <th>id</th>
          <th>name</th>
          <th>update</th>
          <th>Remove</th>
        </TableRow>
      </thead>
      <tbody>
        {elements.length === 0 ? (
          <TableRow>
            <TableData colSpan={4}>there is no elements</TableData>
          </TableRow>
        ) : (
          elements.map((elem, index) => (
            <TableRow style={{ margin: '1rem' }} key={index}>
              {selected === elem.id ? (
                <UpdateData
                  elem={elem}
                  query={query}
                  setQuery={setQuery}
                  setSelected={setSelected}
                />
              ) : (
                <MainContent elem={elem} setSelected={setSelected} />
              )}
            </TableRow>
          ))
        )}
      </tbody>
    </TableContainer>
  )
}

export default DataTable
