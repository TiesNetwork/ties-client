import Button from '../../common/button'
import Form, { Input } from '../../common/form'

class UserExperiencesNew extends React.Component {
  render() {
    return (
      <div className="UserExperiencesNew">
        <Form className="UserExperiencesNewForm">
          <Input
            label="Название проекта"
            name="title"
          />

          <div>
            <Button>Сохранить</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default UserExperiencesNew
