const Footer = () => {
  return (
    <div className="text-white py-8 bg-black">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Qevlar</h1>
        <div className="flex justify-center space-x-4">
          <a href="#testsummary" className="hover:text-gray-300">
            Features
          </a>
          <a href="#team" className="hover:text-gray-300">
            Team Info
          </a>
          <a
            href="https://github.com/oslabs-beta/qevlar"
            className="hover:text-gray-300"
          >
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
