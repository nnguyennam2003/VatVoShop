import React from 'react';
import './HeaderMobile.css'

function HeaderMobile(props) {
    return (
        <div className='headerMobile'>
            <div className='headerMobile-container'>
                    <ul>
                        <li><p className="headerMobile-item">Sản phẩm</p></li>
                        <li><p className="headerMobile-item">Hướng dẫn mua</p></li>
                        <li><p className="headerMobile-item">VATVOSTUDIO.VN</p></li>
                    </ul>
                </div>
        </div>
    );
}

export default HeaderMobile;