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

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch("http://localhost:3333/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((response) => {
            if (response.ok) {
                alert("Success!");
            } else {
                alert("Failed!");
            }
        });
    };

    return (
        <div className="vertical-center">
            <Container>
                <Row>
                    {/*<Col md="3" xs="0"></Col>*/}
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
                    {/*<Col md="3" xs="0"></Col>*/}
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
