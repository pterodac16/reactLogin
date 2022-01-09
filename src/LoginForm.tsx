import React from "react";
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
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';

const LoginForm = () => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: async (values) => {
            const response = await login(values.username, values.password);
            if (response && response.status === 200) {
                document.cookie = "token=" + response.data.token + ";SameSite=Lax";
                navigate('/dashboard');
            }
        }});

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
                                <Form onSubmit={formik.handleSubmit}>
                                    <FormGroup>
                                        <Label for="username">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            placeholder="Username"
                                            type="text"
                                            {...formik.getFieldProps('username')}
                                        />
                                        {formik.touched.username && formik.errors.username ? (
                                            <div>{formik.errors.username}</div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            placeholder="Password"
                                            type="password"
                                            {...formik.getFieldProps('password')}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div>{formik.errors.password}</div>
                                        ) : null}
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
}


    export default LoginForm;
