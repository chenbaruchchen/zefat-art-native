import React from 'react'
import { div, h4, span } from 'react-native'

import PropTypes from 'prop-types'

import Input from './input'

const Quatsion = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '70%',
        height: 'auto',
        alignItems: 'flex-end',
        flex: '0 0 auto',
        borderRadius: '20px',
        paddingTop: '40px',
        paddingBottom: '40px',
        boxShadow: '3px 3px 3px 0px #d4d4d4,-3px -3px 3px 0px #d4d4d4',
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        paddingRight: '30px',
        position: 'relative',
      }}
    >
      <h4
        style={{
          fontSize: '2em',
          width: '70%',
          textAlign: 'right',
        }}
      >
        {props.header_quatsion}
      </h4>
      <span
        style={{
          marginTop: '15px',
          color: '#1e1e1e',
          marginBottom: '15px',
          width: '70%',
          textAlign: 'right',
        }}
      >
        {props.explenistion}
      </span>
      <Input></Input>
      <span
        style={{
          marginTop: '15px',
          color: '#1e1e1e',
          marginBottom: '15px',
          width: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        {props.answers}
      </span>
    </div>
  )
}

Quatsion.defaultProps = {
  header_quatsion: 'שאלה',
  explenistion: 'הסבר',
  answers: 'תשובה',
}

Quatsion.propTypes = {
  header_quatsion: PropTypes.string,
  explenistion: PropTypes.string,
  answers: PropTypes.string,
}

export default Quatsion
