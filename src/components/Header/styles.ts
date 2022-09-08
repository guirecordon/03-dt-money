import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.white};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-300']};
    transition: background-color 0.2s;
  }
`
