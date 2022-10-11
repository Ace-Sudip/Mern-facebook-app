import React from "react";
import Posts from "../Components/Posts";
import Header from "../Components/Header";

function Dashboard() {
  return (
    <>
      <Header />

      <div className="mt-5">
        <Posts />
      </div>
    </>
  );
}

export default Dashboard;
