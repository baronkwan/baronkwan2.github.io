import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const ToggleButton = ({ isToggleOpen }) => {
  return isToggleOpen ? (
    <FontAwesomeIcon icon={faTimes} />
  ) : (
    <FontAwesomeIcon icon={faBars} />
  )
}

export default ToggleButton