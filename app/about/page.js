// app/about/page.js
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">About Us</h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        Welcome to our contact form application! We strive to provide the best service and support to our users. 
        If you have any questions or feedback, feel free to reach out through our contact form. 
        We value your input and look forward to hearing from you!
      </p>
      
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/team.jpg" // Replace with your image path
          alt="Our Team"
          className="w-64 h-64 rounded-full shadow-lg mb-4"
        />
        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <p className="text-center text-gray-600">
          Our dedicated team is here to assist you and ensure a seamless experience with our application.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to create a user-friendly platform that enables effective communication between users and our support team. 
          We are committed to continuous improvement and innovation.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
        <p className="text-gray-600">Follow us on social media:</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
