export default function Pricing() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <main className="w-full h-full">
        <div className="bg-[url('/home.jpg')] bg-no-repeat  bg-cover w-full min-h-screen  flex items-center justify-center md:block">
          <div className="min-h-screen w-full flex bg-[#034f20]/15 md:p-30 pt-[20%]">
            <div className="max-w-full max-h-fit w-full flex flex-wrap bg-white/90 rounded-2xl md:items-start items-center justify-center m-5 md:justify-start p-6 flex-col">
            <h1 className="text-[#034f20] md:text-4xl text-xl md:pb-10 pb-4 pt-2"><strong><i>Pricing</i></strong></h1>
            <h3 className="text-[#034f20] md:text-xl text-md overflow-auto"><i>From simple to Clark Griswold, we’ve got you covered
            </i><br /><br /></h3>
            <p className="text-[#034f20] md:text-lg text-sm overflow-auto"> 
              Our pricing is by the foot. The more lights you would like, the higher the cost.  Currently our rates
              are $4 per foot for new installations, $2.50 for labor and $1.50 for the cost of materials.  After
              the first year, should you choose to return, the following years installation only without new lights is $2.50
              per foot. <br /><br />The lights are yours to keep after the first year installation!<br /> <br />We charge an additional 
              charge for difficult rooflines that require additional labor.  </p>
            </div>
            </div>
            </div>
          </main>
        </div>


        );
}