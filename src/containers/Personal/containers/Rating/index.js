/** Actions **/
import { getRating } from './actions';

class PersonalRating extends Component {
  componentDidMount() {
    const { getRating, rating } = this.props;
    !rating && getRating();
  }

  componentDidUpdate(prevProps) {
    const { address, getRating, rating } = this.props;

    if (address != prevProps.address) {
      !rating && getRating();
    }
  }

  render() {
    const { densed } = this.props;
    const rating = ((this.props.rating || 0) / 10).toFixed(1);

    return (
      <div className={classNames(
        styles.PersonalRating,
        densed && styles.PersonalRatingDensed
      )}>
        <div className={styles.PersonalRatingStars}>
          {(densed ? [0] : [2, 4, 6, 8, 10]).map((value, index) => (
            <div
              className={classNames(
                styles.PersonalRatingStar,
                rating >= value && styles.PersonalRatingStarActive
              )}
              key={index}
            >
              ★
            </div>
          ))}
        </div>

        <div className={styles.PersonalRatingNumber}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalRating);
