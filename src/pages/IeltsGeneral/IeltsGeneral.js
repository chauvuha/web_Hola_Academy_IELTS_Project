import './IeltsGeneral.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                }}
                size={140}
                thickness={4}
                {...props}
                value={100}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'absolute' }}
            >
                <Typography variant="caption" component="div" color="text.secondary" size="10rem"
                >
                    <div className="d-flex flex-column">
                        {props.icon}
                        {`${Math.round(props.value)}%`}
                    </div>
                </Typography>

            </Box>
            <CircularProgress
                variant="determinate"
                disableShrink
                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? 'var(--e-mid-dark-purple)' : '#308fe8'),
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 4,
                    top: -2,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={140}
                thickness={4}
                {...props}
            />

        </Box>
    );
}

export default function IeltsGeneral() {
    return (
        <div>
            <div className="ielts-general-banner ta-center plr-20">
                <div className="ielts-general-banner-header white"><h1 className="bold">IELTS PREP</h1></div>
                <div className="ielts-general-banner-content white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus consequat, tellus in pellentesque nec. Leo augue sem orci, odio. Vestibulum pellentesque sit in vel tristique enim. Quis volutpat, fermentum quis tellus tellus amet lacus suspendisse. Malesuada pharetra, mi, elementum id facilisis non, in scelerisque quam. Pellentesque fringilla morbi at bibendum. Eleifend malesuada sed commodo fringilla odio. Lobortis quis sed integer vitae egestas fusce in. Quis tellus pellentesque lacus blandit. Leo maecenas aliquet ac ligula adipiscing nam. Tristique egestas etiam pharetra cras massa sit vel pharetra quis.</div>
            </div>
            <div className="ielts-test-page plr-20">
                <Container>
                    <Row className="ielts-test-selection">
                        <Col>
                            <Button><h1>ELTS Academic</h1></Button>
                        </Col>
                        <Col>
                            <Button><h1>IELTS General Training</h1></Button>
                        </Col>
                    </Row>
                </Container>

                <div className="practice-test-section">
                    <h1 className="practice-test-section-title bold white">Practice 1</h1>
                    <Container className="practice-test-section-part">
                        <Row>
                            <Col>
                                <CircularProgressWithLabel value={75} icon={<MenuBookIcon />} />
                                <Button className="practice-test-button-play bold">Reading</Button>
                            </Col>
                            <Col>
                                <CircularProgressWithLabel value={25} icon={<MenuBookIcon />} />
                            </Col>
                            <Col>
                                <CircularProgressWithLabel value={25} icon={<MenuBookIcon />} />
                            </Col>
                            <Col>
                                <CircularProgressWithLabel value={25} icon={<MenuBookIcon />} />
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>
        </div>
    )
}
