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
  Table,
  Tag,
  Input,
  Button,
} from "antd";
import {
  UserOutlined,
  DownOutlined,
  DollarCircleOutlined,
  PaperClipOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
// const { Column, ColumnGroup } = Table;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

//Sidebar Data
const items = [
  getItem("Payments", "sub1", <DollarCircleOutlined />, []),
  getItem("Receipts", "sub2", <PaperClipOutlined />, []),
];

const onClick = (e) => {
  console.log("click", e);
};

// Dropdown data
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

//Table data
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="https://ant.design/components/icon/">{text}</a>,
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <>
          <Input
            autoFocus
            placeholder="Enter the text..."
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
          <Button
            onClick={() => {
              confirm();
            }}
            type="primary"
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters();
            }}
            type="danger"
          >
            Reset
          </Button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.name.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a href="https://ant.design/components/icon/">Invite {record.name}</a>
        <a href="https://ant.design/components/icon/">Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 15,
    ID: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 16,
    ID: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 15,
    ID: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

//Main Function
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
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Payments</Breadcrumb.Item>
              </Breadcrumb>

              <div
                style={{ padding: 24, minHeight: 525 }}
                className="site-layout-content"
              >
                <Table columns={columns} dataSource={data} />;
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
