import React from 'react';

class BenchIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let { benches } = this.props;

    return (
      <div>
        <ul>
        {
          benches.map( bench => <li key={bench.id}>{bench.description}</li>)
        }
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
