import React, {Component} from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Card, CardImg, Container,
   Row} from 'reactstrap';
import './cssComponent.css';


export default class Triangle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      a : 1,
      b : 1,
      c : 1,
    };
  }

  handlechangea(event){
    this.setState({a:event.target.value});
  }

  handlechangeb(event){
    this.setState({b:event.target.value});
  }

  handlechangec(event){
    this.setState({c:event.target.value});
  }

  handlesubmit(event){
    // test Conditions
    // console.log(this.state.a , this.state.b , this.state.c);
    // console.log((this.state.a + this.state.b) < this.state.c);
    // console.log((this.state.a + this.state.c) < this.state.b);
    // console.log((this.state.b + this.state.c) < this.state.a);
    // console.log(this.state.a === this.state.b);
    // console.log(this.state.a === this.state.c);
    // console.log(this.state.c === this.state.b);

    switch (true) {
      // true = is not triangle, false = is triangle
      case
        ((this.state.a + this.state.b) < this.state.c) ||
        ((this.state.a + this.state.c) < this.state.b) ||
        ((this.state.b + this.state.c) < this.state.a):
        window.alert("این یک مثلث نیست!");
        break;

      // true = Equilateral triangle
      case (this.state.a === this.state.b) &&
      (this.state.a === this.state.c) &&
      (this.state.c === this.state.b):
        window.alert("این یک مثلث متساوی الاضلاع است");
        break;

      // true = Isosceles triangle
      case (this.state.a === this.state.b) ||
      (this.state.a === this.state.c) ||
      (this.state.b === this.state.c):
        window.alert("این یک مثلث متساوی الساقین است");
        break;

      default:
      window.alert("این یک مثلث معمولی است");
    }

    event.preventDefult();
  }

    render(){

      return(
        <Container>
          <br/><br/>
          <Form >
          <Card body inverse  color="info" className="csscard">
          <FormGroup row>
          <Col sm={9}>
          <FormGroup row className="cssform">
            <Label for="exampleEmail" sm={2}>ضلع اول</Label>
            <Col sm={10}>
              <Input  name="number" id="exampleEmail" value={this.state.a} onChange={this.handlechangea.bind(this)}/>
            </Col>
          </FormGroup>
          <FormGroup row className="cssform">
            <Label for="exampleEmail2" sm={2}>ضلع دوم</Label>
            <Col sm={10}>
              <Input  name="email" id="exampleEmail2" value={this.state.b} onChange={this.handlechangeb.bind(this)}/>
            </Col>
          </FormGroup>
          <FormGroup row className="cssform">
            <Label for="exampleEmail2" sm={2}>ضلع سوم</Label>
            <Col sm={10}>
              <Input  name="email" id="exampleEmail3" value={this.state.c} onChange={this.handlechangec.bind(this)}/>
              <br/><br/>
              <Button outline color="warning" className="cssbutton" onClick={this.handlesubmit.bind(this)}>مثلث ... ؟</Button>
            </Col>
          </FormGroup>
          </Col>
          <Col sm={3}>
          <CardImg bottom width="100%" src="https://images-na.ssl-images-amazon.com/images/I/71iI5ZtdVeL._SX425_.jpg" alt="تصویر قابل مشاهده نیست" />
          </Col>
          </FormGroup>
          </Card>
          </Form>

        </Container>

      );
  }
}
