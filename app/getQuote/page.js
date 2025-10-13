'use client'


// make this entire page client side, useState and onSubmit to handle 
//form submission
export default function GetQuote() {

  /*
  async function apiCall(data) {
    "use client"
    const name = data.get('name')
    const address = data.get('address')
    const phone = data.get('phone')
    const email = data.get('email')
    const clientResponse = data.get('clientResponse')
  
    const response = await fetch('/app/api/contact/route.js', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
  
      body: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        email: email,
        clientResponse: clientResponse
  
      })
    })
    const dataFromAPI = await response.JSON();
    console.log(dataFromAPI)
  }*/

  const submitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name')
    const address = formData.get('address')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const clientResponse = formData.get('clientResponse')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          name: name,
          address: address,
          phone: phone,
          email: email,
          clientResponse: clientResponse

        })
      })
      const dataFromAPI = await response.JSON();
      console.log(dataFromAPI)
    } catch {
      console.log('error with next api')
    }


    console.log(`
    name: ${name} \n
    address: ${address} \n
    phone: ${phone} \n
    response: ${clientResponse}
    `)
    window.alert(`
    Thank you for reaching out! You input...

    name: ${name} \n
    address: ${address} \n
    phone: ${phone} \n
    response: ${clientResponse}
    `)
    event.target.reset();
    /*
    
      console.log(
        `id: ${process.env.GMAIL_CLIENT_ID}, \n
        token: ${process.env.GMAIL_REFRESH_TOKEN},\n
        secret: ${process.env.GMAIL_CLIENT_SECRET},\n
        user: ${process.env.GMAIL_USER}\n`
  
      )
      const oAuth2Client = new google.auth.OAuth2(
              process.env.GMAIL_CLIENT_ID,
              process.env.GMAIL_CLIENT_SECRET,
              "https://developers.google.com/oauthplayground"
          )
          oAuth2Client.setCredentials({ 
            refresh_token: process.env.GMAIL_REFRESH_TOKEN
          });
      
          const  token  = await oAuth2Client.getAccessToken();
          console.log('access token:', token)
      
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.GMAIL_USER, 
              clientId: process.env.GMAIL_CLIENT_ID,
              clientSecret: process.env.GMAIL_CLIENT_SECRET,
              refreshToken: process.env.GMAIL_REFRESH_TOKEN,
              accessToken: token 
            },
          });
          await transporter.sendMail({
              from: `Lights in the Height ${process.env.GMAIL_USER}`,
              to: `${email}`,
              subject: `Thank you for contacting us ${name}`,
              text: `We will be in touch shortly. Please check the information below and fill 
              the form out again if any contact information is incorrect \n 
              Name: ${name} \n Address: ${address} \n Phone: ${phone} \n Email: ${email} \n Message: ${clientResponse}`
          });
          await transporter.sendMail({
              from: `Lights in the Height ${process.env.GMAIL_USER}`,
              to: `lightsintheheightsfw@gmail.com`,
              subject: `New Contact form info ${name}`,
              text: `Name: ${name} \n Address: ${address} \n Phone: ${phone} \n Email: ${email} \n Message: ${clientResponse}`
          });
      */


  }


  return (
    <div className="w-full min-h-screen ">
      <main className="w-full h-full">
        <div className="bg-[url('/home.jpg')] bg-no-repeat  bg-cover w-full min-h-screen  flex items-center justify-center md:block">
          <div className="min-h-screen w-full flex bg-[#034f20]/15 md:p-20 pt-[20%] justify-center">
            <div className="max-w-fit max-h-[80vh] w-full flex flex-col md:flex-row bg-white/90 rounded-2xl items-center md:justify-end justify-start md:m-5  p-6 overflow-y-auto">
              <div className="md:flex md:flex-col md:pr-6 ">
                <h1 className="text-[#034f20] md:text-4xl text-center text-xl md:pb-10 pb-4 pt-2 "><strong><i>Contact us</i></strong></h1>
                <p className="text-[#034f20] md:text-md lg:text-xl text-sm text-wrap">
                  Want a quote?  Have a question?
                  <br />
                  <i>Contact us!</i>
                  <br />
                  <strong>Phone</strong><br />
                  (682) 233-5020
                  <br />
                  <strong>Email</strong><br />
                  lightsintheheightsfw@gmail.com</p>
              </div>
              <div className=" bg-[#034f20]/90 shadow-lg rounded-2xl p-2 mt-4 min-w-[30%] w-fit overflow-y-auto text-sm">
                <h3 className="mt-2 mb-2 text-white text-center text-shadow-lg"><strong>Contact Us</strong></h3>
                <form onSubmit={submitForm} className="pr-4 pt-2 pb-4 w-full flex flex-col ">
                  <div className="w-full pl-2">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-semibold text-white w-fit text-sm md:text-lg text-left rounded-2xl pl-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-full bg-green-50 pl-2 p-[.2em] rounded-2xl placeholder-[#034f20]/40 text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col">

                      <label htmlFor="phone" className="pt-2 font-semibold text-white w-fit text-sm md:text-lg text-left rounded-2xl pl-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Best phone number"
                        className="min-w-[30%] w-full bg-green-50 p-[.2em] pl-2 p-4 rounded-2xl placeholder-[#034f20]/40 text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col">

                      <label htmlFor="email" className="pt-2 font-semibold text-white w-fit text-sm md:text-lg text-left rounded-2xl pl-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        className="min-w-[30%] w-full bg-green-50 p-[.2em] pl-2 p-4 rounded-2xl placeholder-[#034f20]/40 text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address" className="pt-2 font-semibold text-white w-fit text-sm md:text-lg text-left rounded-2xl pl-2">Address</label>

                      <textarea

                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                        required
                        className="min-w-[30%] w-full bg-green-50 pl-2 p-4 p-[.2em] rounded-2xl placeholder-[#034f20]/40 text-black"

                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address" className="pt-2 font-semibold text-white w-fit text-sm md:text-lg text-left rounded-2xl pl-2">How can we help?</label>

                      <textarea
                        type="text"
                        id="clientResponse"
                        name="clientResponse"
                        placeholder="ex-'I'd like a quote'"
                        className="min-w-[30%] w-full bg-green-50 pl-2 p-4 p-[1em] rounded-2xl placeholder-[#034f20]/40 text-black"

                        required
                      />
                    </div>
                  </div>


                  <button type="Submit" className="mx-auto font-bold text-center text-white p-2 bg-[#c30f16] rounded-2xl mt-3 hover:bg-white hover:text-[#c30f16]">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>


  );
}