import Image from "next/image";

export default function Home() {
  return (
        <div className="w-full min-h-screen overflow-hidden">
      <main className="w-full h-full">
        <div className="bg-[url('/home.jpg')] bg-no-repeat  bg-cover w-full min-h-screen  flex items-center justify-center md:block">
          <div className="min-h-screen w-full flex bg-[#034f20]/15 md:p-30 pt-[20%]">
            <div className="max-w-full max-h-fit w-full flex flex-wrap bg-white/90 rounded-2xl md:items-start items-center justify-center m-5 md:justify-start p-6 flex-col">
            <h1 className="text-[#034f20] md:text-4xl text-lg md:pb-10 pb-4 pt-2"><strong><i>Christmas is for Family</i></strong></h1>
            <p className="text-[#034f20] md:text-lg text-md overflow-auto"> We believe that Christmas is a time for families to come together; a special season best spent creating memories
              with your loved ones. Lights in the Heights provides Christmas lights custom fit to your home, without the hassle and
              work of doing it yourself.  Spend your time this holiday season with your loved ones, not toiling away on decorations.
              We are a family owned business from Fort Worth, and we want to help you celebrate the season. Whether you are looking
              for a simple design or you want to bring out your inner Clark Griswold; we have you covered.  </p>
            </div>
            </div>
            </div>
          </main>
        </div>


        );
}
