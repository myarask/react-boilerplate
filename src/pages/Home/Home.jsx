import React from 'react';
import axios from 'axios';
import { SEARCH } from 'constants/apis';
import DeviceSwitch from 'components/DeviceSwitch';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';
import HomeTablet from './HomeTablet';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
    };
  }

  componentDidMount() {
    this.fetchResults();
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  fetchResults() {
    const body = {
      Text: '',
      From: 0,
    };
    axios
      .post(SEARCH, body)
      .then(resp =>
        this.setState(prevState => ({ results: [...prevState.results, resp.data.results] }))
      );
  }

  render() {
    return (
      <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
        <HomeMobile />
        <HomeTablet />
        <HomeDesktop />
      </DeviceSwitch>
    );
  }
}

export default Home;
