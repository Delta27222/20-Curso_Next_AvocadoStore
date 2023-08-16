import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelected } from 'store/slices/uiSlice';

const footerLinks = {
  links: [
    {
      title: 'About us',
      opciones: ['Learn more'],
      pageLink: ['/about']
    },
    {
      title: 'Services',
      opciones: ['All products'],
      pageLink: ['/']
    },
    {
      title: 'Made by',
      opciones: ['By Platzi', 'Angel Hernandez'],
      pageLink: ['https://platzi.com', 'https://github.com/Delta27222']
    }
  ]
}


export const FooterComponent = ({}) => {
  const dispach = useDispatch();
  const onClickButton = () => {
    dispach(setSelected('footer'))
  }
  return (
    <footer className='flex flex-col justify-center items-center border-t-1 my-10'>
      <ul className='flex mm:flex-col xs:flex-row justify-between max-w-[60%] list-none  my-10'>
        {footerLinks.links.map((link, index) => (
        <div key={index} className={` ${index === 0 ? 'mt-0' : 'mt-5'} `}>
          <h2 className="text-lg font-bold mm:mb-0 xs:mb-5">{link.title}</h2>
          <ul key={index} className={` ${index !== footerLinks.links.length -1 ? 'mr-32' : 'mr-0'} `}>
            {link.opciones.map((opcion, idx) => (
              <li key={idx} className="mb-1">
                {link.pageLink.length === 2
                  ? idx !== 1
                      ? <a target='blank' href={link.pageLink[idx]}>
                          {opcion}
                        </a>
                      : <p>
                          Developed by <a target='blank' href={link.pageLink[idx]}>{opcion}</a>
                        </p>
                  : <Link href={link.pageLink[0]} onClick={onClickButton}>
                      {opcion}
                    </Link>
                }
              </li>
            ))}
          </ul>
        </div>
        ))}
      </ul>
    </footer>
  )
}
