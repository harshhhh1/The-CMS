export function Navbar() {
    return(
        <div className=" p-4 flex items-center md:justify-between justify-end sticky top-0 z-10 bg-gray-100 h-11">
            <div className="sm:flex items-center justify-center w-full sm:text-xl text-md font-medium  ">Tilak Maharashtra Vidyapeeth</div>
            <div className="flex items-center min-w-fit max-w-full gap-4 justify-end">
                <div className="flex items-center justify-center relative">
                    <img src="/message.png" alt="message" width={20}/>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">3</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xs text-nowrap">Sachin Pathak</span>
                    <span className="text-[10px] text-gray-500 "> Admin </span>
                </div>
                <div className="">
                    <img src="/avatar.png" alt="profile" width={26} className="rounded-full" />
                </div>
            </div>
        </div>
    );
}