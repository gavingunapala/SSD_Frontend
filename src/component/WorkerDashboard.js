import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WorkerDashboard = () => {

    const [uploadedMessage, setMessage] = useState("");

    const messageSetter = (e) => {
        setMessage(e.target.value);
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

    return (
        <div>
            <div class="row col d-flex justify-content-center">
                <div class="col-md-5 column">
                    <br /><br /><br /><br /><br />
                    <div class="text-center">
                        <h1>Save Message</h1>
                    </div>
                    <br /><br />
                    <div className="card adminHomeCard clean-card text-center">
                        <div className="card-body info">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col">
                                            <p className="labels"><strong>Message</strong></p>
                                            <textarea className="form-control" type="text-area" onChange={messageSetter}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit" onClick={CreateMessage}
                                            >Save
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
export default WorkerDashboard;