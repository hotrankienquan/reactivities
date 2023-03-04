import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './Navbar';


import { observer } from 'mobx-react-lite';
import {useLocation, Outlet} from 'react-router-dom'
import HomePage from '../../features/home/HomePage';
function App() {
  
  const location = useLocation();

  
  return (
    <>
    {
      location.pathname === '/' ? <HomePage /> :
      
      (<>
          <NavBar
          />
          <Container style={{ marginTop: '6em' }}>
            <Outlet />
          </Container>
      
        </>
        )
      }
    </>
  );
}

export default observer(App);
