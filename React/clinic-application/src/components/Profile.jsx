import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Profile(){
    const {user} = useContext(AuthContext);

    return (
        <>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form>
                                <h4>
                                    Your <span>Profile</span>
                                </h4>
                                <div className="form-row ">
                                    <div className="form-group col-lg-4">
                                        <label for="inputDepartmentName">Your ID</label>
                                        <input type="text" value={user._id} className="form-control" id="inputPatientName" placeholder="" />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label for="inputPatientName">Your Name </label>
                                        <input type="text" value={user.firstName} className="form-control" readOnly />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label for="inputDoctorName">Your'Email</label>
                                        
                                        <input type="text" value={user.email} className="form-control" id="inputPatientName" placeholder="" />
                                    </div>
                                    
                                </div>
                                <div className="form-row ">
                                    <div className="form-group col-lg-4">
                                        <label for="inputPhone">Phone Number</label>
                                        <input type="number" value={user.phoneNumber} className="form-control" id="inputPhone" />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label for="inputPhone">Gender</label>
                                        <input type="text" value={user.gender} className="form-control" id="inputPhone"  />
                                    </div>
                                </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}