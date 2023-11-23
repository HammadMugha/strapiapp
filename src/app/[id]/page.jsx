import client from '@/lib/contentfulClient'
import React from 'react'


//yeah aik builtin nextjs function ha jo pages ke paths return krta ha
// export const getStaticPaths = async()=>{
//   const res = await client.getEntries({
//     content_type: "recipe",
//   })
//   const paths = res.items.map((item)=>{
//     return{
//       params: {slug:item.fields.slug}
//     }

//     return{
//       paths,
//       fallback: false
//     }
//   })
// }

//yeah aik builtin nextjs function ha jo keh single page return krta ha props ki surrat mein
// export async function getServerSideProps({params}){
//  const { items } = await client.getEntries({
//   content_type: "recipe",
//   'fields.slug': params.slug
//  })

//  return{
//   props:{ recipe: items[0]}
//  }
// }


export default function page({recipe}) {
  return (
    <div>
      <h2>{recipe.title}</h2>
    </div>
  )
}
