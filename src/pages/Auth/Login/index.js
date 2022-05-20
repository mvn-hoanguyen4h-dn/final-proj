import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  let { login } = useAuth();

  const onFinish = (values) => {
    console.log(values);
    setEmail(values.email);
    setPassword(values.password);
  };

  return (
    <div className="login-form">
      <Form
        className="form-login"
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 className="login-title">Login</h2>
        <Form.Item
          className="form-item"
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            className="input-item"
            prefix={<AiOutlineMail className="site-form-item-icon" />}
            placeholder="Your email ..."
          />
        </Form.Item>

        <Form.Item
          className="form-item"
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            className="input-item"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Your password ..."
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => login({ email }, { password })}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <NavLink to="/management" className="back-item login-back">
        <BsFillArrowLeftCircleFill />
      </NavLink>
    </div>
  );
}

export default Login;
