import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: 123,
      error: false,
    };
    this.onChange = this.onChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  onChange(e) {
    const val = e.target.value;
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(val)) {
      this.setState({
        error: true,
      });
    } else {
      this.setState({
        phone: val,
        error: false,
      });
    }
  }

  reset() {
    this.setState({
      phone: '',
      error: false,
    });
    const { reset } = this.props;
    reset && reset()
  }

  render() {
    const { phone, error } = this.state;
    return (
      <div className="m-form">
        <h3>This is form</h3>
        <p>
          <span className="js-contents">{phone}</span>
        </p>
        <p>
          <input type="text" onChange={this.onChange} />
        </p>
        {
          error && (<div className="js-error">Error Phone Number</div>)
        }
        <p><button onClikc={this.reset} type="button">Reset</button></p>
      </div>
    );
  }
}

export default Form;
