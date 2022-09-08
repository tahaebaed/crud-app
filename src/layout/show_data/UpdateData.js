import React from 'react'
import { BsCheck, BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { updateElement } from '../../store/Elments/Elements'
import { TableData } from '../../styles/DataShown'

const UpdateData = ({ setQuery, setSelected, elem, query }) => {
  const dispatch = useDispatch()
  return (
    <>
      <TableData colSpan={1}>{elem.id}</TableData>
      <TableData colSpan={1}>
        <InputField
          status={false}
          type='text'
          query={query || elem.name}
          handleChange={e =>
            setQuery(currState => (currState = e.target.value))
          }
        />
      </TableData>
      <TableData colSpan={1}>
        <Button
          type='button'
          handleClick={() => {
            dispatch(
              updateElement({
                id: elem.id,
                value: query || elem.name,
              })
            )
            setQuery('')
            setSelected('')
          }}
          background='transparent'
          hover='#4cc8c0'
        >
          <BsCheck />
        </Button>
      </TableData>
      <TableData colSpan={1}>
        <Button
          background='#ef9494'
          hover='red'
          type='button'
          handleClick={() => setSelected(currState => (currState = ''))}
        >
          <BsTrash />
        </Button>
      </TableData>
    </>
  )
}

export default UpdateData
