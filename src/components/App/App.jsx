import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';
import MyTrips from '../Trips/MyTrips.jsx';
import AddTrips from '../Trips/AddTrips.jsx';
import EachTrip from '../Trips/EachTrip.jsx';
import Categories from '../Categories/Categories.jsx';
import FlightInfo from '../Categories/FlightInfo.jsx';
import GuestInfo from '../Categories/GuestInfo.jsx';
import Lodging from '../Categories/Lodging.jsx';
import SuitCase from '../Categories/SuitCase.jsx';
import Misc from '../Categories/Misc.jsx';
import EditTrip from "../Trips/EditTrip.jsx";



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
           
            exact
            path="/about"
          >
            <AboutPage />
          </Route>
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>




          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/my_trips"
          >
            <MyTrips />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/add_trips"
          >
            <AddTrips />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/each_trip"
          >
            <EachTrip />
          </ProtectedRoute>

          <Route
            exact
            path="/categories">



            <Categories  className='icon-avatar'/>

          </Route>

          <Route
            exact
            path="/flight_info"  >
            <FlightInfo /> 
          </Route>


          <Route
            exact
            path="/guest_info" // Define the path for the flight info page
          >
            <GuestInfo /> 
          </Route>

          <Route
            exact
            path="/lodging" // Define the path for the flight info page
          >
            <Lodging/> 
          </Route>


          <Route
            exact
            path="/suit_case" // Define the path for the flight info page
          >
            <SuitCase/> 
          </Route>


          <Route
            exact
            path="/misc" // Define the path for the flight info page
          >
            <Misc/> 
          </Route>


          <Route exact path="/trips/:tripId/edit" component={EditTrip} />

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/my_trips"
          >
            <MyTrips />
          </ProtectedRoute>












          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
