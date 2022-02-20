import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [{ name: 'About Us', href: '/about' }]
export default function MainLayout ({ children }) {
  return (
    <div>
      <Head>
        <title>Saanjeevani Biotech</title>
        <meta name='description' content='Lab equipment provider' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Popover className='relative bg-white'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                  <Link href='/'>
                    <a>
                      <span className='sr-only'>Logo</span>
                      <Image
                        src='/logo.png'
                        alt='logo'
                        width='50'
                        height='50'
                      />
                    </a>
                  </Link>
                </div>

                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
                <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                  {navigation.map(item => (
                    <Link href={item.href} key={item.href}>
                      <a className='font-medium text-gray-500 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <a href='https://wa.me/918779046716' target='_blank'>
                    <img
                      style={{ display: 'inline' }}
                      width='64'
                      height='30'
                      src='/whatsapplogo.png'
                    />
                  </a>
                </div>
              </div>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                static
                className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20'
              >
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <div>
                      <Link href='/'>
                        <a>
                          <span className='sr-only'>Logo</span>
                          <Image
                            src='/logo.png'
                            alt='logo'
                            width='50'
                            height='50'
                          />
                        </a>
                      </Link>
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Close main menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navigation.map(item => (
                      <Link href={item.href} key={item.href}>
                        <a
                          key={item.name}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <a
                      href='https://wa.me/918779046716'
                      target='_blank'
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    >
                      <span className=''>Contact Us</span>
                      <img
                        style={{ display: 'inline' }}
                        width='64'
                        height='30'
                        src='/whatsapplogo.png'
                      />
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <main className='max-w-7xl mx-auto px-4 sm:px-6'>{children}</main>
      <footer className='text-gray-600 body-font bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-10'>
          <Image src='/logo-with-text.png' alt='logo' width='256' height='75' />
          <div className='container py-24 mx-auto flex items-center justify-between space-y-6 md:flex-row md:flex-nowrap flex-wrap flex-col'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.723535838184!2d80.20910675097265!3d13.116692490715463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526511edd99c19%3A0x18a50a7c5b0f1117!2sSanjeevani%20Biotech!5e0!3m2!1sen!2sin!4v1620737358634!5m2!1sen!2sin'
              width='400'
              height='250'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              className='shadow max-w-xs	md:max-w-md'
            ></iframe>
            <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
              <p className='text-base leading-tight px-5'>
              Sanjeevani Biotech, 41/538/C, P.K.C Complex,
              Adampillikkavu road, N F Gate.
              Tripunithura. Pin-682301.
              </p>
              <hr className='my-5'/>
              <p className='text-base leading-tight px-5'>
                No. 9/5, Ground Floor, North Facing,
                82nd Street, Ashok Nagar,
                Chennai 600018. <br/>India
              </p>
              <p className='text-sm m-5 text-blue-500'>
                <a href='mailto:sanjeevanibt@gmail.com'>
                  sanjeevanibt@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className='container mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-500 text-sm text-center sm:text-left'></p>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              <a className='text-gray-500'>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </a>
              <a className='ml-3 text-gray-500'>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                </svg>
              </a>
              <a className='ml-3 text-gray-500'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>
              <a className='ml-3 text-gray-500'>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='0'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
