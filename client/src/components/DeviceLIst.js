import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Card, Row } from 'react-bootstrap'
import { Context } from '../index'
import DeviceItem from './DeviceItem'

const DeviceLIst = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  )
})

export default DeviceLIst
