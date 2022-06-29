import React from 'react'
import { div, span } from 'react-native'

import PropTypes from 'prop-types'

const List = (props) => {

    let itemList=props.items.map((item)=> <div
    onClick={()=>props.onChosen(item)}
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: 'auto',
      height: 'auto',
      alignItems: 'center',
      flex: '0 0 auto',
      backgroundColor: '#F6F6F6',
      borderRadius: '20px',
      paddingLeft: '50px',
      paddingRight: '50px',
      paddingTop: '15px',
      paddingBottom: '15px',
      minWidth: '300px',
      justifyContent: 'center',
      maxWidth: '200px',
      minHeight: '60px',
      transition: '0.3s',
      boxShadow:
        '2px 2px -3px 0px rgba(212, 212, 212, 0.97),-2px -2px -3px 0px #d4d4d4',
      marginTop: '12px',
      marginBottom: '12px',
    }}
  >
    <span
      style={{
        color: '#464646',
        fontSize: '20px',
      }}
    >
      {props.text11}
    </span>
  </div>)
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        height: '400px',
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flex: '0 0 auto',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
       {itemList}
      </div>
    </div>
  )
}

List.defaultProps = {
  text11: 'Text',
}

List.propTypes = {
  text11: PropTypes.string,
}

export default List
