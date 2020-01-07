import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Reservations from "./components/reservations";
import Calendar from "./components/calendar";
import Rooms from "./components/rooms";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import RoomForm from "./components/roomForm";
import ReservationForm from "./components/reservationForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/reservations/:id" component={ReservationForm} />
          <Route path="/reservations/new" component={ReservationForm} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/rooms/:id" component={RoomForm}></Route>
          <Route path="/rooms" component={Rooms}></Route>
          <Route path="/calendar" component={Calendar}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/calendar" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
