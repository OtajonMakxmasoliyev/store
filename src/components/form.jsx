import * as React from "react";
import { Navigate } from "react-router-dom";

class Form extends React.Component  {

    state = { user: null, password: null };

    async handleSubmit(event) {
        event.preventDefault();
        try {
            let user = await event.target;
            this.setState({ user });
        } catch (error) {
            this.setState({ error });
        }
    }
    render() {
        let { user, error } = this.state;
        return (
            <div>
                {user ? <Navigate to="/home" replace={true} /> : null}

                <input type="text" name="username" onChange={(e) => this.setState({ user: e.target.value })} />
                <input type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })} />
                <input type="submit" onSubmit={(event) => this.handleSubmit(event)} />
            </div>
        )
    }
}


export default Form
