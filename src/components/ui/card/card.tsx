'use client'
import classes from './card.module.css'
import Pack from '@/modules/packs/domain/Pack'
import { useRouter } from 'next/navigation'

interface Props {
  packInfo: Pack;
}

export default function Card ({ packInfo }: Props) {
  const router = useRouter()

  const openModal = () => {
    router.push('/' + packInfo.details.id)
  }

  return (
    <>
      <article className={classes.articleWrapper} onClick={openModal}>
        <figure className={classes.banner}>
          <img src={packInfo?.details?.banner} alt="banner" />
        </figure>
        <div className={classes.articleBody}>
          <h2>{packInfo?.details?.name}</h2>
          <p>
            {packInfo?.details?.description}
          </p>
        </div>
      </article>
    </>
  )
}
