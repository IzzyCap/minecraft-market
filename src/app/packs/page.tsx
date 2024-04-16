import Card from '@/components/ui/card/card'
import classes from './packs.module.css'
import Pack from '@/modules/packs/domain/Pack'
import ApiPackRepository from '@/modules/packs/infra/api/ApiPackRepository'
import { getPacksByType } from '@/modules/packs/application/get-all/getPacksByType'

const packRepository = new ApiPackRepository()

function showPacks (packs: Pack[]) {
  return (
    packs.map((pack: Pack) => {
      return (
        <Card key={pack?.details?.name} packInfo={pack}/>
      )
    })
  )
}

export default async function Packs () { // [TODO] modify to just accept pack type
  const packs = await getPacksByType(packRepository)('Shader', 1, 8)

  return (
    <>
      <section>
        <div className={classes.packContainer}>
          {showPacks(packs)}
        </div>
      </section>
    </>
  )
}
