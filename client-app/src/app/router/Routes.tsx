import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activity/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activity/details/ActivityDetails";
import ActivityForm from "../../features/activity/form/ActivityForm";

export const routes: RouteObject[] = [
  // RouteObject[] : mảng gồm các object 
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
        ]
    }
]

export const router = createBrowserRouter(routes);