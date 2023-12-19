import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
const styles = {
  background: 'transparent',
  padding: '2px',
  border: 'none',
}
function TooltipPositioned({ position, children }) {
  return (
    <>
      <OverlayTrigger
        key={position}
        placement={position}
        overlay={
          <Tooltip id={`tooltip-${position}}`} style={{ ...styles }}>
            {children}
          </Tooltip>
        }
      >
        {children}
      </OverlayTrigger>
    </>
  )
}

export default TooltipPositioned
