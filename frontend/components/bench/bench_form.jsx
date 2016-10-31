import React from 'react';

class BenchForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      seating: 0,
      lat: this.props.lat || '',
      lng: this.props.lng || ''
    };
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});
    };
  }

  submit(e) {
    e.preventDefault();
    this.props.createBench(this.state);
  }

  render() {

    let {description, lat, lng, seating} = this.state;

    return (
      <div>
        <h2>Add New Bench</h2>
        <form onSubmit={this.submit.bind(this)}>
          <label>
            Description
            <textarea onChange={this.update('description').bind(this)} value={description}></textarea>
          </label>
          <label>
            Number of seats
            <input type="number" onChange={this.update('seating').bind(this)} value={seating} />
          </label>
          <label>
            Latitude
            <input type="text" onChange={this.update('lat').bind(this)} value={lat} />
          </label>
          <label>
            Longitude
            <input type="text" onChange={this.update('lng').bind(this)} value={lng} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BenchForm;
