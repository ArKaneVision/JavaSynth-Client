import React from 'react'
import { Silver, Basic } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'
import EffectMeter from '../../Styles/EffectMeter'
import EffectRack from '../../Styles/EffectRack'
import EffectLabel from '../../Styles/EffectLabel'
import WetDryBox from '../../Styles/WetDryBox'

const TripleEffectUnit = ({ mainEffect, scale1, scale2, scale3, effect1, effect2, effect3, patch, setPatch, highRange1, lowRange1, highRange2, lowRange2, highRange3, lowRange3 }) => {
  const handleChange1 = (value) => {
    const newValue = (value / scale1)
    setPatch({ ...patch, effects: { ...patch.effects, [mainEffect]: { ...patch.effects[mainEffect], [effect1]: newValue } } })
  }
  const handleChange2 = (value) => {
    const newValue = (value / scale2)
    setPatch({ ...patch, effects: { ...patch.effects, [mainEffect]: { ...patch.effects[mainEffect], [effect2]: newValue } } })
  }
  const handleChange3 = (value) => {
    const newValue = (value / scale3)
    setPatch({ ...patch, effects: { ...patch.effects, [mainEffect]: { ...patch.effects[mainEffect], [effect3]: newValue } } })
  }
  const changeWetDry = (value) => {
    const newValue = (value / 10)
    setPatch({ ...patch, effects: { ...patch.effects, [mainEffect]: { ...patch.effects[mainEffect], wetDry: newValue } } })
  }
  return (
    <div>
      <EffectRack>
        <EffectMeter>
          <Silver
            diameter={50}
            min={lowRange1}
            max={highRange1}
            step={1}
            value={Math.floor(patch.effects[mainEffect][effect1] * scale1)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange1}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={patch.effects[mainEffect][effect1]} disabled={true}/>
        </EffectMeter>
        <EffectMeter>
          <Silver
            diameter={50}
            min={lowRange2}
            max={highRange2}
            step={1}
            value={Math.floor(patch.effects[mainEffect][effect2] * scale2)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange2}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={patch.effects[mainEffect][effect2]} disabled={true}/>
        </EffectMeter>
        <EffectMeter>
          <Silver
            diameter={50}
            min={lowRange3}
            max={highRange3}
            step={1}
            value={Math.floor(patch.effects[mainEffect][effect3] * scale3)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange3}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={patch.effects[mainEffect][effect3]} disabled={true}/>
        </EffectMeter>
        <WetDryBox>
          <Basic
            diameter={50}
            min={0}
            max={10}
            step={1}
            value={Math.floor(patch.effects[mainEffect].wetDry * 10)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={changeWetDry}
            ariaLabelledBy={'my-label'}
          />
          <EffectLabel>w / d</EffectLabel>
        </WetDryBox>
      </EffectRack>
      <EffectLabel>{effect1} / {effect2} / {effect3}</EffectLabel><br></br>
      <EffectLabel>{mainEffect}</EffectLabel>
    </div>
  )
}

export default TripleEffectUnit
