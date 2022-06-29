import React from 'react'
import { div } from 'react-native'

import Quatsion from './quatsion'

const Form = (props) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <Quatsion></Quatsion>
    </div>
  )
}

export default Form
