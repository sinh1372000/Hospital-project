import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';


class HomeFooter extends Component {
    render() {


        return (
            <div className='home-footer' >
                <p>&copy;2022 Chào các bạn với Bệnh viện . More infomation, please visit project .
                    <a target='blank' href='https://www.youtube.com/watch?v=3t6eYCXWep8'>&#8594; Click here &#8592;</a></p>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default connect(mapDispatchToProps, mapDispatchToProps)(HomeFooter);