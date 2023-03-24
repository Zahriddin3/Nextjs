import Link from "next/link";

function Header() {
    return ( 
        <div className="bg-yellow-500 p-2 m-10 flex justify-around font-semibold rounded-full">
            <Link className="bg-white border rounded-full p-2" href={"/"}>Home</Link>
            <Link className="bg-white border rounded-full p-2" href={"/sardor"}>Sardor</Link>
            <Link className="bg-white border rounded-full p-2" href={"/sardor/youtube"}>Youtube</Link>
            <Link className="bg-white border rounded-full p-2" href={"/newpage"}>NewPage</Link>
            
        </div>
     );
}

export default Header;