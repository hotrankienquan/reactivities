import { observer } from 'mobx-react-lite';
import { SyntheticEvent, useState } from 'react';
import { Button, Header, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import ActivityListItem from './ActivityListItem';

export default observer(function ActivityList() {
  const {activityStore} = useStore();
  // const { deleteActivity, activitiesByDate, loading } = activityStore;
  const { groupedActivities } = activityStore;
  console.log(groupedActivities)
  return (
    <Segment>
       {groupedActivities.map(([group, activities]) => (
         <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
           {activities && activities.map((activity) => (
             
           
                      
             <ActivityListItem key={activity.id} activity={activity} />
              ))}
                </Fragment>
            ))}
    </Segment>
  )
})