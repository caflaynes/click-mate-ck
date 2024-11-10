import React from "react";
import "./Slogan.scss";

interface SloganProps {
   slogan: string;
}

const Slogan: React.FC<SloganProps> = ({ slogan}) => {
   return (
         <div className="slogan-container">
            <div className="slogan">
               <p>{slogan}</p>
            </div>
         </div>
   );
};

export default Slogan;
