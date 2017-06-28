import Button from '../../../../components/button'
import Form, { Actions, Input, Select } from '../../../../components/form'
import Link from '../../../../components/link'

class ProfileEdit extends React.Component {
  render() {
    return (
      <div>
        <h3>Profile Edit/Create account info</h3>

        <Form>
          <Input label="First name:" name="first_name"/>
          <Input label="Last name:" name="last_name"/>
          <Input label="Job:" name="job"/>

          <Select label="Country" name="country">
            <option value="rus">Russia</option>
          </Select>

          <Actions>
            <Link to="/profile">Cancel</Link>&nbsp;
            <Button>Save</Button>
          </Actions>
        </Form>
      </div>
    )
  }
}

export default ProfileEdit
