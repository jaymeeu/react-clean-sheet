import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y : e.clientY
      })
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = ({mousePosition}) => {
  // The below if statement can be removed after the render props pattern is implemented
 
  return (
    <MousePosition
      render={(data)=>(
        <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {data.x}</span>
        <span>y: {data.y}</span>
      </div>
      </div>
      )}
    />
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  
  return (
    <MousePosition
      render={(data) => (
        <p>
          ({data.x}, {data.y})
        </p>
      )}
    />
  )
};

function RenderProps2() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default RenderProps2;
