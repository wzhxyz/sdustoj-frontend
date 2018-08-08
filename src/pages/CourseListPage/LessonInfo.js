/**
 * @description 课程详细信息展示表
 * TODO:
 */
import React from 'react';
import {Table, Card} from 'antd';

/**
 * @description 课程信息英文至中文的翻译映射
 */
const LessonE2CMap = {
    'meta' : '课程类别ID',
    'meta_caption' : '课程类别名称',
    'cid' : '课程ID',
    'caption' : '课程名称',
    'creator' : '课程登录人',
    'create_time' : '课程登录日期',
    'updater' : '课程信息最近更新者',
    'update_time' : '课程信息最近更新时间',
    'available' : '课程状态',
    'deleted' : '废弃',
    'introduction' : '课程介绍',
    'start_time' : '课程开始日期',
    'end_time' : '课程结束日期'
};

/**
 * @description 任务信息 英文至中文的翻译映射
 */
const MissionE2CMap = {
    'id' : '任务ID',
    'caption' : '任务名称',
    'course_meta' : '课程类别ID',
    'meta_caption' : '课程类别名称',
    'start_time' : '任务开始时间',
    'end_time' : '任务结束时间',
    'available' : '任务状态',
    'deleted' : '废弃',
    'create_time' : '任务登录日期',
    'creator' : '任务登录人',
    'update_time' : '任务信息最近更新时间',
    'updater' : '任务信息最近更新者',
    'mode' : '任务模式', //{ ??? 什么意思
    'type' : '成绩评判模式',
    'score_display' : '成绩显示',
    'submission_display' : '提交范围',
    'valid_submission' : '有效提交',    // }
};


let createData = (attr, val)=>{
    return {
        attribute : attr,
        value : val,
    };
}

/**
 * @description 提供英文至中文的翻译映射
 * @param lessonInfo 后台返回的课程信息（json格式）
 * @returns Table 可以使用的 dataSource 
 */
let attributeMap = (lessonInfo)=> {
    let dataList = [];
    for(var key in lessonInfo)
    {
        dataList.push(createData(LessonE2CMap[key], lessonInfo[key]));
    }
    return dataList;
}


const columns = [{
    title : '属性',
    dataIndex : 'attribute',
}, {
    title : '值',
    dataIndex : 'value',
}];

class LessonInfo extends React.Component {
    constructor(props)
    {
        super(props);
    }
    /**
     * @description 这里的dataSource处理有些慢，因为每次都需要去映射。更好的办法没发现。
     * 不过好在 this.props.data 是一个常数大小 :)
     */
    render() {
        return (
            <Card>
                <Table columns = {columns} dataSource = {attributeMap(this.props.data)}/>    
            </Card>
        );
    }

}
