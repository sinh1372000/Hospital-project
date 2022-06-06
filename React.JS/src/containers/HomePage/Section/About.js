import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';


class About extends Component {
    render() {


        return (
            <div className='section-share section-about' >
                <div className='section-about-header'>
                    Chào mừng tới kênh thông tin :
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/XWvqQe15DKs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>Chúng tôi cam kết ứng dụng y học tiên tiến và khoa học quản trị để mang lại kết quả lâm sàng và chuẩn mực chăm sóc tốt nhất đáp ứng nhu cầu của  bệnh nhân. Tối ưu hóa những trang thiết bị và tài sản hiện có, mở rộng các dịch vụ y tế, không ngừng tìm kiếm những cơ hội mới, đầu tư thỏa đáng vào phát triển nguồn nhân lực, nâng cao chuẩn mực chăm sóc y tế cho đơn vị vì lợi ích của bệnh nhân.</p>
                        <p>Tích cực làm việc dựa trên cơ sở đề cao tính chính trực và đạo đức nghề nghiệp, thúc đẩy sự tôn trọng, đảm bảo sự công bằng, làm việc với tinh thần trách nhiệm cao nhất, những ứng xử phù hợp nhất và tuân thủ chặt chẽ nhất những nguyên tắc, chuẩn mực nghề nghiệp và qui định của Bộ Y tế.</p>
                    </div>
                </div>
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


export default connect(mapDispatchToProps, mapDispatchToProps)(About);