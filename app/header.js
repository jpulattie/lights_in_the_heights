import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link"

export default function Header() {
    return (

        <div className="rounded-l-lg bg-[#c30f16] bg-opacity-80 flex flex-col md:w-[10%] w-[20%] h-[100%]  justify-center text-center gap-5 md:text-xl text-sm">

            <img 
                className="h-auto w-full p-1" 
                src="/logo2.png" 
                alt="image description"></img>
            <ul className="text-white/80 p-2 text-sm md:text-lg">
                <Link href="/"><h2 className="py-[5%] my-[5%]  hover:bg-white hover:text-[#c30f16] rounded-lg" >Home</h2></Link>
                <Link href="./getQuote"><h2 className="py-[5%] my-[5%] flex flex-wrap justify-center text-center hover:bg-white hover:text-[#c30f16]  rounded-lg">Get Quote</h2></Link>
                <Link href="./pricing"><h2 className="py-[5%] my-[5%]  hover:text-[#c30f16]  hover:bg-white rounded-lg">Pricing</h2></Link>
                <Link href="./photos"><h2 className="py-[5%] my-[5%]   rounded-lg   hover:bg-white hover:text-[#c30f16] ">Photos</h2></Link>
            </ul>

        </div>

    )
}


