/* eslint-disable react/prop-types */
import React from 'react';
import Question from './question.jpg';

export default class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    console.log(this.props);
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return <img src="" alt="" className="img-thumbnail mt-2" />;
    }

    return <img src={thumb} alt={file.name} className="img-thumbnail mt-2" />;
  }
}
