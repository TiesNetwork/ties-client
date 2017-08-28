/** Scenes **/
import Sign from './scenes/Sign';

const Public = ({ match }) => (
  <div>
    <Route component={Sign} path={`${match.url}/sign`} />
  </div>
);

export default Public;
