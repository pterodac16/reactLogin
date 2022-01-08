import React, {useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap"
import './LoginForm.css';
import {login} from "./api/wrapper";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await login(username, password);
        console.log(response);
        if(response && response.status === 200) {
            navigate('/dashboard');
            document.cookie = "token=" + response.data.token;
        }
    };

    return (
        <div className="vertical-center">
            <Container>
                <Row>
                    <Col md={{offset: 3, size: 6}}>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h4" id="login-title">
                                    Login
                                </CardTitle>
                                <CardSubtitle className="text-muted"
                                              tag="h5"
                                              id="login-subtitle">
                                    Enter your credentials
                                </CardSubtitle>
                                <Form onSubmit={submit}>
                                    <FormGroup>
                                        <Label for="username">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            name="username"
                                            placeholder="Username"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </FormGroup>
                                    <div>
                                        <Button color="primary" outline type="submit">Sign in</Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
