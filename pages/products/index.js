const Card = ({ eyebrow, title, description }) => {
  return (
    <div class='lg:w-1/3 sm:w-1/2 p-4'>
      <div class='flex relative'>
        <img
          alt='gallery'
          class='absolute inset-0 w-full h-full object-cover object-center'
          src='https://dummyimage.com/600x360'
        />
        <div class='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
          <h2 class='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
            {eyebrow}
          </h2>
          <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
            {title}
          </h1>
          <p class='leading-relaxed'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Products () {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-20'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Clinical Diagnostics
          </h1>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>Blah Blah</p>
        </div>
        <div class='flex flex-wrap -m-4'>
          <Card
            title='Clinical Chemistry analyzers'
            eyebrow='Clinical Chemistry'
            description='Optimize your laboratory’s uptime, reliability and performance. Clinical Chemistry analyzers are medical laboratory equipments used to measure the concentration of certain substrates and enzymes (metabolites, electrolytes, proteins, and/or drugs) within samples of serum, plasma, urine and/or other body fluids.'
          />
          <Card
            title='Hematology Analyzers, Instruments And Systems'
            eyebrow='Hematology'
            description='Offers Accurate, first-pass results for viewing and counting blood cells from fully automated processes to enhance the medical laboratory operations and improve patient care.

            Do more with less,
            
            Our hematology instruments achieve accurate results quickly and
            achieves superb RBC, PLT and WBC differentials through near native-state cellular characterization.
            
            Reduces TAT
            Accurate results faster from difficult specimens
            Robust use of data management tools for auto-validation, Reduce manual work'
          />
          <Card
            title='Immunoassay Analyzers And Assays'
            eyebrow='Immunoassay'
            description=''
          />
          <Card title='' eyebrow='Hemostasis' description='' />
          <Card title='' eyebrow='Urinalysis' description='' />
          <Card title='' eyebrow='Blood Bank Products' description='' />
          <Card title='' eyebrow='Rapid tests' description='' />
          <Card title='' eyebrow='Microbiology' description='' />
          <Card title='' eyebrow='POCT' description='' />
          <Card title='' eyebrow='Histopathology' description='' />
          <Card title='' eyebrow='Blood Gas' description='' />
          <Card title='' eyebrow='Molecular Diagnostics' description='' />
        </div>
      </div>
    </section>
  )
}
