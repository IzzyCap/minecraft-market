import PackGrid from '@/components/groups/packGrid/packGrid'

export default async function Packs ({
  params: { type }
} : {
  params : {type: string}
}) {
  return (
    <PackGrid packType={type} page={1} elementsInPage={8}/>
  )
}
