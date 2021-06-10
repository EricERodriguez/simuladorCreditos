import React, { Component } from 'react';
import { Row, Col, FormGroup} from 'react-bootstrap';


class SliderMonth extends Component {
    render(){
        return(
            <FormGroup>
                <Row>
                    <Col  sm={2}>
                        <Row>
                            <Col className="labelSlider" sm={5}>
                                Plazo
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12}>
                                <div id="monthValueDisplay" >{this.props.value} Meses</div>
                    </Col>
                    <Col sm={12}>
                        <input
                            id="SliderMonth"
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
                    <Col sm={10}>
                                <div id="StaticCount" >24</div>
                    </Col>
                </Row>
            </FormGroup>

        )
    }
}

export default SliderMonth