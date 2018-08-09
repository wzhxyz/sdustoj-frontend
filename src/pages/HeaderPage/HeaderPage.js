import React from 'react';
import { Card } from 'antd';
export default class HeaderPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div id="header-block">
            <Card id="banner">{this.props.caption}</Card>
            <Card id="introduction">{this.props.introduction?this.props.introduction:"暂无通告"}</Card>
        </div>
        )
    }
};