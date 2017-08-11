import Avatar from '../../components/Avatar'
import Block from '../../components/Block'

import UserExperience from './components/Experience'
import UserTag from './components/Tag'

class User extends Component {
  render() {
    return (
      <div>
        <Block
          className={styles.UserPersonal}
          title="Personal Information"
        >
          <div className={styles.UserHeader}>
            <Avatar className={styles.UserAvatar} />

            <div className={styles.UserInfo}>
              <div className={styles.UserName}>
                Antoin Dupont
              </div>

              <div className={styles.UserPosition}>
                The Survey, CMO
              </div>

              <div className={styles.UserCountry}>
                Netherlands
              </div>
            </div>
          </div>

          <div className={styles.UserTags}>
            <UserTag title="blockchain" />
            <UserTag title="ico" />
            <UserTag title="marketing" />
            <UserTag title="business strategy" />
            <UserTag title="start-ups" />
            <UserTag title="social networking" />
          </div>
        </Block>

        <Block title="Experience">
          <UserExperience
            date="September, 2015 - June, 2016"
            description="Participated in advisory board"
            title="Magic Button"
          />

          <UserExperience
            date="September, 2015 - June, 2016"
            description="Ties.Network is an Ethereum-based ledger for personal, professional, and organizational development."
            title="Ties.Network"
          />
        </Block>
      </div>
    )
  }
}

export default User
