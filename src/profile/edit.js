import Button from '../common/button'
import Form, { Input } from '../common/form'

class ProfileEdit extends React.Component {
  render() {
    return (
      <div className="ProfileEdit">
        Быстрая регистрация аккаунта

        <Form>
          <Input
            label="Имя"
            name="first_name"
          />

          <Input
            label="Фамилия"
            name="last_name"
          />

          <Input
            label="Должность"
            name="job"
          />

          <Button>Сохранить</Button>
        </Form>
      </div>
    )
  }
}

export default ProfileEdit
