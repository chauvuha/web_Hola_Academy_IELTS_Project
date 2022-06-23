import './Footer.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Footer() {
    return (
        <div id="footer" className="plr-20">
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={3}>
                        <div className="column first-column d-flex flex-column justify-content-sm-center">
                            <div className="column-text pl-10">
                                <h3 className="third-column-header white bold">About Us</h3>
                                <p className="white"> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sociis sed sed ut egestas neque
                                    egestas elit. Morbi sit nulla
                                    vitae, id cras vestibulum.

                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <div className="column first-column d-flex flex-column justify-content-sm-center">
                            <div className="column-text pl-10">
                                <h3 className="third-column-header white bold">Về Hello IELTS</h3>
                                <p className="white"> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sociis sed sed ut egestas neque
                                    egestas elit. Morbi sit nulla
                                    vitae, id cras vestibulum.

                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <div className="column first-column d-flex flex-column justify-content-sm-center">
                            <div className="column-text pl-10">
                                <h3 className="third-column-header white bold">Sản phẩm</h3>
                                <p className="white"> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sociis sed sed ut egestas neque
                                    egestas elit. Morbi sit nulla
                                    vitae, id cras vestibulum.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <div className="column first-column d-flex flex-column justify-content-sm-center">
                            <div className="column-text pl-10">
                                <h3 className="third-column-header white bold">About Us</h3>
                                <p className="white"> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sociis sed sed ut egestas neque
                                    egestas elit. Morbi sit nulla
                                    vitae, id cras vestibulum.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-20">
                <Row>
                    <Col>
                        <div className="footer-icons white">
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-youtube"></i>
                            <i class="bi bi-google"></i>
                        </div>
                    </Col>
                    <Col className="footer-copyright d-flex justify-content-end white">
                        <div>
                            copyright @ Hello IELTS 2022
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}