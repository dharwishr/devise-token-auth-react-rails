import React, { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import authApi from "apis/auth";
import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { Signin, Signup } from "components/Authentication";
import PrivateRoute from "components/Common/PrivateRoute";
import Dashboard from "components/Dashboard";
import { Create, Accept } from "components/Invitation";
import { UserProvider } from "contexts/UserContext";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const fetchUserInfo = async () => {
    try {
      const res = await authApi.getSession();
      if (res.data.islogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    registerIntercepts();
    setAuthHeaders();
    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        {" "}
        <Backdrop
          open={loading}
          sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

  return (
    <UserProvider value={currentUser}>
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact component={Accept} path="/invitations/accept" />
          <Route exact component={Signup} path="/signup" />
          <Route exact component={Signin} path="/signin" />
          <PrivateRoute
            component={Create}
            condition={isSignedIn}
            path="/invitations/create"
            redirectRoute="/signin"
          />
          <PrivateRoute
            component={Dashboard}
            condition={isSignedIn}
            path="/"
            redirectRoute="/signin"
          />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
