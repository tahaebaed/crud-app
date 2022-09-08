import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { addElement } from '../../store/Elments/Elements'
import { FormStyle } from '../../styles/FormStyle'

const AddForm = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  return (
    <FormStyle
      onSubmit={e => {
        e.preventDefault()
        query !== ''
          ? dispatch(addElement({ id: Math.random() * 10, name: query }))
          : alert('Please Add valid Query')

        setQuery('')
      }}
    >
      <InputField
        type='text'
        placeHolder='Create new item...'
        query={query}
        handleChange={e => setQuery(state => (state = e.target.value))}
        status={true}
      />
      <Button type='submit' background='#4cc8c0' hover='#319f98'>
        <BsPlusLg color='#fff' />
      </Button>
    </FormStyle>
  )
}

export default AddForm
