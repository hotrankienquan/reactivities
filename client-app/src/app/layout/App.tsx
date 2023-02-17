import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activity/dashboard/ActivityDashboard';

import { v4 as uuid } from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities")
      .then(res => {
        // console.log(res.activities)
        setActivities(res.data)
    })
    
    
  }, [])

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }
  function handleCancelActivity() {
    setSelectedActivity(undefined);
  }
  function handleFormOpen(id? :string) {
    id ? handleSelectActivity(id) : handleCancelActivity();

    setEditMode(true);
  }
  function handleFormClose() {
    setEditMode(false);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)])
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }
  return (
    <>
      <NavBar
      handleFormOpen={handleFormOpen}
      />
      <Container style={{ marginTop:'6em'}}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          handleSelectAc={handleSelectActivity}
          handleCancelAc={handleCancelActivity}
          editMode={editMode}
          handleFormOpen={handleFormOpen}
          handleFormClose={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
      
    </>
  );
}

export default App;
