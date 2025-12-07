import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white py-16 mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          <div className='lg:col-span-1'>
            <Link to='/' className='flex items-center space-x-2 mb-6'>
              <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-lg'>🐾</span>
              </div>
              <span className='text-2xl font-bold text-white'>
                Pet Tashkent
              </span>
            </Link>
            <p className='text-gray-400 leading-relaxed'>
              Connecting pet lovers across Tashkent. Find your perfect companion
              or give a pet a loving home.
            </p>
            <div className='flex space-x-4 mt-6'>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200'
              >
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-200'
              >
                <FaInstagram />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-200'
              >
                <FaTwitter />
              </a>
              <a
                href='https://t.me/username'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-200'
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-white'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/buy-pets'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Buy Pets
                </Link>
              </li>
              <li>
                <Link
                  to='/adoption'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Adoption
                </Link>
              </li>
              <li>
                <Link
                  to='/donations'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Donations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-white'>Services</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/vet-map'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Veterinary Clinics
                </Link>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Pet Care Tips
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Adoption Process
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                >
                  Pet Health
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-white'>
              Contact Us
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <FaTelegramPlane className='text-blue-400 w-5 h-5' />
                <a
                  href='https://t.me/petadopt1234567890bot'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-blue-400'
                >
                  Telegram
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <FaPhone className='text-blue-400 w-5 h-5' />
                <a
                  href='tel:+998711234567'
                  className='text-gray-400 hover:text-blue-400'
                >
                  +998 93 105 03 31
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <FaMapMarkerAlt className='text-blue-400 w-5 h-5' />
                <span className='text-gray-400'>Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-slate-700 pt-8 mt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              &copy; 2024 Pet Tashkent. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a
                href='#'
                className='text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200'
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
