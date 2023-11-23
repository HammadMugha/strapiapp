// import client from '@/lib/contentfulClient'
import HeroSec from '@/components/HeroSec';
import Latest from '@/components/Latest';
import Products from '@/components/Products';
import Service from '@/components/Service';


// const fetchRecipe = async() =>{
//   const res = await client.getEntries({content_type: 'recipe'})
// }

export default async function page() {

  return (
    <>
      <HeroSec />
      <Products />
      <Latest />
      <Service />
    </>
  )
}
