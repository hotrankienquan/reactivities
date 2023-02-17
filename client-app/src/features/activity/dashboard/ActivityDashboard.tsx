import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  handleSelectAc: (id: string) => void;
  handleCancelAc: () => void;
  editMode: boolean;
  handleFormOpen: (id?: string) => void;
  handleFormClose: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
}
export default function ActivityDashboard({
  activities, selectedActivity, handleSelectAc, handleCancelAc,
  handleFormOpen, handleFormClose, editMode, createOrEdit, deleteActivity
  }: Props) {
  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList activities={activities}
          handleSelectAc={handleSelectAc}
          deleteActivity={deleteActivity}
        />
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedActivity && !editMode &&
       
          <ActivityDetails
            activity={selectedActivity}
            selectedActivity={selectedActivity}
            handleCancelAc={handleCancelAc}
          handleFormOpen={handleFormOpen}
          handleFormClose={handleFormClose}
          />
        }
        {editMode && 
          <ActivityForm
          activity={selectedActivity}
            handleFormClose={handleFormClose}
            createOrEdit={createOrEdit}
            ></ActivityForm>
          }
      </Grid.Column>
      </Grid>
  )
}