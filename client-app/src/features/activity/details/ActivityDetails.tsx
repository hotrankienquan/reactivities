import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from '../../../app/stores/store';
import { Link, useParams } from 'react-router-dom';
import {observer} from 'mobx-react-lite'
export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
  const { id } = useParams();

  React.useEffect(() => {
  
    if (id) loadActivity(id);
  }, [loadActivity, id])
  
  if (loadingInitial || !activity) return <LoadingComponent />;
  return (
    <>
    
      {activity &&
    
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
              <Button as={Link} to={`/manage/${activity.id}`} basic color='blue' content='Edit' />
              <Button as={Link} to='/activities' basic color='grey' content='Cancel' />
            </Button.Group>
        
          </Card.Content>
        </Card>
      }
    </>
  )
  
});