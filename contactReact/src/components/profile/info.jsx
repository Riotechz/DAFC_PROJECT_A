import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaGlobe, FaPhone, FaEnvelope } from 'react-icons/fa';
import SaveContact from './SaveContact';
import { API_URL } from '../../configs';
import { Link } from "react-router-dom";

const Profile = ({ ...props }) => {
    const [tab, setTab] = useState(0);
    const op = 'opacity-[0.4]';
    const cssd = 'w-[21px] h-[21px] rounded-full bg-white text-black flex justify-center items-center text-[13px]'
    let phoneNumber = props.mobileNo ?? '';
    if (props.mobileNo.charAt(0) === '0') {
        phoneNumber = props.mobileNo.substring(1)
    }

    return (
        <>
            <div className='relative'>
                <div className='overflow-hidden relative pb-[100%]'>
                    <img className='absolute top-0 left-0 right-0 bottom-0 object-cover object-center w-full h-full'
                        src={props?.imageUrl}
                        alt='profile'
                        width={600}
                        height={600}
                    />
                </div>
                <div className='relative -mt-[70px] z-10 pt-[30px] pb-4 px-4 
                bg-[linear-gradient(0deg,#292929_65%,rgba(6,6,8,0)_100%)]
                min-h-[160px] flex flex-col gap-2 justify-end'>
                    <h1 className='text-white text-[32px] font-medium font-main leading-[1.3]'>
                        {props.firstName || 'undefined'}
                        <br />
                        {props.lastName || 'undefined'}
                    </h1>
                    <h3 className='text-white text-[20px] font-normal font-main'>
                        {props.position || 'undefined'}
                    </h3>
                </div>
            </div>
            <div className="px-4">
                <div className="flex gap-6 mb-4">
                    <button
                        onClick={() => setTab(0)}
                        className={`${tab === 0 ? cssd : op}`}
                    >
                        <FaUser className="icon" />
                    </button>
                    <button
                        onClick={() => setTab(1)}
                        className={`${tab === 1 ? cssd : op}`}
                    >
                        <FaBriefcase className="icon" />
                    </button>
                    <button
                        onClick={() => setTab(2)}
                        className={`${tab === 2 ? cssd : op}`}
                    >
                        <FaGlobe className="icon" />
                    </button>
                </div>
                {tab === 0 && (
                    <div className="font-normal font-main mb-5 leading-6 text-[14px] min-h-[100px]">
                        <p>
                            <span className='pr-3 inline-flex items-baseline'>Mobile:</span> 
                            <span>
                                <Link  className='inline-flex flex-grow items-center' to={`tel:+84${phoneNumber}`}>
                                    {'+84' + phoneNumber} 
                                    <FaPhone className='ml-2'/>
                                </Link>
                            </span>    
                        </p>
                        <p><span className='pr-6 inline-flex items-baseline'>Email:</span> 
                            <span>
                                <Link className='inline-flex flex-grow items-center' to={`mailto:${props.email}`}>
                                    {props.email ?? ' jacquelinenguyen@imexpan.net'} 
                                    <FaEnvelope className='ml-2'/>
                                </Link>
                            </span>
                            </p>
                    </div>
                )}
                {tab === 1 && (
                    <div className="font-normal font-main mb-5 leading-6 text-[14px] min-h-[100px]">
                        <p>Duy Anh Fashion and Cosmetic JSC</p>
                        <p><a href='https://maps.app.goo.gl/RejN3baDcyNUycvX7' target='_blank' rel="noreferrer">3rd floor, Centec tower, 72-74 Nguyen Thi Minh Khai, District 3, HCM City, Vietnam.</a></p>
                        <p><span>Tax code:</span> 0304130177</p>
                    </div>
                )}
                {tab === 2 && (
                    <div className="font-normal font-main mb-5 leading-6 text-[14px] min-h-[100px]">
                        <p><span className='mr-6'>Website:</span> <a href="https://www.dafc.com.vn" target='_blank' rel="noreferrer">www.dafc.com.vn</a></p>
                        <div className='flex items-center pt-[2px]'>Follow us:
                            <div className='flex gap-4 ml-5'>
                                <a href="https://www.facebook.com/DAFC.company" target='_blank' rel="noreferrer"><img src={`${API_URL}/assets/icons/icon-facebook.png`} alt='Facebook' width={20} height={20} /></a>
                                <a href="https://www.instagram.com/dafc_vietnam" target='_blank' rel="noreferrer"><img src={`${API_URL}/assets/icons/icon-instagram.png`} alt='Instagram' width={20} height={20} /></a>
                                <a href="https://zalo.me/661854750494308935" target='_blank' rel="noreferrer"><img src={`${API_URL}/assets/icons/icon-zalo.png`} alt='Zalo' width={20} height={20} /></a>
                                <a href="https://www.linkedin.com/company/dafcvietnam" target='_blank' rel="noreferrer"><img src={`${API_URL}/assets/icons/icon-in.png`} alt='Linkedin' width={20} height={20} /></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <SaveContact cellPhone={phoneNumber} {...props} />
        </>
    )
}

export default Profile;