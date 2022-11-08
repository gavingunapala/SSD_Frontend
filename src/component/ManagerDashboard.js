import React, { useEffect, useState } from "react"
import axios from "axios";

const ManagerDashboard = () => {

    const [uploadedMessage, setMessage] = useState("");
    const [uploadedFile, setFile] = useState("");

    const messageSetter = (e) => {
        setMessage(e.target.value);
    }

    const fileSetter = (e) => {
        setFile(e.target.value);
    }

    const CreateMessage= () => {
        const newMessage = {
            UserId: "Pat",
            UploadedMessage: uploadedMessage
        };
        axios.post('http://localhost:8070/message/add', newMessage).then(() => {
            alert("Message Added successfully!!!")
        }).catch((err) => {
        });
    }

    const UploadFile= () => {
        const newMessage = {
            UserId: "Pat",
            UploadedFile: uploadedFile
        };
        axios.post('http://localhost:8070/message/add', newMessage).then(() => {
            alert("Message Added successfully!!!")
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
                        <h1>Send Messages</h1>
                    </div>
                    <br />
                    <div className="card adminHomeCard clean-card text-center">
                        <div className="card-body info">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Message</strong></p>
                                            <textarea className="form-control" type="text" onChange={messageSetter}
                                            />
                                        </div>
                                    </div>
                                    <br /><br /><br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit" onClick={CreateMessage}
                                            >Send Message
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
                        <h1>Upload Files</h1>
                    </div>
                    <br />
                    <div className="card adminHomeCard clean-card text-center">
                        <div className="card-body info">
                        <br /><br /><br />
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <input type="file"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                
                                 
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit"
                                            >Upload
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
export default ManagerDashboard;