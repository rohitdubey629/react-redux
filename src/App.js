import React from "react";
import User from "./User";
import HomeContainer from "./containers/HomeContainer";
const App = () => {
  return (
    <>
      <div>App component</div>
      <HomeContainer />
      {/* <User data={{ name: "rohit dubey", age: 25 }} /> */}
    </>
  );
};
export default App;
