import React, { Component } from 'react';
import { Col, Card, Button, Container, Row} from 'react-bootstrap';


class Stuffed extends Component {

    handleClick = () => {
        console.log('...');
    }

    render() {
        return (
            <Col className="stuffed" xs={12} md={6}>
                <Card style={{ width: '27rem', height: '3rem' }} id= "cardstuffed">
                    <h3>
                        Monto total a pagar <span  className="totalAmountDisplay">{this.props.symbol} {this.props.amount}</span>
                    </h3>
                </Card>

                <Card style={{ width: '27rem', height: '3rem'}} id= "cardstuffed" >
                        <h3>
                            <div id="amountValueDisplay" >
                                Cuotas fijas por mes <span className="feeInstDisplay">{this.props.symbol} {this.props.fee}</span>
                            </div>
                        </h3>
                </Card>
                <Container>
                    <Row className="show-grid">
                        <Col md={10}>
                            <Button variant="primary"  onClick={this.handleClick}>Obtiene Crédito</Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="primary"   onClick={this.handleClick}>Ver detalles de Cuotas</Button>
                        </Col>
                    </Row>
            </Container>
            </Col>

        )
    }
}

export default Stuffed;