import './IeltsInfo.css';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function IeltsInfo() {
    return (
        <div className="ielts-info-page">
            <div className="ielts-info-banner ta-center plr-20">
                <div className="ielts-info-banner-header white"><h1 className="bold">IELTS EXAM INFOMATION</h1></div>
                <div className="ielts-info-banner-content white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus consequat, tellus in pellentesque nec. Leo augue sem orci, odio. Vestibulum pellentesque sit in vel tristique enim. Quis volutpat, fermentum quis tellus tellus amet lacus suspendisse. Malesuada pharetra, mi, elementum id facilisis non, in scelerisque quam. Pellentesque fringilla morbi at bibendum. Eleifend malesuada sed commodo fringilla odio. Lobortis quis sed integer vitae egestas fusce in. Quis tellus pellentesque lacus blandit. Leo maecenas aliquet ac ligula adipiscing nam. Tristique egestas etiam pharetra cras massa sit vel pharetra quis.</div>
            </div>
            <Container>
                <Row className="ielts-info-page-container">
                    <Col xs={12} md={6} lg={4}>
                        <div className="ielts-info-sidebar ta-left">
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="bold">IELTS general training</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="ta-left">IELTS general training là gì?</Button>
                                        </div>
                                        <Button className="ta-left">Khi nào dùng IELTS general training?</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="bold">IELTS general training</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="ta-left">IELTS general training là gì?</Button>
                                        </div>
                                        <Button className="ta-left">Khi nào dùng IELTS general training?</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="bold">IELTS general training</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="ta-left">IELTS general training là gì?</Button>
                                        </div>
                                        <Button className="ta-left">Khi nào dùng IELTS general training?</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={8}>
                        <div className="ielts-info-content">
                            <div className="ielts-info-content-header"><h1 className="purple bold">IELTS general training</h1></div>
                            <div className="ielts-info-content-image"></div>
                            <div className="ielts-info-content-header-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ultricies nulla egestas commodo diam rhoncus commodo tortor. Neque tincidunt mi morbi tempor. Consectetur purus a quam sed sit tellus. Sed purus vel sollicitudin felis et accumsan. Nam interdum adipiscing lectus massa. Id consequat vitae mauris, arcu id egestas urna sagittis. Pellentesque porta egestas praesent condimentum sed fusce ullamcorper arcu.
                                Consequat justo vitae quis nunc, scelerisque faucibus pretium euismod. Egestas praesent feugiat facilisis euismod aenean. Mi viverra velit felis dignissim lorem eros. Praesent auctor imperdiet neque massa orci nunc duis nulla. Cum dui sed quam non tortor nunc sed. Egestas diam diam faucibus suscipit diam accumsan amet sed. Dolor blandit enim, laoreet et. Mi volutpat, turpis urna, mattis morbi. Massa lacus tristique fusce faucibus. Nunc a tincidunt erat in malesuada arcu ac sed sem. Iaculis aliquam proin ornare ut sit diam feugiat ornare. Consectetur leo nibh ultricies lectus faucibus massa quam ornare.
                                Rhoncus tincidunt sem sapien aliquet. In lobortis amet, dolor suspendisse in pharetra. Nunc sed est enim vitae et fusce ut. Integer convallis at tortor facilisi risus purus ornare. Venenatis cursus habitasse ultrices vulputate ultricies eleifend porttitor. At arcu, et, in ullamcorper. Tincidunt ac velit suspendisse elit tincidunt interdum donec vulputate. Pellentesque fames quis sed lectus netus cras lacinia eget id. Sit ornare sit velit lorem quis. Posuere sed velit tristique pellentesque lectus.
                                Et sem phasellus nunc accumsan. 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}