import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activity/dashboard/ActivityDashboard';

import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
function App() {
  const { activityStore } = useStore();
  
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

 
  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app...' />
  return (
    <>
      <NavBar
      />
      <Container style={{ marginTop:'6em'}}>
        <ActivityDashboard
         
        />
      </Container>
      
    </>
  );
}

export default observer(App);
