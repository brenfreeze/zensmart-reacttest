import React from 'react'
import styled from 'styled-components'

const StyledListComponent = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }
`

const ListComponent = ({ items, onItemClick }) => {
  return (
    <StyledListComponent>
      {
        items.map(item => (
          <ListItem onClick={() => onItemClick(item)}>{item.done ? '✔' : '✖'} {item.text}</ListItem>
        ))
      }
    </StyledListComponent>
  )
}

export default ListComponent