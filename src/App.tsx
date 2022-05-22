import React, { useState } from 'react'
import './global.css'
import Button from './components/common/Button/Button'
import PopUp from './components/PopUp/PopUp'

function App(): JSX.Element {
  const [popUpActive, setPopUpActive] = useState<boolean>(false)
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const hadnleShowPopUp = () => {
    setPopUpActive(true)
  }
  return (
    <div className="app">
      <div className="startButtonWrapper">
        <Button
          onClick={hadnleShowPopUp}
          style={{
            display: popUpActive ? 'none' : 'block',
            cursor: confirmed ? 'default' : 'pointer',
          }}
          disabled={confirmed && true}
        >
          Выполнить действие
        </Button>
      </div>
      <PopUp
        popUpActive={popUpActive}
        setPopUpActive={setPopUpActive}
        confirmed={confirmed}
        setConfirmed={setConfirmed}
      />
    </div>
  )
}

export default App
