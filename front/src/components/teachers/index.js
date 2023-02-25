import React, {useEffect} from "react"
const GetTeachers = () => {
    return (
        <>
            <div className={'all-student'}>
                <div className={'center-block'}>
                    <div className={'all-student-list ttq-white-box'}>
                        <div className={'breadcrumb'}>
                            <h4>All Teachers List</h4>
                        </div>
                        <div className={'search-bar common-form'}>
                            <input type={'text'} placeholder={'search by ID'}/>
                            <input type={'text'} placeholder={'search by Name'}/>

                            <button>search</button>
                        </div>
                        <div className={'data-table'}>
                            <table className={'table'}>
                                <thead>
                                <th>Teacher's ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Father's Name</th>
                                <th>Date of Birth</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>--</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>--</td>
                                    <td>Suthar</td>
                                    <td>Male</td>
                                    <td>Mister's Suthar</td>
                                    <td>05/Jan/2000</td>
                                    <td>8290255610</td>
                                    <td>Sutharon ka room, Ahmedabad</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>--</td>
                                    <td>Suthar</td>
                                    <td>Male</td>
                                    <td>Mister's Suthar</td>
                                    <td>05/Jan/2000</td>
                                    <td>8290255610</td>
                                    <td>Sutharon ka room, Ahmedabad</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>--</td>
                                    <td>Suthar</td>
                                    <td>Male</td>
                                    <td>Mister's Suthar</td>
                                    <td>05/Jan/2000</td>
                                    <td>8290255610</td>
                                    <td>Sutharon ka room, Ahmedabad</td>
                                    <td>--</td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>--</td>
                                    <td>Suthar</td>
                                    <td>Male</td>
                                    <td>Mister's Suthar</td>
                                    <td>05/Jan/2000</td>
                                    <td>8290255610</td>
                                    <td>Sutharon ka room, Ahmedabad</td>
                                    <td>--</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GetTeachers;