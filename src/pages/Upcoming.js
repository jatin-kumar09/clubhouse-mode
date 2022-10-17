import React, { useState } from 'react'
import style from "../style/explore.module.css"
import SubHeader from '../components/SubHeader'
import { DownOutlined, LoadingOutlined,HeartOutlined } from "@ant-design/icons"
import data from "../data/calender.json"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Upcoming = () => {
    const { people, conversation } = data;
    const [value, onChange] = useState(new Date());
    return (
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="ALL EVENTS" />
            </div>
            <h6>Upcoming Events ...</h6>
            <div className="row max-0">
                {conversation.map((item) => (
                    <div className="col-6 px-2 mb-3">
                        <div className={style.conversationCard}>
                            <h6>
                                <HeartOutlined style={{color:'red'}}/>
                                {item.title}
                            </h6>
                            <p><b><em>{item.description}</em></b></p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{marginLeft:'6vh'}}>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    )
}

export default Upcoming