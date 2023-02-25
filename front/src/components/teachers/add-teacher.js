import React, {useEffect} from "react"

const NewTeachers = () => {
    return (
        <>
            <div className={'center-block'}>
                <div className={'student-add-ttq ttq-white-box'}>
                    <h4>Add New Teacher's</h4>
                    <div className={'st-add'}>
                        <div className={'d-flex'}>
                            <div className={'st-info common-form'}>
                                <label>Teacher Name</label>
                                <input type={'text'} placeholder={'teacher name'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>Father Name</label>
                                <input type={'text'} placeholder={'father name'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>Mother Name</label>
                                <input type={'text'} placeholder={'father name'}/>
                            </div>
                        </div>

                        <div className={'d-flex'}>
                            <div className={'st-info common-form'}>
                                <label>Date Of Birth</label>
                                <input type={'date'} placeholder={'date of birth'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>Gender</label>
                                <input type={'text'} placeholder={'gender'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>Religion</label>
                                <input type={'text'} placeholder={'Religion'}/>
                            </div>
                        </div>

                        <div className={'d-flex'}>
                            <div className={'st-info common-form'}>
                                <label>Class</label>
                                <input type={'text'} placeholder={'Class'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>Section</label>
                                <input type={'text'} placeholder={'section'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>Select Documents</label>
                                <input type={'text'} placeholder={'document'}/>
                            </div>
                        </div>

                        <div className={'d-flex'}>
                            <div className={'st-info common-form'}>
                                <label>Phone Number</label>
                                <input type={'text'} placeholder={'phone'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>State</label>
                                <input type={'text'} placeholder={'state'}/>
                            </div>
                            <div className={'st-info common-form'}>
                                <label>Address</label>
                                <input type={'text'} placeholder={'Address'}/>
                            </div>
                        </div>
                    </div>
                    <button>add teacher's</button>
                </div>
            </div>
        </>
    )
}
export default NewTeachers;