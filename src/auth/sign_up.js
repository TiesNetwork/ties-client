import { Component } from 'react'

import Button from '../common/button'
import Form, { Input } from '../common/form'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        Создание нового ETH-кошелька

        <div>
          Публичный и приватный ключи будут сгенерированы автоматически
        </div>

        <div>
          <Form>
            <Input
              label="Имя"
              name="name"
            />

            <Input
              label="Пароль"
              name="password"
              type="password"
            />

            <Input
              label="Подтверждение пароля"
              name="password_confirm"
              type="password"
            />

            <div>
              <Button>
                Создать ETH-кошелёк
              </Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
