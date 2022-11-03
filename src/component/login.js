import React, {useState} from 'react';

const Login = () => {
    const [userType, setUserType] = useState('');
    const userSetter = (e) => {
        setUserType(e.target.value);
    }
    return (
        <div>
            <form className="login-dark">
                <br/><br/><br/>
                <div className="container logForm col-md-6 col-xl-4">
                    <br/>
                    <center><h2 className="visually-hidden"> Login Form</h2></center>
                    <br /><br />
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="mb-3">
                        <select className="form-control" onChange={userSetter}>
                            <option className="dropdown-content">Choose user type</option>
                            <option className="dropdown-content" value="Worker">Worker</option>
                            <option className="dropdown-content" value="Manager">Manager</option>
                            <option className="dropdown-content" value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="mb-3"><input className="form-control" type="email" name="email"
                                                 placeholder="Email" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password"
                                                 placeholder="Password" /></div>
                    <div className="mb-3">
                        <button className="btn btn-primary d-block w-100" type="submit">Log In
                        </button>
                    </div>
                    <br/>
                </div>
            </form>
        </div>
    );

}

export default Login