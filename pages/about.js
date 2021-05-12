import Image from 'next/image'
export default function About () {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-5 mx-auto flex flex-col'>
          <div className='lg:w-4/6 mx-auto'>
            <div className='rounded-lg overflow-hidden'>
              <Image
                width='1200'
                height='500'
                className='object-cover object-center h-full w-full'
                src='/about-banner.jpg'
              />
            </div>
            <div className='flex flex-col sm:flex-row mt-10'>
              <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left text-justify'>
                <p className='leading-relaxed text-lg mb-4 text-blue-500'>
                  Chances are you already know us No matter your laboratory
                  size, there is a scalable solution that matches your testing
                  needs. Sai Enterprises offers a broad spectrum of chemistry,
                  hematology, immunoassay, hemostasis, poct, molecular
                  diagnostics, urinalysis, blood gas testing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-5 pb-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              Our Unique Capabilities
            </h1>
            <div className='container px-5 py-5 mx-auto'>
              <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
                <div className='p-2 sm:w-1/2 w-full'>
                  <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      className='text-blue-500 w-6 h-6 flex-shrink-0 mr-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                      <path d='M22 4L12 14.01l-3-3'></path>
                    </svg>
                    <span className='text-left font-medium'>
                      Reducing Total Cost of ownership, operational costs.
                    </span>
                  </div>
                </div>
                <div className='p-2 sm:w-1/2 w-full'>
                  <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      className='text-blue-500 w-6 h-6 flex-shrink-0 mr-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                      <path d='M22 4L12 14.01l-3-3'></path>
                    </svg>
                    <span className='title-font font-medium'>
                      Optimize laboratory performance
                    </span>
                  </div>
                </div>
                <div className='p-2 sm:w-1/2 w-full'>
                  <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      className='text-blue-500 w-6 h-6 flex-shrink-0 mr-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                      <path d='M22 4L12 14.01l-3-3'></path>
                    </svg>
                    <span className='title-font font-medium'>
                      Uncompramised quality
                    </span>
                  </div>
                </div>
                <div className='p-2 sm:w-1/2 w-full'>
                  <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      className='text-blue-500 w-6 h-6 flex-shrink-0 mr-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                      <path d='M22 4L12 14.01l-3-3'></path>
                    </svg>
                    <span className='title-font font-medium'>
                      Predictability of result
                    </span>
                  </div>
                </div>
                <div className='p-2 sm:w-1/2 w-full'>
                  <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      className='text-blue-500 w-6 h-6 flex-shrink-0 mr-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                      <path d='M22 4L12 14.01l-3-3'></path>
                    </svg>
                    <span className='title-font font-medium'>
                      Committed to patient care
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex mt-6 justify-center'>
              <div className='w-16 h-1 rounded-full bg-blue-500 inline-flex'></div>
            </div>
          </div>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Lab Automation
                </h2>
                <p className='leading-relaxed text-base'>
                  Our workflow solutions allow busy laboratories to efficiently
                  and automatically manage many pieces of laboratory equipment
                  together to work seamlessly.
                </p>
              </div>
            </div>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <circle cx='6' cy='6' r='3'></circle>
                  <circle cx='6' cy='18' r='3'></circle>
                  <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Software Tools
                </h2>
                <p className='leading-relaxed text-base'>
                  Our Clinical Informatics Tools Enhance Diagnostics Solutions
                  and patient data with simple and easy-to-use interfaces.
                </p>
              </div>
            </div>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Quality Assessment
                </h2>
                <p className='leading-relaxed text-base'>
                  There is always a constant need to strike a balance between a
                  range of competing operational and financial priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
