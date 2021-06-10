import React, { Component } from 'react';
import { Row, Col, FormGroup} from 'react-bootstrap';

class SliderAmount extends Component{
    render() {
        return(
            <FormGroup>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                            Monto Total
                            </Col>
                        </Row>
                    </Col>

                    <Col><div id="amountValueDisplay">{this.props.symbol}{this.props.value}</div>
                    <input
                            id="sliderAmount"
                            type="range"
                            value={this.props.value}
                            min={this.props.min}
                            max={this.props.max}
                            onChange={this.props.onChange}
                            step={this.props.step} />
                        
                    </Col>
                    <Col>
                    <div>
                    $ 5.000
                    </div>
                    </Col>
                    <Col>
                    <div>
                    $ 50.000
                    </div>
                    </Col>
                </Row>
            </FormGroup>
        )
    }
}

export default SliderAmount