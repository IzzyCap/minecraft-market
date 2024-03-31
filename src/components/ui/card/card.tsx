'use client'
import classes from './card.module.css'
import Pack from '@/modules/packs/domain/Pack'

interface Props {
  packInfo: Pack;
}

export default function Card ({ packInfo }: Props) {
  const openModal = () => {
    console.log('Open Card')
  }

  return (
    <>
      <div className={classes.articleWrapper} onClick={openModal}>
        <figure className={classes.banner}>
          <img src={'https://zonacraft.net/wp-content/uploads/2023/12/super-duper-vanilla-shaders-384x216.webp'} alt="" />
        </figure>
        <div className={classes.articleBody}>
          <h2>{packInfo?.details?.name}</h2>
          <p>
            {packInfo?.details?.description}
          </p>
        </div>
      </div>
    </>
  )
}
