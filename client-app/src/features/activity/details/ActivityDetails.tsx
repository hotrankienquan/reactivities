import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from '../../../app/stores/store';

export default function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectActivity} = activityStore;

    if (!activity) return <LoadingComponent />;
  return (
    <>
    
    { activity &&
    
    <Card fluid>
      {/* <Image src={`/assets/categoryImages/linux.png`} /> */}
      <Card.Content>
        <Card.Header>{activity && activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity && activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity && activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={'2'}>
          <Button onClick={() => openForm(activity && activity.id)} content='edit' color='green'></Button>
          <Button content='cancel' color='red' onClick={cancelSelectActivity}></Button>
        </Button.Group>
        
      </Card.Content>
    </Card>
      }
      </>
  )
  
}