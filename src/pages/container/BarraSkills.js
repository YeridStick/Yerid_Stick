import React from 'react'

import '../../styles/SkillsBar.css'

export default function BarraSkills({porcentage}) {
  return (
    <div 
      className='BarraProgres' 
      style={{ 
        maxWidth:`${porcentage}%`
      }}
    >
    </div>
  )
}
