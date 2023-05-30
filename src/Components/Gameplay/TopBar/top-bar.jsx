import { useSelector } from 'react-redux'
import GameBarButton from '../../Common/ao-button/GameBarButton/game-bar-button'
import './top-bar.scss'
import { selectFps } from '../../../redux/GameplaySlices/GameStateSlice'

export default function TopBar({styles}) {
  const fps = useSelector(selectFps)
  const onClose = evt => {
    window.parent.BabelUI.OpenVBDialog('frmCerrar')
  }
  return (
    <div className={'top-bar ' + styles}>
      <img className='ao-logo' src={require('../../../assets/Misc/ao20_horizontal.png')} />
      <div className='gm-command-area'></div>
      <div className='fps-area'>
        <p className='fps'>FPS: {fps}</p>
      </div>
      <div className='location-coords'>
        <p className='map-name'>ciudad de ullathorpe</p>
        <p className='map-coords'>100-54-40</p>
      </div>
      <div className='button-online-area'>
        <GameBarButton styles='bar-button'>
          <img src={require('../../../assets/Icons/gameplay/ico_gear.png')}></img>
        </GameBarButton>
        <GameBarButton styles='bar-button'>
          <img src={require('../../../assets/Icons/gameplay/ico_info.png')}></img>
        </GameBarButton>
        <span className='spacer'></span>
        <GameBarButton styles='bar-button'>
          <img src={require('../../../assets/Icons/gameplay/ico_minimize.png')}></img>
        </GameBarButton>
        <GameBarButton styles='bar-button' onClick={onClose}>
          <img src={require('../../../assets/Icons/gameplay/ico_close.png')}></img>
        </GameBarButton>
      </div>
    </div>
  )
}