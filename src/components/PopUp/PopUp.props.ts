export interface PopUpProps {
  popUpActive: boolean
  setPopUpActive: React.Dispatch<React.SetStateAction<boolean>>
  confirmed: boolean
  setConfirmed: React.Dispatch<React.SetStateAction<boolean>>
}
