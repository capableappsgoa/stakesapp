import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Flag from 'react-world-flags'
import {motion} from "framer-motion"
export default function CountriesFeatures(props) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
        <div className="mx-auto grid grif max-w-2xl rounded-3xl md:backgroundshadow py-10 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 justify-center  items-center lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 order-1 ">
            <div className="lg:max-w-lg text-left">
              <a
                href="javascript:void(0)"
                className="inline-flex  rounded-full p-3 pr-6 border border-[#0000002e] text-sm font-medium duration-150 hover:bg-white"
              >
                <Flag code="ind" className="w-7 h-7 mr-4"/>
                <p className="flex items-center inter">
                  Goa
                </p>
              </a>
              <p className=" text-3xl plus-jakarta-sans tracking-tight text-gray-900 sm:text-4xl mt-3">
                Invest in the Goa's top performing residential market
              </p>
              <p className="mt-6 text-lg leading-8 inter text-gray-600">
                Purchase shares in high yield properties in Goa and start
                earning monthly rental income today
              </p>
            </div>
            <div className="flex gap-x-3 sm:text-sm mt-5">
              <a
                href="javascript:void(0)"
                className="block py-3 px-4 font-medium text-center text-white rounded-lg bg-[#121c30]"
              >
                Learn more
              </a>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                <MdOutlinePlayCircleOutline className="w-5 h-5 text-blue-600" />
                Watch how it works{" "}
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <motion.div whileHover={{ scale: [null, 1, 1.1] }}
                      transition={{ duration: 0.3 }} className="parent_screenshot w-full flex items-center justify-end">
            <img
              alt="Product screenshot"
              src="https://i.ibb.co/f8SYcQL/stakes.png"
              className="w-full  rounded-xl lg:w-[full] md:-ml-4  lg:-ml-4"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
