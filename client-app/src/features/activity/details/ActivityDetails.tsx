import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
interface Props {
  activity: Activity | undefined;
  selectedActivity: Activity | undefined;
  handleCancelAc: () => void;
  handleFormOpen: (id?: string) => void;
  handleFormClose: () => void;
}
export default function ActivityDetails({ activity, handleCancelAc, selectedActivity, handleFormOpen
,handleFormClose}: Props) {
  return (
    <>
    
    { selectedActivity &&
    
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
          <Button onClick={() => handleFormOpen(activity && activity.id)} content='edit' color='green'></Button>
          <Button content='cancel' color='red' onClick={handleCancelAc}></Button>
        </Button.Group>
        
      </Card.Content>
    </Card>
      }
      </>
  )
  
}