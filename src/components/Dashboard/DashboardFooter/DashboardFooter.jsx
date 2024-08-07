import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import moment from "moment";

const DashboardFooter = () => {
    return (
       <div className="md:ml-64">
      <footer className="footer footer-center  py-4 bg-black text-[#fff4ed]">
              <aside>
                  <div>
                     
                        <h2 className="flex items-center  text-2xl gap-2 pt-8">
            <span className=""> PicoWorkers</span>
       {/* <img src="" alt="" className=" w-10 h-10" /> */}
          </h2>
                  </div>
        
          <p>Contact Information - <span> <a href="/contact-us">  PicoWorker</a></span> </p>
        
          <p>Copyright © <span>{moment().format("YYYY")}. </span>All right reserved by -  PicoWorkers  </p>
          <div className="text-xl mt-2 flex items-center gap-4">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter/>
            </a>
          </div>
         
        </aside>
      </footer>
    </div>
    );
};

export default DashboardFooter;