/** Actions **/
import { getRating } from './actions';

class Rating extends Component {
  componentDidMount() {
    const { getRating, rating } = this.props;
    !rating && getRating();
  }

  render() {
    const { densed } = this.props;
    const rating = (this.props.rating || 0) / 10;

    return (
      <div className={classNames(
        styles.Rating,
        densed && styles.RatingDensed
      )}>
        <div className={styles.RatingStars}>
          {(densed ? [0] : [2, 4, 6, 8, 10]).map(value => (
            <div className={classNames(
              styles.RatingStar,
              rating >= value && styles.RatingStarActive
            )}>
              ★
            </div>
          ))}
        </div>

        <div className={styles.RatingNumber}>
          {rating}{!densed && '/10'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { address }) => ({
  rating: state.entities.users[address].rating
});
const mapDispatchToProps = (dispatch, { address }) => ({
  getRating: () => dispatch(getRating(address))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
