import React from 'react';
import {connect} from 'react-redux';

import {addUser} from '../actions/actions';

class UserAdd extends React.PureComponent {

    state = {
        id: this.props.lastId + 1,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
        },
        phone: ''
    };

    render() {
        return (
            <div className="mt-4">
                <h1 className="mb-4">Add new user:</h1>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-2 col-form-label">Full name</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="name"
                               value={this.state.name}
                               onChange={(e) => this.onChangeInput(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-2 col-form-label">Username</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="username"
                               value={this.state.username}
                               onChange={(e) => this.onChangeInput(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-2 col-form-label">Email</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="email"
                               value={this.state.email}
                               onChange={(e) => this.onChangeInput(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="street" className="col-2 col-form-label">Street</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="street"
                               value={this.state.address.street}
                               onChange={(e) => this.onChangeAddress(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="suite" className="col-2 col-form-label">Suite</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="suite"
                               value={this.state.address.suite}
                               onChange={(e) => this.onChangeAddress(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="city" className="col-2 col-form-label">City</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="city"
                               value={this.state.address.city}
                               onChange={(e) => this.onChangeAddress(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="zipcode" className="col-2 col-form-label">Zip code</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="zipcode"
                               value={this.state.address.zipcode}
                               onChange={(e) => this.onChangeAddress(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-2 col-form-label">Phone</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="phone"
                               value={this.state.phone}
                               onChange={(e) => this.onChangeInput(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>
                </form>
            </div>
        );
    }

    onChangeInput(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    onChangeAddress(event) {
        const { id, value } = event.target;
        let address = { ...this.state.address, [id]: value };
        this.setState({ address });
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.props.addUser(this.state);
        this.props.history.push('/');
    }
}

const mapStateToProps = (state, ownProps) => ({
    lastId: state.users[state.users.length - 1].id,
});

const actions = {
    addUser,
};

export default connect(mapStateToProps, actions)(UserAdd);