import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;

  display: grid;
  place-content: center;
  grid-auto-flow: column;
  grid-gap: 2rem;
`

const ButtonContainer = styled.div`

`

const Button = styled.button`
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: #0b6bf2;
  color: #fff;
  outline: none;
  cursor: pointer;

  ${props => props.pressed && css`
    background: #0243eb;
  `}

  &:active {
    background: #0243eb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Buttons = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button>Close Shipment</Button>
        <p>Neutral</p>
      </ButtonContainer>
      <ButtonContainer>
        <Button pressed>Close Shipment</Button>
        <p>Pressed</p>
      </ButtonContainer>
      <ButtonContainer>
        <Button disabled>Close Shipment</Button>
        <p>Disabled</p>
      </ButtonContainer>
    </Container>
  )
}

export default Buttons