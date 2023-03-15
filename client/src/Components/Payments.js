import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

function Payments(props) {
  return (
    <StripeCheckout
      name="Emaily"
      description="INR 5 for 5 surveys"
      amount={5 * 100}
      currency="INR"
      token={(token) => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      Add credits
    </StripeCheckout>
  );
}

export default connect(null, actions)(Payments);
