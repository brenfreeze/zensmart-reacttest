import React, { useState } from 'react'
import styled from 'styled-components'

import ListComponent from './components/ListComponent'

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1.5rem;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  font-weight: 400;
`

const TodoList = () => {
  const [ items, setItems ] = useState([
    {
      text: 'Buy Milk',
      done: false
    }, 
    {
      text: 'Buy Eggs',
      done: false
    }, 
    {
      text: 'Buy Butter',
      done: false
    }, 
    {
      text: 'Buy Flour',
      done: false
    }, 
    {
      text: 'Buy Yeast',
      done: false
    }, 
  ])

  const onItemClick = (item) => {
    if (!item.done) {
      const index = items.indexOf(item)
      const newItems = items      
      newItems.splice(index, 1, { ...item, done: true})

      setItems([ ...newItems ])
    }
  }

  return (
    <Container>
      <Title>Todo List</Title>
      <ListComponent items={items} onItemClick={onItemClick} />
    </Container>
  )
}

export default TodoList