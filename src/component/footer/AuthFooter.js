import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function AuthFooter() {
    return (
        <>
            <footer className="py-5">
                <Container>
                    <Row className="align-items-center justify-content-xl-between">
                        <Col xl="6">
                            <div className="copyright text-center text-xl-left text-muted">
                                © {new Date().getFullYear()}{" "}
                                <a
                                    className="font-weight-bold ml-1"
                                    href="https://www.google.com"
                                    target="_blank"
                                >
                                    Denny Afrizal
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default AuthFooter;