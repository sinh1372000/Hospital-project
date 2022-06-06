import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserManage.scss';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            });
        }
    }
    toggle = () => {
        this.props.toggleEditUser();
    }

    handleOnchangeInput = (event, id) => { // Nhập giá trị chuẩn ('Nhập 1 lần duy nhất')
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });

    }
    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {// hiểu theo cách viết khác là this.state.email ...  
                isValid = false;
                alert('Missing parameter : ' + arrInput[i]);
                break;
            }
        }
        return isValid; // có hợp lệ hay không
    }

    handleSaveUser = () => {
        let isValid = this.checkValidInput();

        if (isValid === true) { // khi mà người dùng nhập đủ thông tin thì mới chạy 
            //call  api edit user modal
            this.props.eEditUser(this.state);
        }

    }

    handleCloseUser = () => {
        this.setState({
            ...this.state
        });
    }//test


    render() {
        console.log("check props from parent : ", this.props);
        return (

            <Modal
                isOpen={this.props.isOpen} // để ko cho tự hiện lên
                toggle={() => { this.toggle() }} // mở lên khi sử dụng
                className={'modal-user-container'}
                size='lg'
            >

                <ModalHeader toggle={() => { this.toggle() }}> Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-container'>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                                    value={this.state.email}
                                    disabled
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type='password'
                                    onChange={(event) => { this.handleOnchangeInput(event, "password") }}
                                    value={this.state.password}
                                    disabled
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>First name</label>
                                <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, "firstName") }}
                                    value={this.state.firstName}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Last name</label>
                                <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, "lastName") }}
                                    value={this.state.lastName}
                                ></input>
                            </div>
                            <div className='input-container max-with-input'>
                                <label>Address</label>
                                <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, "address") }}
                                    value={this.state.address}
                                ></input>
                            </div>
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => { this.handleSaveUser() }}>Save change</Button>{''}
                    <Button color="secondary" className="px-3" onClick={() => { this.handleCloseUser() }}>close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


