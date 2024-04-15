import React from 'react'
import classes from './banner.module.css'

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Banner ({ children, title }: Props) {
  return (
    <div className={classes.banner}>
      {title && <div className={classes.title}>{title}</div>}
      {children}
    </div>
  )
}
