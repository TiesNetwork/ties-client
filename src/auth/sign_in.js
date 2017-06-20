import { Component } from 'react'

import Button from '../common/button'
import Form, { Input } from '../common/form'
import Link from '../common/link'

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <div>
          Социальная бизнес-платформа для криптосообщества
          Поиск деловы партнёров | бизнес-сделки в криптовалюте
          Due Diligence | ICO
        </div>

        <div>
          Ваш Ethereum wallet является ключом для входа в сеть
        </div>

        <div>
          <Form>
            <Input
              label="Восстановить доступ к своему ETH-кошельку:"
              name="recovery_words"
              placeholder="Введите слова для восстановления кошелька"
            />

            <div>
              <Link to="/signup">
                Создать новый ETH-кошелёк
              </Link>

              <Button>
                Восстановить кошелёк
              </Button>
            </div>
          </Form>
        </div>
        

      </div>
    )
  }
}
