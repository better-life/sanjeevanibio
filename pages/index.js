import Link from 'next/link'
import Hero from '../components/Hero'

const CategoryColumn = ({ items }) => {
  return (
    <nav class='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
      {items.map(item => (
        <Link href='products/clinical-chemistry'>
          <a key={item}>
            <span class='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                class='w-3 h-3'
                viewBox='0 0 24 24'
              >
                <path d='M20 6L9 17l-5-5'></path>
              </svg>
            </span>
            {item}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default function Home () {
  const categories = [
    'Clinical Chemistry',
    'Hematology',
    'Immunoassay',
    'Hemostasis',
    'Urinalysis',
    'Microbiology',
    'Rapid Tests',
    'POCT',
    'Blood Gas',
    'Molecular Diagnostics',
    'Histopathology',
    'Blood Bank'
  ]
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='text-center mb-20'>
            <h1 class='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
              Our Offerings
            </h1>
            <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
              Sanjeevani offers complete laboratory products including
              Histopathology and Blood Banking Systems & solutions in
              conjunction with , software and consultancy services that can
              serve the needs of laboratories of any size.
            </p>
          </div>
          <div class='flex flex-wrap -m-4'>
            <div class='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <CategoryColumn
                items={categories.slice(0, 3)}
                class='p-4 lg:w-1/4 sm:w-1/2 w-full'
              />
            </div>
            <div class='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <CategoryColumn
                items={categories.slice(3, 6)}
                class='p-4 lg:w-1/4 sm:w-1/2 w-full'
              />
            </div>
            <div class='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <CategoryColumn
                items={categories.slice(6, 9)}
                class='p-4 lg:w-1/4 sm:w-1/2 w-full'
              />
            </div>
            <div class='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <CategoryColumn
                items={categories.slice(9)}
                class='p-4 lg:w-1/4 sm:w-1/2 w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
