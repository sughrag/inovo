import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faBriefcase, faChartLine, faBullhorn, faSpider, faCogs, faFileCsv, faSearch, faLaptopCode, faCode,faShareAlt,faCodeBranch,faFileImport, faGlobe, faFileExport, faUserCog,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      {/*nav bar */}
      
    

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a  href="https://flowbite.com/" className="Absloute ">
        <img src="/images/logo.png" alt="Logo" width={200} height={130} />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#10316b] md:p-0 dark:text-white md:dark:text-[#10316b]" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
        </li>
        <li>
        <button className="bg-[#10316b] text-white  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-6 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Signup</button>
        </li>
        </ul>
    </div>
  </div>
</nav>


      {/* Navigation header }
      <nav className="bg-white py-4 px-8 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          {/* Logo placeholder }
          <div>
            <Image src="/images/logo.png" alt="Logo" width={300} height={180} />
          </div>
        </div>
      </nav>
    */}
{/* Header section with headline, subheadline, and animation */}
{ /*experiment */}

{ /*original */}
<header id="product" className="bg-white text-gray-900 py-20 px-10">
  <div className="container mx-auto flex flex-col md:flex-row">
    <div className="w-full md:w-1/2">
      <h1 className="text-7xl font-bold mb-4 text-[#10316b]">
        Extract Unstructured Data From Any Source in Minutes
      </h1>
      <p className="text-xl mb-6 text-gray-700">
        Leverage AI to automate data ingestion and transformation so you can get insights faster
      </p>
      {/* Add a call-to-action button if needed */}
      <a href="https://app.fateh.ai/" target="_blank" rel="noopener noreferrer">
        <button className="bg-[#10316b] text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">Get Started</button>
      </a>
    </div>
    <div className="w-full md:w-1/2 fl">
  {/* Add an animation or an image
  <Image src= alt="ETL Animation" width={600} height={400} className="mx-auto mt-[-10]" />
 here */} 
  <Image src="/images/QWc9.gif" alt="your gif"  width={700} height={500} className="rounded-full border border-gray-400 border-opacity-50"/>

</div>

  </div>
</header>



      {/*<!-- Features and benefits section -->*/}
      <section id="features"className="bg-white py-20 px-10">
      <div className="py-16 bg-indigo-50 overflow-hidden">
    <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div>
            <span className="text-[#10316b] text-lg font-semibold">Problems we will help you solve</span>
            <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">Efficient Data Extraction and Transformation Solutions</h2>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-3">

           
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <FontAwesomeIcon icon={faDatabase} className="w-10 text-green-800" />
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Time-consuming and labor-intensive data extraction</h5>
                        <p className="text-sm text-gray-600">Our rapid data extraction feature allows you to quickly access the data you need, without having to write any code.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
    <span className="text-sm">Read more</span>
    <FontAwesomeIcon icon={faArrowRight} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
</a>

                </div>
            </div>

           
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <FontAwesomeIcon icon={faGlobe} className="w-10 text-blue-800" />
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Limited access to diverse data sources</h5>
                        <p className="text-sm text-gray-600">Our extensive source compatibility feature ensures seamless data extraction from hundreds of websites and applications.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
    <span className="text-sm">Read more</span>
    <FontAwesomeIcon icon={faArrowRight} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
</a>

                </div>
            </div>

           
<div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
    <div className="relative p-8 space-y-8">
        <FontAwesomeIcon icon={faCodeBranch} className="w-10 text-yellow-800" />

        <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Managing and maintaining complex data pipelines</h5>
            <p className="text-sm text-gray-600">Our AI-powered pipelines automate the process, providing reliable and scalable data pipelines that save time and effort.</p>
        </div>
        <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
    <span className="text-sm">Read more</span>
    <FontAwesomeIcon icon={faArrowRight} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
</a>

    </div>
</div>

                    
                   
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <FontAwesomeIcon icon={faFileImport} className="w-10 text-red-800" />
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Error-prone and inefficient data import</h5>
                        <p className="text-sm text-gray-600">Our effortless data import feature, with built-in CSV data importer and customizable data validations, streamlines the process and reduces errors.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
    <span className="text-sm">Read more</span>
    <FontAwesomeIcon icon={faArrowRight} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
</a>

                </div>
            </div>

            
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <FontAwesomeIcon icon={faFileExport} className="w-10 text-green-800" />
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Challenges in exporting and integrating data</h5>
                        <p className="text-sm text-gray-600">Our comprehensive data export features make it easy to use data with your favorite tools and platforms for analysis, visualization, and more.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
    <span className="text-sm">Read more</span>
    <FontAwesomeIcon icon={faArrowRight} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
</a>

                </div>
            </div>

            
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <FontAwesomeIcon icon={faUserCog} className="w-10 text-blue-800" />
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Overcoming the steep learning curve of complex tools</h5>
                        <p className="text-sm text-gray-600">Our user-friendly interface makes data extraction and transformation more accessible, allowing you to focus on getting the insights you need without dealing with complicated tools.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
    <span className="text-sm">Read more</span>
    <FontAwesomeIcon icon={faArrowRight} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
</a>

                </div>
            </div>
        </div>
    </div>
</div>


</section>


{/* Who is it for section */}
<section id="who-do-we-serve"className="bg-white py-20 px-10">
<div className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10" style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')" }}>
  <div className="container mx-auto">
    <h2 className="text-gray-900 text-center text-3xl font-bold mb-10">Who do we serve?</h2>
  </div>
  <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
      {/* Back office Data Collection Teams */}
      <p className="text-xl font-medium text-slate-700 mt-3">Back office Data Collection Teams</p>
    </div>
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
      {/* Data Science and ML Teams */}
      <p className="text-xl font-medium text-slate-700 mt-3">Data Science and ML Teams</p>
    </div>
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
      {/* Analysts and Researchers */}
      <p className="text-xl font-medium text-slate-700 mt-3">Analysts and Researchers</p>
    </div>
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
      {/* Marketing Teams */}
      <p className="text-xl font-medium text-slate-700 mt-3">Marketing Teams</p>
    </div>
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
      {/* Web Scraping Teams */}
      <p className="text-xl font-medium text-slate-700 mt-3">Web Scraping Teams</p>
    </div>
  </div>
</div>

</section>


  {/* Get in touch section */}
  <section className="bg-gray-100 py-20 px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-gray-900 text-3xl font-bold mb-6">Get in touch</h2>
          <p className="text-xl mb-6">We would love to hear from you and help you get started.</p>
          <a href="mailto:info@fateh.ai">
  <button className="bg-[#10316b] text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">Contact Us</button>
</a>
        </div>
      </section> 
    </div>
  );
};

export default Home;
