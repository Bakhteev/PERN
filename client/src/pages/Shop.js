import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceLIst from '../components/DeviceLIst'
import Pages from '../components/Pages'
import TypeBar from '../components/TypeBar'
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI'
import { Context } from '../index'

const Shop = observer(() => {
  const { device } = useContext(Context)

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data))
    fetchBrands().then((data) => device.setBrands(data))
    fetchDevices(null, null, 1, 2).then((data) => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    console.log(device.page)
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      null
    ).then((data) => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <BrandBar />
          <DeviceLIst />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
})

export default Shop
