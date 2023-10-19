import './ColorBox.css';
import { useState } from 'react';
const Box = ({ colors }) => {
    console.log(colors)
   const [myColor,setMyColor] = useState("red")
   
  return (
    <div className="ColorBox" >
    
    </div>
  );
};

export default Box;