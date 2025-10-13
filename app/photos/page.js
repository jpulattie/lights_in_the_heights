import Image from "next/image";


export default function Photos() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <main className="w-full h-full">


        <div className="bg-[url('/home.jpg')] bg-no-repeat  bg-cover w-full min-h-screen  flex items-center justify-center md:block ">

          <div className="w-full min-h-screen flex bg-[#034f20]/15 md:p-30 pt-[20%] justify-center">
            <div className="max-w-full max-h-fit w-full flex flex-wrap bg-white/90 rounded-2xl md:items-start items-center justify-center m-5 md:justify-start p-6 flex-col">
              <h1 className="text-[#034f20] md:text-4xl  text-xl md:pb-10 pb-4 pt-2"><strong><i>Our Work</i></strong></h1>
              <div className="w-full max-w-full flex flex-wrap gap-4 justify-center md:justify-start items-center overflow-y-auto max-h-[60vh] p-2">
                <Image
                  className=" flex-shrink-0 p-2 "
                  src="/1.jpg"
                  alt="Lights in the Heights install photo 1"
                  width={270}
                  height={57}
                  priority
                />
                <Image
                  className=" flex-shrink-0 p-2 "
                  src="/2.jpg"
                  alt="Lights in the Heights install photo 2"
                  width={270}
                  height={57}
                  priority
                />
                <Image
                  className=" flex-shrink-0 p-2 "
                  src="/4.jpg"
                  alt="Lights in the Heights install photo 3"
                  width={270}
                  height={57}
                  priority
                />
                <Image
                  className=" flex-shrink-0 p-2 "
                  src="/3.jpg"
                  alt="Lights in the Heights install photo 4"
                  width={270}
                  height={57}
                  priority
                />

              </div>
            </div>

          </div>
        </div>
      </main>

    </div>



  );
}