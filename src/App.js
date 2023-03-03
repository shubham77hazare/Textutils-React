import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled ", "success");
      // document.title = "Dark mode enable"; //To change the title of the page
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled ", "success");
      // document.title = "Light mode enable"; //To change the title of the page
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Text converter"
          home="home"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About us"
        />

        <Alert alert={alert} />
        <div className="container">
        {/* <Switch> */}
          {/* exact is used beacuse react use exact matching otherwise it use partial matchingof location 
          here  /user and /user/home are different location and exact is used for exact matching
         /user --> component 1
          /user/home --> component 2 
            <Route exact path="/about"> 
              { <About />
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter text here"
                mode={mode}
              />
            {/* </Route> */}
         {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
};

export default App;
