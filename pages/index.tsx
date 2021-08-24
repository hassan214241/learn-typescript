import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import '../styles/Home.css';
// import "../styles/Style.css";

import { Form, Input, Button, Checkbox, Col, Row, Select } from "antd";

const Home: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={"main"}>
      <Row justify="center" align="middle">
        <Col span={16}>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <h1>Now Let's Get Some Personal Detail About Yourself</h1>
            <Form.Item
              label="What is your Current Address"
              name="username"
              rules={[{ required: true, message: "Please Enter your Addrss!" }]}
            >
              <Input
                placeholder="Address Line 1"
                color="white"
                style={{
                  backgroundColor: "#bebebf",
                  width: 450,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item
              label=""
              rules={[{ required: true, message: "Please Enter your City!" }]}
            >
              <Input
                placeholder="City"
                style={{
                  backgroundColor: "#bebebf",
                  width: 450,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item name="Country" label="" rules={[{ required: true }]}>
              <Select
                placeholder="Select a Country"
                style={{
                  backgroundColor: "#f59323",
                  width: 450,
                  borderRadius: 50,
                }}
                allowClear
              >
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Turkey">Turkey</option>
              </Select>
            </Form.Item>

            <Form.Item
              label=""
              className={"Input"}
              rules={[
                { required: true, message: "Please Enter your City Code!" },
              ]}
            >
              <Input
                placeholder=" ZIP Code"
                style={{
                  backgroundColor: "#f59323",
                  width: 450,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            {/* second phase */}

            <Form.Item
              name="Country"
              label="Are You ?"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a Option"
                style={{ width: 220, borderRadius: 50 }}
                allowClear
              >
                <option value="Pakistan">Pakistan</option>
                <option value="female">India</option>
                <option value="other">Turkey</option>
              </Select>
            </Form.Item>

            <Form.Item
              label=""
              rules={[
                { required: true, message: "Please Enter your Address!" },
              ]}
            >
              <Input
                placeholder=" Enter a Perment Address"
                style={{
                  backgroundColor: "#f59323",
                  width: 220,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            {/* phase 3 */}

            <Form.Item
              label=" What rent do you pay each month if any ?"
              rules={[{ required: true, message: "Please Enter your Rent!" }]}
            >
              <Input
                placeholder=" Enter a Rent"
                type="password"
                style={{
                  backgroundColor: "#f59323",
                  width: 450,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item
              label="  How long have you lived there?"
              rules={[{ required: true, message: "Please Enter your Rent!" }]}
            >
              <Input
                placeholder=" Enter a Years"
                type="number"
                style={{
                  backgroundColor: "#bebebf",
                  width: 220,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            {/* same phase */}

            <Form.Item
              label="What is your Previous Address"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please Enter your Previous Addrss!",
                },
              ]}
            >
              <Input
                placeholder="Address Line 1"
                style={{
                  backgroundColor: "#bebebf",
                  width: 450,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item
              label=""
              rules={[{ required: true, message: "Please Enter your City!" }]}
            >
              <Input
                placeholder="City"
                style={{
                  backgroundColor: "#bebebf",
                  width: 450,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item name="Country" label="" rules={[{ required: true }]}>
              <Select
                placeholder="Select a Country"
                style={{
                  backgroundColor: "#bebebf",
                  width: 450,
                  borderRadius: 50,
                }}
                allowClear
              >
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Turkey">Turkey</option>
              </Select>
            </Form.Item>

            <Form.Item
              label=""
              rules={[
                { required: true, message: "Please Enter your City Code!" },
              ]}
            >
              <Input
                placeholder=" ZIP Code"
                style={{
                  backgroundColor: "#f59323",
                  width: 450,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            {/* last */}

            <Form.Item
              name="Country"
              label="What is Your matital status"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option"
                style={{
                  backgroundColor: "#bebebf",
                  width: 220,
                  borderRadius: 50,
                }}
                allowClear
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Children"
              label="How many children are financially dependent on you "
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option"
                style={{
                  backgroundColor: "#bebebf",
                  width: 220,
                  borderRadius: 50,
                }}
                allowClear
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </Form.Item>
            {/* last section */}

            <Form.Item
              label=" What age is the first child"
              rules={[
                { required: true, message: "Please Enter your Child age! " },
              ]}
            >
              <Input
                placeholder=" enter 1th child age"
                style={{
                  backgroundColor: "#f59323",
                  width: 220,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item
              label=" What age is the 2nd child "
              rules={[
                { required: true, message: "Please Enter your Child age!" },
              ]}
            >
              <Input
                placeholder=" enter 2th child age"
                style={{
                  backgroundColor: "#f59323",
                  width: 220,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item
              label=" Are there any other age of 17 who will occupy the house  "
              rules={[
                { required: true, message: "Please Enter your Child age!" },
              ]}
            >
              <Input
                placeholder="Enter a Value"
                style={{
                  backgroundColor: "#f59323",
                  width: 220,
                  borderRadius: 50,
                }}
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
