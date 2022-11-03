import React, {useEffect, useState} from "react"
// import '../../styles/Admin/table.css'
// import AdminSideNav from "./AdminSideNav";
// import image from "../../img/user.png";
// import axios from "axios";
import {useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const history = useNavigate ();
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
            <section>
                <div className="row ">
                    <div className="col-md-6 col-xl-4">
                        {/* <AdminSideNav/> */}
                    </div>
                    <div className="col-md-6 col-xl-6">
                        <br/> <br/>
                        {/* <center><h1>Welcome {admin.Name}</h1></center> */}
                        <center><h1>Welcome</h1></center>
                        <br/> <br/>
                        <main className="page">
                            <section className="clean-block about-us">
                                <div className="row justify-content-center">

                                    <div className="card adminHomeCard clean-card text-center">
                                        {/* <img className="card-img-top d-block" src={image}/> */}
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
                                                    <br/>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="labels"><strong>Email</strong></p>

                                                            <input className="form-control" type="email"
                                                                   />
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="labels"><strong>Phone</strong></p>

                                                            <input className="form-control" type="text"
                                                                  />
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-warning d-block w-100 regButton"
                                                                    type="submit"
                                                                    >Update Profile
                                                            </button>
                                                        </div>
                                                        <br/><br/>

                                                        <div className="col-md-12">
                                                            <button className="btn btn-danger d-block w-100"
                                                                    type="submit"
                                                                    onClick={() => {
                                                                        if (window.confirm("Are you sure you want to delete your account?")) {
                                                                           
                                                                        }
                                                                        ;
                                                                    }}>Delete Account
                                                            </button>
                                                        </div>
                                                        <br/><br/> <br/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </section>
            <br/> <br/>
        </div>
    );
}
export default AdminDashboard;