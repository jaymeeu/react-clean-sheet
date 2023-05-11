import { withMousePosition } from './HOCsample'

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null
  }
  return (
    <div>
      <p>Mouse Position:</p>
      <div>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null
  }
  return (
    <p>({mousePosition.x}, {mousePosition.y})</p>
  )
}

  const PanelMouseTracker = withMousePosition(PanelMouseLogger)
    const PointMouseTracker = withMousePosition(PointMouseLogger)


const HOCUsage = () => {

  return (
    <div>
      <PanelMouseTracker/>
        <PointMouseTracker/>
    </div>
  )
}

export default HOCUsage
