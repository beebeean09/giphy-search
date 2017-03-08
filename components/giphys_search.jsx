import React from 'react';

import GiphysIndex from './giphys_index';

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);
      this.state = {searchTerm: ""};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    this.setState({searchTerm: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    let { giphys } = this.props;
    return(
      <form>
        <input onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <GiphysIndex giphys={giphys}/>
      </form>
    );
  }
}

export default GiphySearch;
