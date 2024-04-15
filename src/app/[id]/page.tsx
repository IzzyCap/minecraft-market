import classes from './pack.module.css'
import { notFound } from 'next/navigation'
import Pack from '@/modules/packs/domain/Pack'
import Banner from '@/components/ui/banner/banner'
import List from '@/components/ui/list/list'

const getPack = async (pack: string) => {
  const res = await fetch(`${process.env.URL}/api/packs/${pack}`, {
    next: { revalidate: 1 }
  })

  if (!res.ok) {
    notFound()
  }
  return res.json()
}

export default async function PackInfo ({
  params: { id }
} : {
  params : {id: string}
}) {
  const packData = await getPack(id)

  const [pack] = await Promise.all([packData]) as Pack[]
  console.log(pack)

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <Banner>
          <img src={pack.details.banner}/>
          <div className={classes.packInfo}>
            <h1>{pack.details.name}</h1>
            <p className={classes.description}>{pack.details.description}</p>
          </div>
        </Banner>
      </div>
      <div className={classes.rightColumn}>
        <Banner title='Download'>
          <List listElements={[
            {
              title: '1.20.4',
              link: pack.details.downloadLink
            },
            {
              title: '1.20.3',
              link: pack.details.downloadLink
            },
            {
              title: '1.20.2',
              link: pack.details.downloadLink
            }
          ]}>
          </List>
        </Banner>
      </div>
    </div>
  )
}
