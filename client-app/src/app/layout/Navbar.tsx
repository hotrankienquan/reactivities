import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
interface Props {
  handleFormOpen: (id?: string) => void;
}
export default function NavBar({handleFormOpen}:Props) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item>
          <img src="./assets/logo.png" alt="logo" style={{marginRight:'10px'
          }}/>
          reactivities
        </Menu.Item>
        <Menu.Item name='reactivities' />
        <Menu.Item>
          <Button onClick={() => handleFormOpen()} content='create a reactivities' color='teal'></Button>
        </Menu.Item>
        </Container>
    </Menu>
  )
}