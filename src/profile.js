import Avatar from './common/avatar'
import Button from './common/button'
import Form, { Input } from './common/form'

import Style from './profile.scss'

class Profile extends React.Component {
  render() {
    return (
      <div className={Style.Profile}>
        <div className={Style.ProfileInvite}>
          <Form>
            <Input name="mail" placeholder="E-mail" />
            <Button>
              Отправить инвайт
            </Button>
          </Form>
        </div>

        <div className={Style.ProfileHeader}>
          <Avatar className={Style.ProfileHeaderAvatar} />

          <div className={Style.ProfileHeaderInfo}>
            <div className="ProfileHeaderInfoFullName">
              John Doe
            </div>

            <div className="ProfileHeaderInfoLocation">
              Moscow, Russia
            </div>
          </div>
        </div>

        <div className={Style.ProfileBalance}>
          <div className="ProfileBalanceHeader">
            Balance:
          </div>

          <div className="ProfileBalanceContainer">
            <div>TNC: 10 000</div>
            <div>ETH: 100.28</div>
            <div>HMQ: 100</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
