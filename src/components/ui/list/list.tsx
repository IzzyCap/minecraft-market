import React from 'react'
import classes from './list.module.css'
import Image from 'next/image'

interface ListElement {
  title: string;
  link: string;
}

interface Props {
  listElements: ListElement[];
}

export default function Banner ({ listElements }: Props) {
  const displayList = (listElements: ListElement[]) => {
    return listElements.map((element: ListElement, index: number) => (
      <a key={index} className={classes.element} href={element.link}>
        {element.title}
        <span>
          <Image src='/icons/download.svg' alt='Download button' width={18} height={18}/>
        </span>
      </a>
    ))
  }

  return <div className={classes.list}>{displayList(listElements)}</div>
}
