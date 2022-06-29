import React from 'react'
import { div } from 'react-native'

const TabBar = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        flex: '0 0 auto',
        backgroundColor: '#F6F6F6',
        position: 'fixed',
        bottom: '0',
        paddingTop: '12px',
        paddingBottom: '12px',
        justifyContent: 'center',
        borderTopLeftRadius: '50',
        borderTopRightRadius: '50',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: '0 0 auto',
          borderWidth: '0px',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 1024 1024"
          style={{
            width: '5em',
            height: '5em',
            marginRight: '1em',
            fill: '#rgba(22, 22, 22, 0.9)',
          }}
        >
          <path d="M950.857 548.571c-54.286-84-128.571-156-217.714-201.714 22.857 38.857 34.857 83.429 34.857 128.571 0 141.143-114.857 256-256 256s-256-114.857-256-256c0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 97.714 150.857 255.429 256 438.857 256s341.143-105.143 438.857-256zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.143 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM1024 548.571c0 14.286-4.571 27.429-11.429 39.429-105.143 173.143-297.714 289.714-500.571 289.714s-395.429-117.143-500.571-289.714c-6.857-12-11.429-25.143-11.429-39.429s4.571-27.429 11.429-39.429c105.143-172.571 297.714-289.714 500.571-289.714s395.429 117.143 500.571 289.714c6.857 12 11.429 25.143 11.429 39.429z"></path>
        </svg>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '0 0 auto',
          alignItems: 'flex-start',
        }}
      >
        <svg
          viewBox="0 0 1024 1024"
          style={{
            width: '5em',
            height: '5em',
            marginLeft: '1em',
            fill: 'rgba(22, 22, 22, 0.9)',
          }}
        >
          <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
        </svg>
      </div>
    </div>
  )
}

export default TabBar
