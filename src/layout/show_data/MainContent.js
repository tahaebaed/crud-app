import React from 'react'
import { BsGear, BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import { removeElement } from '../../store/Elments/Elements'
import { TableData } from '../../styles/DataShown'

const MainContent = ({ elem, setSelected }) => {
  const dispatch = useDispatch()
  return (
    <>
      <TableData colSpan={1}>{elem.id}</TableData>
      <TableData colSpan={1}>{elem.name}</TableData>
      <TableData colSpan={1}>
        <Button
          background='transparent'
          hover='#4cc8c0'
          type='button'
          handleClick={() => setSelected(currState => (currState = elem.id))}
        >
          <BsGear />
        </Button>
      </TableData>
      <TableData colSpan={1}>
        <Button
          background='#ef9494'
          hover='red'
          type='button'
          handleClick={() => dispatch(removeElement(elem.id))}
        >
          <BsTrash color='black' />
        </Button>
      </TableData>
    </>
  )
}

export default MainContent
