import React from 'react'
import { div, TextInput } from 'react-native'

import PropTypes from 'prop-types'

const Input = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        height: 'auto',
        alignItems: 'center',
        flex: '0 0 auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '25px',
        paddingTop: '10px',
        paddingBottom: '10px',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <TextInput
        type="text"
        placeholder={props.textinput_placeholder}
        style={{
          textAlign: 'right',
          paddingTop: '10px',
          paddingBottom: '10px',
          borderWidth: '1px',
          borderColor: 'rgba(82, 82, 82, 0.19)',
          borderBottomWidth: '1px',
          borderTopWidth: '0px',
          borderRightWidth: '0px',
          borderLeftWidth: '0px',
          paddingLeft: '5px',
          paddingRight: '5px',
          borderRadius: '12px',
          transition: '0.3s',
        }}
      ></TextInput>
    </div>
  )
}

Input.defaultProps = {
  textinput_placeholder: 'placeholder',
}

Input.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Input
