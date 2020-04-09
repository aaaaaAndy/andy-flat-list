import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'intersection-observer';
import './index.css';

class LoadingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.io = null;
  }

  componentDidMount() {
    this.io = new IntersectionObserver((entries) => {
      console.log(123333, entries);
      if (entries[0].intersectionRatio > 0) {
        this.props.fetchData();
      }
	}, { threshold: [0, 0.5, 1] });

    this.io.observe(this.loadingRef);
  }

  componentWillUnmount() {
    this.io.unobserve(this.loadingRef);
    this.io.disconnect();
  }

  render() {
    const { list, loadingNode, children } = this.props;

    return (
		<div className="loading-list-container">
          { children }
          {
            list && list.length ? (
                <div className="loading-list-loading" ref={(loadingRef) => { this.loadingRef = loadingRef; }}>
                  {
                    loadingNode || 'loading'
                  }
                </div>
            ) : null
          }
        </div>
	)
  }
}

LoadingList.defaultProps = {
  fetchData: () => {},
  list: [],
  children: null,
  loadingNode: null,
};

LoadingList.propTypes = {
  fetchData: PropTypes.func,
  list: PropTypes.array,
  children: PropTypes.any,
  loadingNode: PropTypes.any,
};

export default LoadingList;
