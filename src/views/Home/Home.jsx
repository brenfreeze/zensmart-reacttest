import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const DisplayLink = styled(Link)`
  position: relative;
  font-size: 5rem;
  font-weight: 300;
  text-decoration: none;
  color: black;

  &:visited {
    text-decoration: none;
    color: black;
  }

  &:hover {
    color: black;

    &::after {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 0.125rem;
      background: black;
      left: 0;
      bottom: 0;
    }
  }
`

const Home = () => {
  return (
    <Container>
      <DisplayLink to="/todo-list">TodoList</DisplayLink>
      <DisplayLink to="/three-lg-btns">3LargeButtons</DisplayLink>
    </Container>
  )
}

export default Home