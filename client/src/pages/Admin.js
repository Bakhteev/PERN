import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

const Admin = () => {
  const [brandVisibel, setBrandVisible] = useState(false)
  const [typeVisibel, setTypeVisible] = useState(false)
  const [deviceVisibel, setDeviceVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateType show={typeVisibel} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisibel} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisibel}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  )
}

export default Admin
