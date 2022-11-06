import React, { useEffect, useState } from "react"
// import '../../styles/Admin/table.css'
// import AdminSideNav from "./AdminSideNav";
// import image from "../../img/user.png";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const history = useNavigate();
    const [admin, setAdmin] = useState([]);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // //get logged admin
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("user");
    //     console.log(loggedInUser);

    //     function getAdmin() {
    //         axios.get("http://localhost:8070/admin/get/" + loggedInUser).then((res) => {
    //             setAdmin(res.data);
    //             console.log(res.data);
    //         }).catch((err) => {
    //         })
    //     }

    //     getAdmin();
    // }, []);

    const phoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const emailSetter = (e) => {
        setEmail(e.target.value);
    }
    const nameSetter = (e) => {
        setName(e.target.value);
    }

    // const UpdateProfile = () => {
    //     const newAdmin = {
    //         Name: name,
    //         Phone: phone,
    //         Email: email
    //     };
    //     axios.put('http://localhost:8070/admin/updateOne/' + admin._id, newAdmin).then(() => {
    //         alert("Updated successfully!!!")
    //     }).catch((err) => {
    //     });
    // }

    // const deleteAdmin = (id) => {
    //     axios.delete('http://localhost:8070/admin/delete/' + id).then(() => {
    //         localStorage.clear();
    //         history.push('/login');
    //     }).catch((err) => {
    //         alert(err);
    //     })
    // };

    return (
        <div>
            <div class="row">
                <div class="col-md-1 column" />
                <div class="col-md-5 column">
                    <br /><br /><br />
                    <div class="text-center">
                        <h1>Add Worker</h1>
                    </div>
                    <br />
                    <div className="card adminHomeCard clean-card text-center">
                        <div className="card-body info">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Name</strong></p>
                                            <input className="form-control" type="text"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Email</strong></p>
                                            <input className="form-control" type="email"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Password</strong></p>
                                            <input className="form-control" type="text"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit"
                                            >Add Worker
                                            </button>
                                        </div>
                                        <br /><br /><br /><br /> <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-5 column">
                    <br /><br /><br />
                    <div class="text-center">
                        <h1>Add Manager</h1>
                    </div>
                    <br />
                    <div className="card adminHomeCard clean-card text-center">
                        <div className="card-body info">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Name</strong></p>
                                            <input className="form-control" type="text"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Email</strong></p>
                                            <input className="form-control" type="email"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Password</strong></p>
                                            <input className="form-control" type="text"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit"
                                            >Add Manager
                                            </button>
                                        </div>
                                        <br /><br /><br /><br /> <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminDashboard;