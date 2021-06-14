import React, { Component } from "react";
import SliderAmount from "./SliderAmount";
import SliderMonth from "./SliderMonth";
import { Container , Row, Col, Form} from 'react-bootstrap';
import Stuffed from "./Stuffed";

import '../css/App.css';

class Simulador extends Component{

    constructor(props) {
        super(props);
        // Defino las variables locales al comienzo del calculo

        //IMP es el interes mensual porcentual = IM / 100 para que me de el float para multiplicar por el monto a retirar - amount es el monto total a sacar - month son los meses que establece el cliente - total esel monto mas los interes - fee es el pago mensual

        let IMP = this.props.IM /100;
        let amount = this.props.valueA;
        let month = this.props.valueM;
        let total = amount+((amount*IMP)*month) ;
        let fee = total / month;


        // save props values in to the state
        this.state = {

            valueAmount: this.props.valueA,
            stepAmount: this.props.stepA,
            maxAmount: this.props.maxA,
            minAmount: this.props.minA,

            valueMonth: this.props.valueM,
            stepMonth: this.props.stepM,
            maxMonth: this.props.maxM,
            minMonth: this.props.minM,

            IM: this.props.IM,
            amountToRepay:  Math.round(total).toFixed(),
            feeInst: Math.round(fee).toFixed(),

        };
    }

    update( e ){
        // Assign to let changedID ID of slider which has been changed
        let changedID = e.target.id;
        let value = e.target.value;
        if (changedID === 'sliderAmount') {
            this.setState({valueAmount: e.target.value});
            console.log('EVENT TIME: ' + this.getNewDate());
            console.log('NEW ACTION DETECTED: ID - '+e.target.id + ': has been changed. New value: '+this.props.symbol + e.target.value);
        }
        if (changedID === 'sliderMonth'){
            this.setState({valueMonth: e.target.value});
            console.log('EVENT TIME: ' + this.getNewDate());
            console.log('NEW ACTION DETECTED: ID - '+e.target.id + ': has been changed. New value: '+ e.target.value+' months');
        }


        this.calculate(changedID, value);
    }

    getNewDate() {

        let newDate = new Date();
        let h,m,s;
        h = newDate.getHours();
        m = "0"+newDate.getMinutes();
        s = "0"+newDate.getSeconds();
        m = m.slice(-2);
        s = s.slice(-2);

        let event_date = h +":"+m+":"+s;
        return event_date;
    };


    calculate(id, value){

        let amount, month;
        let IMP = this.state.IM / 100;

        if (id === 'sliderMonth') {
            month = parseFloat(value);
            amount = parseFloat(this.state.valueAmount);
        }
        else if (id === 'sliderAmount'){
            amount = parseFloat(value);
            month = parseFloat(this.state.valueMonth);
        }

        // calculate total and fee inst
        let total = amount+((amount*IMP)*month) ;
        let fee = total / month;

        // fixing numbers
        total =  Math.round(total).toFixed();
        fee = Math.round(fee).toFixed();

        //save results into state
        this.setState({amountToRepay: total});
        this.setState({feeInst: fee});


    }


    render()
    {
        return(
            <Container className="show-Container mainContainer">
                <Row>
                    <Col className="leftSide" xs={12} md={6}>
                        <Form horizontal>
                            <SliderAmount
                                value={this.state.valueAmount}
                                min={this.state.minAmount}
                                max={this.state.maxAmount}
                                onChange={this.update.bind(this)}
                                step={this.state.stepAmount}
                                symbol={this.props.symbol}
                            />
                            <SliderMonth
                                value={this.state.valueMonth}
                                min={this.state.minMonth}
                                max={this.state.maxMonth}
                                onChange={this.update.bind(this)}
                                step={this.state.stepMonth}
                            />
                        </Form>
                        <Stuffed
                        symbol={this.props.symbol}
                        amount={this.state.amountToRepay}
                        fee={this.state.feeInst}
                    />
                    </Col>

               </Row>
            </Container>
        );
    }
}


//defino propiedades por default
Simulador.defaultProps = {
    // Slider meses
    valueM: 16,
    stepM: 1,
    maxM: 24,
    minM: 3,

    //Slider monto total
    valueA : 19500,
    stepA : 500,
    maxA : 50000,
    minA : 5000,

    //pagos mensuales si 96,98% es el interes en 16 meses 96,98/16= 6,12375% es el interes mensual
    IM: 6.12375,

    //simbolo moneda
    symbol: '$',
};

export default Simulador;