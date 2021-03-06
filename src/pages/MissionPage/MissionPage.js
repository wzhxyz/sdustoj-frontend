import './index.css';
import React from 'react';
import MissionSideBar from './MissionSideBar';
import ProblemTable from './ProblemTable';
import { withRouter } from "react-router-dom";
// import MissionGroupPage from './MissionGroupPage';
// const data = [
//     {
//         key: 0,
//         title: '课程概述',
//         description: ''
//     }, {
//         key: 2,
//         title: '实验',
//         description: ''
//     }, {
//         key: 3,
//         title: '作业',
//         description: ''
//     }
// ];
class LessonDetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            column : [],
            selected_id: 0,
            problem_data: []
        }
    }
    get_lesson_detail = () => {
        // fetch('', {
    
        // }).then(
            
        // );
    }
    componentDidMount() {
        this.get_mission_group(3);    
    }
    _convert_mission_group_data = (v) => {
        let data = [];
        v.results.map((item, key) => {
            data.push({key: item.id, title: item.caption})
            // console.log(data);
        })
        return data;
    }
    get_mission_group = (lesson_id) => {
        fetch(`http://127.0.0.1:8000/JudgeOnline/api/courses/${lesson_id}/mission-groups/`, {
            method: 'get',
            credentials: 'include'    
        }).then(res => res.json()).then((v) => this.setState({column: this._convert_mission_group_data(v)}));
    }
    get_mission = (mission_id) =>{
        let url = `http://127.0.0.1:8000/JudgeOnline/api/missions/${mission_id}/problems/?ordering=problem_id`;
        // console.log(url);
        fetch(url, {
            method: 'get',
            credentials: 'include'    
        }).then(res => res.json()).then((res)=> this.setState({problem_data: res.results}));
    }
    onSelectedChange = (selected_id) => {
        this.setState({
            selected_id: selected_id
        })
        if (selected_id == 1) {
            // console.log(this.props.match);
            //TODO: 这里设置了临时数据，不要忘记修改
            let mission_id = this.props.match.params.mission_id;
            this.get_mission(mission_id); 
        }
    }
    render() {
        return (
            <div id="lesson-detail">
                <div id="lesson-detail-banner">
                    {/* 程序设计基础 - 吴振寰 - 2018年秋季 */}
                    {/* <img src={pic}/> */}
                </div>
                <div id="lesson-detail-container">
                    <div id="lesson-detail-mission-sidebar">
                        <MissionSideBar column={this.state.column} onMissionChange={this.onSelectedChange} />
                    </div>
                    <div id="lesson-detail-content">
                        <ProblemTable data={this.state.problem_data}/>
                    </div>
                    <div id="lesson-detail-info-sidebar">
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(LessonDetailPage);