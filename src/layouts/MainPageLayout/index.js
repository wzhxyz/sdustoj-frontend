import React from "react";
import { NavLink, withRouter  } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css';
import { Dropdown, Icon } from 'antd';
import AccountDropdown from "./AccountDropdown";



const { Header, Content, Footer } = Layout;
class Logo extends React.Component {
    render() {
        return (
            <div  className="logo">
                <span>课程管理平台</span>
            </div>
        )
    }
}

class MainPageLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    onselect = ({ item, key, selectedKeys }) => {
        const { match, location, history } = this.props
        if (selectedKeys[0] == 1) {
            this.props.history.push('/');
        } else if (selectedKeys[0] == 2) {
            this.props.history.push('/lesson');
        } else if (selectedKeys[0] == 4) {
            this.props.history.push('/status');
        }
    }
    render() {
        const { match, location, history } = this.props
        let { children } = this.props;
        let cur_item = '1';
        if (match.path === "/") {
            cur_item = '1';
        } else if (match.path.startsWith("/lesson")) {
            cur_item = '2'; 
        } else if (match.path.startsWith("/status")) {
            cur_item = '4';
            
        }
        return (
            <Layout className="layout" id="components-layout-demo-top">
                <Header>
                <Logo/>
                <Menu
                    onSelect={this.onselect}
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={[cur_item]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                    主页
                    </Menu.Item>
                    <Menu.Item key="2">
                        课程
                    </Menu.Item>
                    <Menu.Item key="3">
                        题库
                    </Menu.Item>

                    <Menu.Item key="4">
                        Status
                    </Menu.Item>
                    
                    <AccountDropdown/>
                    
                </Menu>
                </Header>
                <Content id="content">
                {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }

}
export default withRouter(MainPageLayout);