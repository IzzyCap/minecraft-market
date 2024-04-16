import classes from './pack.module.css'
import { notFound } from 'next/navigation'
import Pack from '@/modules/packs/domain/Pack'
import Banner from '@/components/ui/banner/banner'
import List from '@/components/ui/list/list'
import ApiPackRepository from '@/modules/packs/infra/api/ApiPackRepository'
import { getPackById } from '@/modules/packs/application/get/getPackById'

const packRepository = new ApiPackRepository()

export default async function PackInfo ({
  params: { id }
} : {
  params : {id: string}
}) {
  const pack = await getPackById(packRepository)(id) as Pack

  if (!pack) {
    notFound()
  }

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
