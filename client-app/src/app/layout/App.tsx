import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activity/dashboard/ActivityDashboard';

import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    
    agent.Activities.list()
    .then(response => {
      let activities: Activity[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity);
      })
      setActivities(activities);
      setLoading(false);
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
    // setActivities([...activities.filter(x => x.id !== id)])
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
        setActivities([...activities.filter(x => x.id !== id)])
        setSubmitting(false);
    })
  }

  function handleCreateOrEditActivity(activity: Activity) {
    // activity.id
    //   ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
    //   : setActivities([...activities, { ...activity, id: uuid() }]);
    // setEditMode(false);
    // setSelectedActivity(activity);
    setSubmitting(true);
    if (activity.id) {
        agent.Activities.update(activity).then(() => {
            setActivities([...activities.filter(x => x.id !== activity.id), activity]);
            setSelectedActivity(activity);
            setEditMode(false);
            setSubmitting(false);
        })
    } else {
        activity.id = uuid();
        agent.Activities.create(activity).then(() => {
            setActivities([...activities, activity]);
            setSelectedActivity(activity);
            setEditMode(false);
            setSubmitting(false);
        })
    }
  }
  if (loading) return <LoadingComponent content='Loading app...' />
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
          submitting={submitting}
        />
      </Container>
      
    </>
  );
}

export default App;
