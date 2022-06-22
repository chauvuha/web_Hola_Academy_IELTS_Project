import './HomePage.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function HomePage() {
    return (
        <div className="homepage" id="homepage">
            <div id="homepage-banner-image" className="d-flex  plr-20 white">
                <Container>
                    <Row>
                        <Col className="banner-video" xs={12} md={6} lg={6}></Col>
                        <Col className="banner-text" xs={12} md={6} lg={6}>
                            <h1 className="bold">PLAN <span className="yellow">BETTER</span></h1>
                            <h1 className="bold">REACH <span className="yellow">HIGHER</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.</p>
                            <Button className="bold">Join Us</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="homepage-2nd-sec white">
                <div className="column-container d-flex plr-20">
                    <Container>
                        <Row>
                            <Col xs={12} md={12} lg={4}>
                                <div className="column first-column d-flex flex-column justify-content-sm-between">
                                    <i class="bi bi-journal-bookmark"></i>
                                    <div className="column-text">
                                        <div className="third-column-header">Hệ thống luyện tập</div>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} md={12} lg={4}>
                                <div className="column second-column d-flex flex-column justify-content-sm-between">
                                    <i class="bi bi-journal-bookmark"></i>
                                    <div className="column-text">
                                        <div className="third-column-header">Hệ thống luyện tập</div>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <div className="column third-column d-flex flex-column justify-content-sm-between">
                                    <i class="bi bi-journal-bookmark"></i>
                                    <div className="column-text">
                                        <div className="third-column-header">Hệ thống luyện tập</div>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>


                </div>
            </div>
            <div className="homepage-3rd-sec ta-center plr-20">
                <h1 className="purple bold">QUYỀN LỢI CỦA HỌC VIÊN</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                </p>
                <div className="homepage-3rd-list  d-flex flex-column align-items-left">
                    <h3 className="purple">Kiểm tra đầu vào và tư vấn lộ trình
                    </h3>
                    <h3 className="purple">Kiểm tra đầu vào và tư vấn lộ trình
                    </h3>
                    <h3 className="purple">Truy cập hệ thống bài luyện tập không giới hạn
                    </h3>
                    <h3 className="purple">Truy cập các tips làm bài độc quyền từ Hello-IELTS
                    </h3>
                </div>
                <Button className="bold">Tìm hiểu thêm</Button>
            </div>
            <div className="homepage-4th-sec plr-20">
                <h1 className="purple bold ta-center">JOIN US</h1>
                <p className="ta-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                </p>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <div className="course">
                                <div className="course-image d-flex flex-column justify-content-end bold white">
                                    <h1 className="course-image-text">Khoá học IELTS 4.5+</h1>
                                </div>
                                <div className="course-text d-flex flex-column justify-content-end">
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
                        <Col xs={12} md={12} lg={6}>
                            <div className="course">
                                <div className="course-image d-flex flex-column justify-content-end bold white">
                                    <h1 className="course-image-text">Khoá học IELTS 4.5+</h1>
                                </div>
                                <div className="course-text d-flex flex-column justify-content-end">
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
                        <Col xs={12} md={12} lg={6}>
                            <div className="course">
                                <div className="course-image d-flex flex-column justify-content-end bold white">
                                    <h1 className="course-image-text">Khoá học IELTS 4.5+</h1>
                                </div>
                                <div className="course-text d-flex flex-column justify-content-end">
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
                        <Col xs={12} md={12} lg={6}>
                            <div className="course">
                                <div className="course-image d-flex flex-column justify-content-end bold white">
                                    <h1 className="course-image-text">Khoá học IELTS 4.5+</h1>
                                </div>
                                <div className="course-text d-flex flex-column justify-content-end">
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
            <div className="homepage-5th-sec plr-20">
                <h1 className="purple bold ta-center">TÌM HIỂU VỀ HELLO IELTS</h1>
                <p className="ta-center">Lorem ipsum dolor sit amet </p>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={4}>
                            <div className="column first-column d-flex flex-column justify-content-sm-center">
                                <i class="bi bi-journal-bookmark"></i>
                                <div className="column-text ta-center">
                                    <h1 className="third-column-header purple bold">About Us</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={12} lg={4}>
                            <div className="column first-column d-flex flex-column justify-content-sm-center">
                                <i class="bi bi-journal-bookmark"></i>
                                <div className="column-text ta-center">
                                    <h1 className="third-column-header purple bold">About Us</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={4}>
                            <div className="column first-column d-flex flex-column justify-content-sm-center">
                                <i class="bi bi-journal-bookmark"></i>
                                <div className="column-text ta-center">
                                    <h1 className="third-column-header purple bold">About Us</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}