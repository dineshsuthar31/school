import React, {useEffect} from "react"
import "./style.scss"
const GetDetails = () => {
    return (
        <>
            <div className={'all-student'}>
            <div className={'center-block'}>
                <div className={'all-student-list ttq-white-box'}>
                    <div className={'breadcrumb'}>
                        <h4>All Students List</h4>
                    </div>
                    <div className={'search-bar common-form'}>
                       <input type={'text'} placeholder={'search by ID'}/>
                       <input type={'text'} placeholder={'search by Name'}/>
                        OR
                       <select placeholder={'Search by Class'}>
                           <option>Search by Class</option>
                           <option>Class 1</option>
                           <option>Class 2</option>
                           <option>Class 3</option>
                       </select>

                        <select >
                           <option>Search by Section</option>
                           <option>Section 2</option>
                           <option>Section 3</option>
                       </select>
                        <button>search</button>
                    </div>
                    <div className={'data-table'}>
                        <table className={'table'}>
                            <thead>
                                <th>Student ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Father's Name</th>
                                <th>Date of Birth</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>--</td>
                                    <td>Suthar</td>
                                    <td>Male</td>
                                    <td>2nd</td>
                                    <td>A</td>
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
                                    <td>2nd</td>
                                    <td>A</td>
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
                                    <td>2nd</td>
                                    <td>A</td>
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
                                    <td>2nd</td>
                                    <td>A</td>
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
export default GetDetails;