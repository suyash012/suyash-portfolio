import React from 'react'

const Contact = () => {
  return (
    <div className='relative font-mono py-24 px-4 mt-16' id='contact'>
      <div className='relative text-center mb-12'>
        <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-mono text-gray-500 font-bold opacity-20'>CONTACT</h1>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          GET IN TOUCH
          <span className="block h-1 w-16 bg-red-500 mt-2 mx-auto"></span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-6 lg:p-10 bg-gray-50 rounded-lg shadow-lg">
        <div className="lg:w-1/2 p-4 sm:p-5">
          <h2 className="text-lg sm:text-xl font-bold mb-4">ADDRESS</h2>
          <p className="text-sm sm:text-base">N-806,officer city-1<br />Raj Nagar Extension<br />Ghaziabad,Raj Nagar Extension</p>
          <p className="mt-4 text-sm sm:text-base"><i className="fas fa-phone-alt mr-2"></i>(91+) 9354572059</p>
          <p className="mt-2 text-sm sm:text-base"><i className="fas fa-envelope mr-2"></i>suyashsoni983@gmail.com</p>
          <div className="mt-6">
            <h2 className="text-lg sm:text-xl font-bold mb-4">FOLLOW ME</h2>
            <div className="flex space-x-4">
              <i className="fab fa-dribbble text-lg sm:text-xl"></i>
              <i className="fab fa-twitter text-lg sm:text-xl"></i>
              <i className="fab fa-facebook text-lg sm:text-xl"></i>
              <i className="fab fa-google text-lg sm:text-xl"></i>
              <i className="fab fa-github text-lg sm:text-xl"></i>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 sm:p-5 mt-6 lg:mt-0">
          <h2 className="text-lg sm:text-xl font-bold mb-4">SEND US A NOTE</h2>
          <form>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input type="text" placeholder="Name" className="flex-1 p-2 mb-4 sm:mb-0 border border-gray-300 rounded text-sm" />
              <input type="email" placeholder="Email" className="flex-1 p-2 mb-4 sm:mb-0 border border-gray-300 rounded text-sm" />
            </div>
            <textarea placeholder="Tell us more about your needs..." className="w-full p-2 mt-4 border border-gray-300 rounded h-24 sm:h-32 text-sm"></textarea>
            <button type="submit" className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 text-sm sm:text-base">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact