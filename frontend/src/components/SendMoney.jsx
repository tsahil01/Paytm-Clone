export function SendMoney({
    recipientName = "Usha Tiwaskar"
}){
    return<>
        <div className="flex items-center justify-center h-screen bg-slate-800 text-white">
            <div className="border-4 border-slate-600 rounded-lg p-7 flex flex-col gap-5 bg-slate-900">
                <div className="text-6xl font-bold flex justify-center pb-5">Send Money</div>
                <div className="flex flex-col gap-1">
                    <div className="text-xl font-bold">{recipientName}</div>
                    <input type="text" className="w-full rounded-lg  p-2 mt-2 outline-none bg-slate-800" name="" id=""  placeholder="Enter amount"/>
                </div>
                    <button className="rounded-lg bg-white text-black px-2 p-1 mt-2 outline-none border-slate-300 font-bold">Initiate Transfer</button>
            </div>
        </div>
    </>
}