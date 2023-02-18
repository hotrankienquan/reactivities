import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import {useStore} from '../stores/store'

export default function NavBar() {
  const {activityStore} = useStore();
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
          <Button onClick={() => activityStore.openForm()} content='create a reactivities' color='teal'></Button>
        </Menu.Item>
        </Container>
    </Menu>
  )
}