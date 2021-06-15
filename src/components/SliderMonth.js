import React, { Component } from 'react';
import { Row, Col, FormGroup, Badge, Card} from 'react-bootstrap';


class SliderMonth extends Component {
    render(){
        return(
            <FormGroup>
                <Row>
                    <Col  sm={2}>
                        <Row>
                            <Col className="labelSlider" >
                                <h1>
                                    <Badge variant="secondary">Plazo</Badge>
                                </h1>
                            </Col>
                        </Row>
                    </Col>

                    <Col id="divCardRight">
                        <Card style={{ width: '10rem', height: '2rem'}}>
                            <div id="amountValueDisplay" >{this.props.value} Meses</div>
                        </Card>
                    </Col>
                    <Col sm={12}>

                        <input
                            id="sliderMonth"
                            type="range"
                            value={this.props.value}
                            min={this.props.min}
                            max={this.props.max}
                            onChange={this.props.onChange}
                            step={this.props.step} />
                    </Col>
                    <Col>
                                <div id="StaticCount" > 3</div>
                    </Col>
                    <Col >
                                <div id="StaticCount2" >24</div>
                    </Col>
                </Row>
            </FormGroup>

        )
    }
}

export default SliderMonth