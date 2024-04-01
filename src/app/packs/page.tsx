import Card from '@/components/ui/card/card'
import classes from './packs.module.css'
import Pack from '@/modules/packs/domain/Pack'

// type Props = {}

async function getPacks () {
  const res = await fetch(`${process.env.URL}/api/packs/`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
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

export default async function Packs () { // [TODO] modify to just accept pack type
  const packsData = getPacks()

  const [packs] = await Promise.all([packsData])

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
