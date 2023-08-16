import React from 'react'
import Image from 'next/image'
import Avocados from '../../../public/avocados.jpg'
const facts =[
  {
    title: 'Most avocados come from Mexico.',
    info: 'Most avocados come from Mexico While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.'
  },
  {
    title: 'The conquistadors were huge fans.',
    info: 'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America.'
  },
  {
    title: '“Avocado” wasn’t its original name.',
    info: 'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”'
  },
  {
    title: 'It’s actually a fruit.',
    info: 'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae'
  },
  {
    title: 'There’s a secret trick to ripening them up quick',
    info: 'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.'
  },
]




const About = () => {
  return (
    <section className='flex flex-col justify-center items-center '>
      <h3 className='mm:text-[20px] ss:text-[28px]  md:text-4xl font-bold'>13 Surprising Facts About Avocados</h3>
      <div className=' flex flex-col justify-center items-center'>
        <Image src={Avocados} priority={true} alt='avocados' className=' mb-2 w-[710px] '/>
        <p className='text-dimGray3'>Originally from <a href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/" target='blank'>Taste of Home</a></p>
      </div>
      <ul className='grid mm:grid-cols-1 mm:w-[100%] sm:grid-cols-2 sm:w-[60%] gap-[4.5rem 3rem] mt-5'>
        {facts.map((fact, index) => (
          <li key={index} className='flex flex-col justify-start items-center m-5'>
            <div className='flex flex-row justify-center items-center mb-10'>
              <span className="relative text-dimGray2 text-[70px]">{index+1}</span>
              <p className={`mx-4 text-black font-bold`}>{fact.title}</p>
            </div>
            <p className='w-[70%]'>{fact.info}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About