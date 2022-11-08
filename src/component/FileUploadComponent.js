import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
        console.log(e.target.files[0]);
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', this.state.profileImg)
        axios.post("http://localhost:8070/file/upload", formData, {
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="file" onChange={this.onFileChange} />
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary d-block w-100 regButton" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        )
    }
}