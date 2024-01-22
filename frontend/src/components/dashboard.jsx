export default function Dashboard({
    firstname = "Sahil",
    balance = 5000
}){
    return<>
    <div className="h-screen bg-slate-800 text-white">
        <nav className="flex justify-between p-5 bg-slate-900 drop-shadow-2xl">
            <div className="font-black text-2xl bg-slate-900 my-auto">Payments App</div>
            <div className="flex gap-3">
                <div className="text-xl font-bold m-auto hidden md:block">Hello,</div>
                <button className="flex gap-2">
                <div className="text-xl bold m-auto hidden md:block">{firstname}</div>
                <div className="m-auto border rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                </div>
                </button>
            </div>
        </nav>

        <main>
            <div className="flex p-7 gap-5 justify-center">
                <div className="font-black text-xl">Your Balance: </div>
                <div className="text-xl">${balance}</div>
            </div>

            <div className="flex flex-col p-7 gap-2">
                <div className="font-black text-xl w-full">Users:</div>
                <input type="text"className="w-full rounded-lg bg-slate-900 p-3 mt-2 outline-none" placeholder="Search User" />
                <div className="flex justify-between mt-2">
                    <div className="font-bold my-auto">Other User's name</div>
                    <button className="rounded-lg bg-white text-black px-2 p-1 mt-2 outline-none border-slate-300 font-bold">Send Money</button>
                </div>
                
            </div>
        </main>
    </div>
    </>
}