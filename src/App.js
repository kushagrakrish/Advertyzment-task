import React from "react";
import "./App.css";
import CardLayout from "./components/CardLayout";

export const UserContext = React.createContext();
const App = () => {
  return (
    <div>
      <CardLayout />
    </div>
  );
};

export default App;
