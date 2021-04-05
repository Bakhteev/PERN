import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Context } from '../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavigationBar = observer(() => {
  const { user } = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button variant="outline-light" className="ml-2" onClick={logOut}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavigationBar
