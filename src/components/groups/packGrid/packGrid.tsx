import { getPacksByType } from '@/modules/packs/application/get-all/getPacksByType'
import classes from './packGrid.module.css'
import ApiPackRepository from '@/modules/packs/infra/api/ApiPackRepository'
import Pack from '@/modules/packs/domain/Pack'
import Card from '@/components/ui/card/card'

const packRepository = new ApiPackRepository()

interface Props {
  packType: string;
  page: number;
  elementsInPage: number;
}

function showPacks (packs: Pack[]) {
  return (
    packs.map((pack: Pack) => {
      return (
        <Card key={pack?.details?.name} packInfo={pack}/>
      )
    })
  )
}

export default async function PackGrid ({ packType, page, elementsInPage } : Props) {
  const packs = await getPacksByType(packRepository)(packType, page, elementsInPage)

  return (
    <div className={classes.packContainer}>
      {showPacks(packs)}
    </div>
  )
}
