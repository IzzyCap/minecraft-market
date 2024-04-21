'use client'
import classes from './categoryHeader.module.css'
import { useRouter } from 'next/navigation'

interface Props {
  packType: string;
}

export default function Category ({ packType } : Props) {
  const router = useRouter()

  const onClickHandler = () => {
    router.push('/packs/' + packType)
  }

  return (
    <header className={classes.typeHeader}>
      <h2>Minecraft Shaders</h2>
      <button onClick={onClickHandler}>+ Show more</button>
    </header>
  )
}
