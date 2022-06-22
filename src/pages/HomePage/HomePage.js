import './HomePage.css'
import Button from 'react-bootstrap/Button';


export default function HomePage() {
    return (
        <div className="homepage" id="homepage">
            <div id="homepage-banner-image" className="d-flex  plr-20 white">
                <div className="banner-video"></div>
                <div className="banner-text">
                    <h1 className="bold">PLAN <span className="yellow">BETTER</span></h1>
                    <h1 className="bold">REACH <span className="yellow">HIGHER</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.</p>
                    <Button className="bold">Join Us</Button>
                </div>
            </div>
            <div className="homepage-2nd-sec white">
                <div className="column-container d-flex plr-20">
                    <div className="column first-column d-flex flex-column justify-content-sm-between">
                        <i class="bi bi-journal-bookmark"></i>
                        <div className="column-text">
                            <div className="third-column-header">Hệ thống luyện tập</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                            </p>
                        </div>
                    </div>
                    <div className="column second-column d-flex flex-column justify-content-sm-between">
                        <i class="bi bi-journal-bookmark"></i>
                        <div className="column-text">
                            <div className="third-column-header">Hệ thống luyện tập</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                            </p>
                        </div>
                    </div>
                    <div className="column third-column d-flex flex-column justify-content-sm-between">
                        <i class="bi bi-journal-bookmark"></i>
                        <div className="column-text">
                            <div className="third-column-header">Hệ thống luyện tập</div>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                            </p>
                        </div>
                    </div>


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
            <div className="homepage-4th-sec ta-center plr-20">
            <h1 className="purple bold">JOIN US</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus malesuada gravida urna praesent lobortis consequat. Facilisi eget semper convallis feugiat nunc lectus odio.
                </p>
            </div>
        </div>
    )
}