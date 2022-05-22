import React, { useEffect, useState } from 'react'
import Button from '../common/Button/Button'
import { PopUpProps } from './PopUp.props'

const PopUp = ({
  popUpActive,
  setPopUpActive,
  setConfirmed,
}: PopUpProps): JSX.Element => {
  const [secs, setSecs] = useState<number>(5)
  console.log('render')

  useEffect(() => {
    if (secs === 0) {
      setSecs(0)
    } else {
      const timer = setTimeout(() => {
        setSecs(secs - 1)
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [popUpActive && secs])
  const handleClosePopUp = () => {
    setPopUpActive(false)
  }
  const hadnleConfirm = () => {
    setPopUpActive(false)
    setConfirmed(true)
    alert('Действие выполнено')
  }
  return (
    <div className="popUp" style={{ display: !popUpActive ? 'none' : 'block' }}>
      <p>
        <span onClick={handleClosePopUp}>&#10006;</span>
      </p>
      <h3>Согласие с правилами</h3>
      <p className="text">
        Для данной функции особые использования и правила использования, поэтому
        их необходимо подтвердить
      </p>
      <div className="buttons">
        <Button onClick={handleClosePopUp}>Отмена</Button>
        <Button
          disabled={secs ? true : undefined}
          onClick={hadnleConfirm}
          style={{
            cursor: secs ? 'default' : 'pointer',
          }}
        >
          Подтвердить {secs ? secs : undefined}
        </Button>
      </div>
    </div>
  )
}

export default React.memo(PopUp)
