'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser,FaBriefcase,FaGlobe } from 'react-icons/fa';
import SaveContact from './SaveContact';

const Profile = () => {
    const [tab, setTab] = useState(0);
    const op = 'opacity-[0.4]';
  return (
    <>
        <div className='profile'>
          <div className='profile_picture'>
            <Image 
              src="/images/profile.jpg" 
              alt="Profile Picture" 
              width={393} 
              height={690}
              />
          </div>
          <div className='profile_info'>
            <h1 className='name'>Jacqueline <br />Tien Nguyen</h1>
            <h3 className='position'>Chief Executive Officer at DAFC</h3>
          </div>
        </div>
        <div className="profile_tabs">
          <div className="tabs_button">
            <button
              onClick={() => setTab(0)}
              className={`${tab === 0 ? '' : op}`}
            >
              <FaUser className="icon" />
            </button>
            <button
              onClick={() => setTab(1)}
              className={`${tab === 1 ? '' : op}`}
            >
              <FaBriefcase className="icon" />
            </button>
            <button
              onClick={() => setTab(2)}
              className={`${tab === 2 ? '' : op}`}
            >
              <FaGlobe className="icon" />
            </button>
          </div>
          {tab === 0 && (
            <div className="tabs_panel">
              <p><span>Mobile:</span> +84909 817 336</p>
              <p><span>Email:</span> jacquelinenguyen@imexpan.net</p>
            </div>
          )}
          {tab === 1 && (
            <div className="tabs_panel">
              <p>Duy Anh Fashion and Cosmetic JSC</p>
              <p>3rd floor, Centec tower, 72-74 Nguyen Thi Minh Khai, District 3, HCM City, Vietnam.</p>
              <p><span>Tax code:</span> 0304130177</p>
            </div>
          )}
          {tab === 2 && (
            <div className="tabs_panel">
              <p><span className='mr-6'>Website:</span> www.dafc.com.vn</p>
              <div className='flex items-center'>Follow us:
                <div className='flex gap-4 ml-5'>
                    <a href="#"><Image src="/images/icon-facebook.png" alt='Facebook' width={20} height={20} /></a>
                    <a href="#"><Image src="/images/icon-instagram.png" alt='Instagram' width={20} height={20} /></a>
                    <a href="#"><Image src="/images/icon-zalo.png" alt='Zalo' width={20} height={20} /></a>
                    <a href="#"><Image src="/images/icon-in.png" alt='Linkedin' width={20} height={20} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
        <SaveContact firstName="Jacqueline" lastName="Tien Nguyen" phone="+84909817336" email="jacquelinenguyen@imexpan.net" />
    </>
  )
}

export default Profile;