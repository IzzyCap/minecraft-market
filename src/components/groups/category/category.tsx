import CategoryHeader from '../categoryHeader/categoryHeader'
import PackGrid from '../packGrid/packGrid'

interface Props {
  packType: string;
}

export default function Category ({ packType } : Props) {
  return (
    <section>
      <CategoryHeader packType={packType}/>
      <PackGrid packType={packType} page={1} elementsInPage={4}/>
    </section>
  )
}
