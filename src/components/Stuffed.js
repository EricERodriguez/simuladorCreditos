import React, { Component } from 'react';
import { Col} from 'react-bootstrap';


class Stuffed extends Component {
    render() {
        return (
            <Col className="stuffed" xs={12} md={6}>
                <h4>Monto total a pagar</h4>
                <span  className="totalAmountDisplay">{this.props.symbol}{this.props.amount}</span>

                <h4>Pagos mensuales</h4>
                <span className="feeInstDisplay">{this.props.symbol}{this.props.fee}</span>
            </Col>

        )
    }
}

export default Stuffed;