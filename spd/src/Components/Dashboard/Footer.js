import React from 'react'
import './Footer.css'


const Footer=()=> {
    let url=''
    return (
        <div className='container' >
            <div className='wrapper'>
            <div className='row'>
                <div className='col'>
                <div className='title'>Products</div>
                    <a className='link' href={url}>Stocks</a>
                    <a className='link' href={url}>Crypto</a>
                    <a className='link' href={url}>Fix Deposit</a>
                </div>
                <div  className='col'>
                <div className='title'>News</div >
                    <a className='link' href={url}>News</a>
                    <a className='link' href={url}>Awards</a>
                    <a className='link' href={url}>RSS</a>
                </div >
                <div  className='col'>
                <div className='title'>Quick Links</div >
                    <a className='link' href={url}>Calulator</a>
                    <a className='link' href={url}>Open Demat Account</a>
                </div >
                <div  className='col'>
                <div className='title'>About us</div >
                    <a className='link' href={url}>Abous us</a>
                    <a className='link' href={url}>Pricing</a>
                    <a className='link' href={url}>Blog</a>
                    <a className='link' href={url}>Investor Information</a>
                </div >
            
            </div>
            </div>
        </div>
    )
}

export default Footer