import styled from 'styled-components'

export const FormStyle = styled.form`
  width: 25%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const InputStyle = styled.input`
  padding: 0.5rem;
  width: 70%;
  border: ${props => (props.status ? '1px solid #ccc' : 'none')};
  border-radius: 5px;
  &:focus {
    border: ${props => (props.status ? '1px solid #ccc' : 'none')};
  }
`

export const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  width: 25%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${props => props.background};
  &:hover {
    background: ${props => props.hover};
  }
`
