import React from 'react'
import { Assets } from '../../assets/assets'
import './Appdownload.css'
const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience dowload <br /> Tomato App</p>
        <div className="download-platform">
            <img src={Assets.play_store} alt="" />
            <img src={Assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload