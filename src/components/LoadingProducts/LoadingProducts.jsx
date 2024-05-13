import React from 'react';
import './LoadingProducts.css'
import { Skeleton } from 'antd';

function LoadingProducts(props) {
    return (
        <div className='loadingProducts'>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
            <div className='item-loadingProducts'>
                <Skeleton.Avatar shape={'square'} style={{width: '310px', height:'413px'}} active/>
                <Skeleton active />
            </div>
        </div>
    );
}

export default LoadingProducts;