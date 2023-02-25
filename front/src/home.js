import React, {useEffect} from "react"
import Calendar from "react-calendar";
import moment from 'moment';

const DashboardMain = () => {
    const date = new Date()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
        <>
            <div className={'center-block'}>
                <div className={'ttq-dashbaord'}>
                <div className={'d-flex'}>
                    <div className={'card-one'}>
                        <div className={'d-flex'}>
                            <div className={'icons'}>
                            </div>
                            <div className={'content'}>
                                <p className={'students'}>Students</p>
                                <p>1500</p>
                            </div>
                        </div>
                    </div>
                    <div className={'card-one'}>
                        <div className={'d-flex'}>
                            <div className={'icons icon-te'}>
                            </div>
                            <div className={'content'}>
                                <p className={'students'}>Teachers</p>
                                <p>45</p>
                            </div>
                        </div>
                    </div>
                    <div className={'card-one'}>
                        <div className={'d-flex'}>
                            <div className={'icons icon-pe'}>
                            </div>
                            <div className={'content'}>
                                <p className={'students'}>Students</p>
                                <p>150000</p>
                            </div>
                        </div>
                    </div>
                    <div className={'card-one'}>
                        <div className={'d-flex'}>
                            <div className={'icons icon-de'}>
                                <img src={'/images/watch.gif'} alt={'dsf'} />
                            </div>
                            <div className={'content'}>
                                <p className={'students'}>{weekday[date.getDay()]}</p>
                                <p>{moment(date).format('DD  MMM. YYYY')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default DashboardMain;