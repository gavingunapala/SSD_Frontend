import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const history = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const passwordSetter = (e) => {
        setPassword(e.target.value);
    }
    const emailSetter = (e) => {
        setEmail(e.target.value);
    }
    const nameSetter = (e) => {
        setName(e.target.value);
    }

    const CreateWorker= () => {
        const newWorker = {
            Name: name,
            Email: email,
            Password: password
        };
        axios.post('http://localhost:8070/worker/add', newWorker).then(() => {
            alert("Worker Added successfully!!!")
        }).catch((err) => {
        });
    }

    const CreateManager= () => {
        const newManager = {
            Name: name,
            Email: email,
            Password: password
        };
        axios.post('http://localhost:8070/manager/add', newManager).then(() => {
            alert("Manager Added successfully!!!")
        }).catch((err) => {
        });
    }

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
                                            <input className="form-control" type="text" onChange={nameSetter}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Email</strong></p>
                                            <input className="form-control" type="email" onChange={emailSetter}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Password</strong></p>
                                            <input className="form-control" type="text" onChange={passwordSetter}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit" onClick={CreateWorker}
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
                                            <input className="form-control" type="text" onChange={nameSetter}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Email</strong></p>
                                            <input className="form-control" type="email" onChange={emailSetter}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Password</strong></p>
                                            <input className="form-control" type="text" onChange={passwordSetter}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit" onClick={CreateManager}
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