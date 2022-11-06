import React, { useEffect, useState } from "react"

const ManagerDashboard = () => {

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
                                            <textarea className="form-control" type="text"
                                            />
                                        </div>
                                    </div>
                                    <br /><br /><br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary d-block w-100 regButton"
                                                type="submit"
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