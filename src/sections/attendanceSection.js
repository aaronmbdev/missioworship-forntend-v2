import React from "react";
import Attendance from "../components/attendance/attendance";
class AttendanceSection extends React.Component {

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <Attendance />
                    </div>
                </div>
            </div>
        )
    }
}

export default AttendanceSection;
