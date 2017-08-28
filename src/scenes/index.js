/** Scenes **/
import Public from './Public';
import Private from './Private';

const Scenes = ({ location, match, isAuthenticated }) => location.pathname == match.url ? (
  <Redirect to="/private" />
) : (
  <Switch>
    <Route component={Public} path="/public" />
    <Route path="/private" render={props => (
      isAuthenticated
        ? <Private {...props} />
        : <Redirect to="/public/sign" />
    )}/>
  </Switch>
);

const mapStateToProps = state => ({ isAuthenticated: !!state.services.session.userId });

export default connect(mapStateToProps, null, null, { pure: false })(Scenes);
