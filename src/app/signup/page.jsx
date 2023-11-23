const signup = ()=>{
    return (
        <>
        <h2 className="text-center pb-[30px] text-2xl text-slate-600">Sign up</h2>
        <form action="" className="text-center flex flex-col place-items-center gap-4">
            <input type="text" placeholder="username" className="p-4 outline-none"/>
            <input type="text" placeholder="email" className="p-4 outline-none"/>
            <input type="password" placeholder="password" className="p-4 outline-none"/>
            <button type="submit"
             className="bg-blue-500 hover:bg-blue-700
              text-white font-bold py-1 px-3 rounded-lg mt-[20px]">Sign up</button>
        </form>
        </>
    )


}
export default signup