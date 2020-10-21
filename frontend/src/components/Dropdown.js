import React, { useState } from 'react';


const Dropdown = () => {
  const [active, setActive] = useState(false)

  const clickDropdown = () => {
    setActive(!active);
  }

  return (
    <div className={"dropdown" + (active ? " is-active" : "")} onClick={clickDropdown}>
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Choose</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item">Joseph Joestar</div>
          <div class="dropdown-item">Jotaro Kujo</div>
          <div class="dropdown-item">Caesar Zeppeli</div>

        </div>
      </div>
    </div>
  )
}

export default Dropdown;