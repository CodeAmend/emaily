import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../actions';

class Payments extends Component {

  render() {
    return (
      <StripeCheckout
        amount={500}
        token={ this.props.handleToken }
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="$5 for 5 email credits."
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments);
