import React from "react";
import Header from "./Header";

const AppLayout = ({ snbOpen, onSnbClick, children }) => {
  return (
    <div>
      <Header snbOpen={snbOpen} onSnbClick={onSnbClick} />

      {children}
    </div>
  );
};

export default AppLayout;
