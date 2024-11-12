import React from "react";
import "./Slogan.scss";

interface SloganProps {
   slogan: string;
}

const Slogan: React.FC<SloganProps> = ({ slogan }) => {
   return (
      <div className="slogan">
         <div className="slogan-content">
            <p>{slogan}</p>
         </div>
      </div>
   );
};

export default Slogan;
