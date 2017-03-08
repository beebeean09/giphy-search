import React from 'react';

class GiphysIndex extends React.Component {

  render() {
    const { giphys } = this.props;

    const giphysIndexItems = giphys => {
      return giphys.map((giphy, idx) => (
        <li key={idx} className="giphy-li">
          <img src={giphy.images.fixed_height.url} />
        </li>
        )
      );
    };

    return(
      <div>
        {giphysIndexItems(giphys)}
      </div>

    );
  }
}

export default GiphysIndex;
