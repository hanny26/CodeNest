// Home.js

import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
   

      {/* Hero section */}
        {/* Hero section */}
        <div className="bg-blue-600 text-white py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, libero vitae sagittis mollis, lectus ex tristique metus, non tempus nisi ligula sit amet dui.</p>
        </div>
      </div>

      {/* About section */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" alt="About Us" className="rounded-lg" />
            </div>
            <div>
              <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, lorem et mollis gravida, justo nunc interdum risus, id ultrices nisi eros eget mauris. Vestibulum rutrum arcu ut ipsum feugiat, vitae congue ligula varius.</p>
              <p className="text-lg">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ac arcu nisi. Duis sed dolor id nisi lacinia condimentum. Nulla facilisi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="bg-gray-200 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Service 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Service 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Service 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, lorem et mollis gravida, justo nunc interdum risus, id ultrices nisi eros eget mauris."</p>
              <p className="text-lg font-semibold">- Client 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ac arcu nisi."</p>
              <p className="text-lg font-semibold">- Client 2</p>
            </div>
          </div>
        </div>
      </div>

 

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
