import React, { Component } from 'react';
import { Row, Col, FormGroup, Badge, Card} from 'react-bootstrap';

import '../css/App.css';


class SliderAmount extends Component {

    render(){
        return(
            <FormGroup>
                <Row>
                    <Col  sm={2}>
                        <Row>
                            <Col className="labelSlider" sm={5}>
                                <h1>
                                    <Badge variant="secondary">Monto Total</Badge>
                                </h1>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                    
                        <Card style={{ width: '11.2rem', height: '2rem', }} id="divCardRight">
                            <div id="amountValueDisplay">{this.props.symbol}{this.props.value}</div>
                        </Card>
                        <input
                            id="sliderAmount"
                            type="range"
                            value={this.props.value}
                            min={this.props.min}
                            max={this.props.max}
                            onChange={this.props.onChange}
                            step={this.props.step} />

                            
                    </Col>
                    <Col >
                                <div id="StaticCount" > $ 5.000</div>
                    </Col>
                    <Col >
                                <div id="StaticCount2" > $50.000</div>
                    </Col>
                </Row>
            </FormGroup>
        )
    }

}

export default SliderAmount