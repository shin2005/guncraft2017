import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Iframe from 'components/Iframe';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeading
          title="Hello folks"
        />
        <div>
          <Iframe code="t0eqSgkDuW0" />
          <Iframe code="qe6r4jSup6c" />
        </div>
      </div>
    )
  }
}
