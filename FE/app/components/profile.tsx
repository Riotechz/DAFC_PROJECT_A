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
              src="/images/profile_2.jpg" 
              alt="Profile Picture" 
              width={600} 
              height={600}
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
              <p><span className='pr-3'>Mobile:</span> <span>+84909 817 336</span></p>
              <p className='pt-[2px]'><span className='pr-6'>Email:</span> <span>jacquelinenguyen@imexpan.net</span></p>
            </div>
          )}
          {tab === 1 && (
            <div className="tabs_panel">
              <p>Duy Anh Fashion and Cosmetic JSC</p>
              <p><a  href='https://maps.app.goo.gl/RejN3baDcyNUycvX7' target='_blank'>3rd floor, Centec tower, 72-74 Nguyen Thi Minh Khai, District 3, HCM City, Vietnam.</a></p>
              <p><span>Tax code:</span> 0304130177</p>
            </div>
          )}
          {tab === 2 && (
            <div className="tabs_panel">
              <p><span className='mr-6'>Website:</span> <a href="https://www.dafc.com.vn" target='_blank'>www.dafc.com.vn</a></p>
              <div className='flex items-center pt-[2px]'>Follow us:
                <div className='flex gap-4 ml-5'>
                    <a href="https://www.facebook.com/DAFC.company" target='_blank'><Image src="/images/icon-facebook.png" alt='Facebook' width={20} height={20} /></a>
                    <a href="https://www.instagram.com/dafc.vn/" target='_blank'><Image src="/images/icon-instagram.png" alt='Instagram' width={20} height={20} /></a>
                    <a href="https://zalo.me/661854750494308935" target='_blank'><Image src="/images/icon-zalo.png" alt='Zalo' width={20} height={20} /></a>
                    <a href="https://www.linkedin.com/company/dafcvietnam" target='_blank'><Image src="/images/icon-in.png" alt='Linkedin' width={20} height={20} /></a>
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