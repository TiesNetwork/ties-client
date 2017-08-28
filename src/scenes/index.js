import { Redirect, Switch } from 'react-router-dom';

/** Scenes **/
import Public from './Public';
// import Private from './Private';

const Scenes = ({ isAuthenticated }) => (
  <div>
    <Switch>
      <Route component={Public} path="/public" />
      <Route path="/" render={props => (
        isAuthenticated
          ? null
          : <Redirect to="/public/sign" />
      )}/>
    </Switch>
  </div>
);

const mapStateToProps = state => ({ isAuthenticated: !!state.services.session.userId });

export default connect(mapStateToProps, null, null, { pure: false })(Scenes);
