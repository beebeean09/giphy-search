import { connect } from 'react-redux';
import GiphySearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
  giphys: state.giphys
});

const mapDispatchToProps = dispatch => {
  return { fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm))};
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphySearch);
