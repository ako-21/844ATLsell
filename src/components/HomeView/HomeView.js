import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Robot from './../../images/robot.png'
import GooglePlaces from './GooglePlaces'
// import ScriptTag from 'react-script-tag'

class HomeView extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <h2 className="home-heading">Intelligence to help you make the Best sales decision</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-start">
          <div className="col-7">
            <Card className="home-card bg-charc">
              <Card.Body>
                <Card.Text className="d-flex justify-content-center text-blanc">
                  <img className="robot" src={Robot} alt="robot" /> &nbsp; &nbsp; <span className="mt-2"> Enter your address below to see your FREE analytics </span> &nbsp; &nbsp; <img className="robot" src={Robot} alt="robot" /> <span className="mt-2"></span>
                </Card.Text>
                <Form>
                  <Form.Row>
                    <Col>
                      <InputGroup>
                        <GooglePlaces></GooglePlaces>
                        <InputGroup.Append>
                          <Button variant="secondary">Go &#xbb;</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeView
