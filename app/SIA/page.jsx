'use client'

import { useState , useEffect } from 'react'; 
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
        

      <main className={`min-h-screen bg-gray-50 ${inter.className}`}>
        

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Welcome to Your Project Milestone
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              This is a clean, modern NextJS template ready for your project development.
              Customize it to showcase your milestone achievements.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overview Section */}
          <section id="overview" className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="text-xl font-semibold mb-4">Objective</h4>
                <p className="text-gray-600">
                  Describe your project's main objective and goals here. 
                  This section should clearly communicate what you're building and why.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="text-xl font-semibold mb-4">Timeline</h4>
                <p className="text-gray-600">
                  Outline your project timeline, key milestones, and deliverables. 
                  Keep stakeholders informed about progress and upcoming phases.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Fast Performance</h4>
                <p className="text-gray-600">Built with NextJS for optimal performance and SEO.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Responsive Design</h4>
                <p className="text-gray-600">Fully responsive layout that works on all devices.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Clean Code</h4>
                <p className="text-gray-600">Well-structured, maintainable TypeScript code.</p>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section id="demo" className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Demo & Progress</h3>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-6 4h6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Interactive Demo</h4>
                <p className="text-gray-600 mb-6">
                  Add your project demo, screenshots, or interactive components here.
                  This is where you can showcase your actual work and progress.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Demo
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Project Milestone Template</h4>
              <p className="text-gray-400">
                Built with NextJS, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}