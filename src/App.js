import React from "react";
import "./App.css";
import {
  Dropdown,
  Menu,
  Space,
  Layout,
  Typography,
  Avatar,
  Breadcrumb,
} from "antd";
import {
  UserOutlined,
  DownOutlined,
  DollarCircleOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Payments", "sub1", <DollarCircleOutlined />, []),
  getItem("Receipts", "sub2", <PaperClipOutlined />, []),
];

const onClick = (e) => {
  console.log("click", e);
};

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            Back to Home
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            Settings
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            Sign out
          </a>
        ),
      },
    ]}
  />
);

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 15 }}>
          <Dropdown overlay={menu}>
            <Space style={{ float: "right" }}>
              <Avatar icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </Dropdown>
          <Title style={{ color: "white" }} level={3}>
            Orchids School
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "endregion" }}>
            <Menu onClick={onClick} mode="vertical" items={items} />
          </Sider>
          <Layout>
            <Content
              style={{
                padding: "0 50px",
              }}
            >
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>Payments</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{ padding: 24, minHeight: 525 }}
                className="site-layout-content"
              >
                Content
              </div>
            </Content>

            <Footer
              style={{
                textAlign: "center",
              }}
            >
              K12 Technology Pvt Ld.
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
