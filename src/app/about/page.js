import Image from "next/image"
import img from '../../../public/images/hero.webp'

const about = () => {
  return (
    <div className="py-3">
     <div className="container  mx-auto">
        <h2 className="text-center text-xl font-bold">About us</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 content-center">
          <div className="left">
            <h2>What new is here?</h2>
            <p>Hello, I'm Amna Shah, a highly skilled and experienced frontend developer specializing in HTML, CSS, JavaScript, and Bootstrap. With five years of hands-on expertise, I have a strong command over crafting visually appealing and user-friendly websites. Additionally, I</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Show more</button>
          </div>
          <div className="right">
            <Image src={img} width={'100%'} height={'350'}/>
          </div>
        </div>
     </div>
    </div>
  )
}

export default about