import React from 'react';
import { Button, Container, Menu, Image, Dropdown } from 'semantic-ui-react';
import {useStore} from '../stores/store'
import { NavLink ,Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite'
export default observer(function NavBar() {
  const {userStore: {user, logout}} = useStore();
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img src="./assets/logo.png" alt="logo" style={{marginRight:'10px'
          }}/>
          reactivities
        </Menu.Item>
        <Menu.Item position='right'>
            <Image avatar spaced='right' src={user?.image || '/assets/user.png'} />
            <Dropdown pointing='top left' text={user?.displayName}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user' />
                    <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
        </Container>
    </Menu>
  )
})