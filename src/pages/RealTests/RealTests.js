import './RealTests.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

export default function RealTests() {
    return (
        <div className="real-test-page">
            <div className="real-test-banner banner ta-center plr-20">
                <div className="real-test-banner-header banner-header purple"><h1 className="bold">REAL TEST</h1></div>
                <div className="real-test-banner-content banner-content purple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus consequat, tellus in pellentesque nec. Leo augue sem orci, odio. Vestibulum pellentesque sit in vel tristique enim. Quis volutpat, fermentum quis tellus tellus amet lacus suspendisse. Malesuada pharetra, mi, elementum id facilisis non, in scelerisque quam. Pellentesque fringilla morbi at bibendum. Eleifend malesuada sed commodo fringilla odio. Lobortis quis sed integer vitae egestas fusce in. Quis tellus pellentesque lacus blandit. Leo maecenas aliquet ac ligula adipiscing nam. Tristique egestas etiam pharetra cras massa sit vel pharetra quis.</div>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Button className="top-button ielts-real-test-top-button"><h1>
                                <i class="bi bi-pen"></i>
                                IELTS Academic</h1></Button>
                        </Col>
                        <Col>
                            <Button className="top-button ielts-real-test-top-button"><h1>
                                <i class="bi bi-speaker"></i>
                                IELTS Academic</h1></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <div className="real-test-sidebar ielts-sidebar">
                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="bold">2019</Accordion.Header>
                                        <Accordion.Body>
                                            <div>
                                                <Button className="ta-left">Tháng 1</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 2</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 3</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 4</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 5</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 6</Button>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="bold">2020</Accordion.Header>
                                        <Accordion.Body>
                                            <div>
                                                <Button className="ta-left">Tháng 1</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 2</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 3</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 4</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 5</Button>
                                            </div>
                                            <div>
                                                <Button className="ta-left">Tháng 6</Button>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                        <Col>
                            <div className="real-test-content">
                                <Container>
                                    <Row>
                                        <Col xs={12} md={12} lg={4}>
                                            <div className="test">
                                                <div className="test-image d-flex flex-column justify-content-end bold white">
                                                    <h1 className="test-image-text bold">Khoá học IELTS 4.5+</h1>
                                                </div>
                                                <div className="test-text d-flex flex-column justify-content-end">
                                                    <Container>
                                                        <Row>
                                                            <Col><p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </p>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={12} lg={4}>
                                            <div className="test">
                                                <div className="test-image d-flex flex-column justify-content-end bold white">
                                                    <h1 className="test-image-text bold">Khoá học IELTS 4.5+</h1>
                                                </div>
                                                <div className="test-text d-flex flex-column justify-content-end">
                                                    <Container>
                                                        <Row>
                                                            <Col><p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </p>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={12} lg={4}>
                                            <div className="test">
                                                <div className="test-image d-flex flex-column justify-content-end bold white">
                                                    <h1 className="test-image-text bold">Khoá học IELTS 4.5+</h1>
                                                </div>
                                                <div className="test-text d-flex flex-column justify-content-end">
                                                    <Container>
                                                        <Row>
                                                            <Col><p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </p>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={12} lg={4}>
                                            <div className="test">
                                                <div className="test-image d-flex flex-column justify-content-end bold white">
                                                    <h1 className="test-image-text bold">Khoá học IELTS 4.5+</h1>
                                                </div>
                                                <div className="test-text d-flex flex-column justify-content-end">
                                                    <Container>
                                                        <Row>
                                                            <Col><p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </p>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={12} lg={4}>
                                            <div className="test">
                                                <div className="test-image d-flex flex-column justify-content-end bold white">
                                                    <h1 className="test-image-text bold">Khoá học IELTS 4.5+</h1>
                                                </div>
                                                <div className="test-text d-flex flex-column justify-content-end">
                                                    <Container>
                                                        <Row>
                                                            <Col><p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </p>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={12} lg={4}>
                                            <div className="test">
                                                <div className="test-image d-flex flex-column justify-content-end bold white">
                                                    <h1 className="test-image-text bold">Khoá học IELTS 4.5+</h1>
                                                </div>
                                                <div className="test-text d-flex flex-column justify-content-end">
                                                    <Container>
                                                        <Row>
                                                            <Col><p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </p>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}