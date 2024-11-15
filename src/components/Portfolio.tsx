import React from 'react';
import { Github, Linkedin, Twitter, Mail, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-20">
        <div className="text-2xl font-bold">
          ITH
        </div>
        <div className="flex items-center gap-6">
          <Mail className="h-5 w-5 text-gray-600" />
          <Sun className="h-5 w-5 text-gray-600" />
          <a href="#works" className="text-gray-600">Works</a>
          <a href="#resume" className="text-gray-600">Resume</a>
          <a href="#shelf" className="text-gray-600">Shelf</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto grid grid-cols-2 gap-20">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
            It's me
          </div>
          
          <h1 className="text-5xl font-bold space-y-2">
            <div>Pablo</div>
            <div>ithesk</div>
          </h1>

          <h2 className="text-xl font-semibold text-gray-600">
            CO-OWNER OF ITHESK LEARNING
          </h2>

          <p className="text-gray-600 leading-relaxed">
            AKA inventadoconpablo, Microsoldering Pro y Sysadmin IT apasionado por la tecnología.
            Especializado en desarrollo web con Python, NodeJS y NextJS, 
            con experiencia en domótica y impresión 3D.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <a href="https://github.com/ithesk" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-gray-600 hover:text-black transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-gray-600 hover:text-black transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-gray-600 hover:text-black transition-colors" />
            </a>
          </div>

          <button className="bg-red-400 text-white px-6 py-3 rounded-full hover:bg-red-500 transition-colors mt-8">
            Let's talk
          </button>
        </div>

        {/* Right Column - Profile Picture and Skills */}
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="relative w-full aspect-square mb-8">
            <img
              src="/profile.png"  // Aquí deberás colocar la ruta a tu imagen
              alt="Pablo ithesk"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-4">Current Projects</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium">Learning Path</h4>
                <p className="text-sm text-gray-600">Python, NodeJS, NextJS, Web Development</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium">ithesk Learning</h4>
                <p className="text-sm text-gray-600">Plataforma educativa en desarrollo</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-sm">Microsoldering Pro</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">Sysadmin IT</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">NodeJS</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">NextJS</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">Domótica</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">3D Printing</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;