import { FaBuilding } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";


import web from '../assets/web.png'
import app from '../assets/app.png'
import data from '../assets/data.png'
import market from '../assets/market.png'
import video from '../assets/video.png'
import peoplw from '../assets/peoplw.png'

export const jobsCompanies = [
  {
    tittle: "LiveJobs",
    amount: "3,779",
    icon: <BsPeopleFill size={25} />,
  },
  {
    tittle: "Companies",
    amount: "16,450",
    icon: <FaBuilding size={25} />,
  },
  {
    tittle: "Appointments",
    amount: "3,779",
    icon: <IoIosPaper size={25} />,
  },
];
export const Heading = [
  {
    tittle: "Home",
  },
  {
    tittle: "Find Jobs",
  },
  {
    tittle: "Post Jobs",
  },
  {
    tittle: "Contact Us",
  },
];

export const FeaturedJobsgroup1 = [
  {
    icon: <FaBuilding size={25} />,
    tittle: "Web Develpment",
    img:web,
    jobtime: "Full-Time",
    location: "USA",
  },
  {
    icon: <FaBuilding size={25} />,
    tittle: "Machine Learning",
    img:peoplw,
    jobtime: "Part-Time",
    location: "Canada",
  },
  {
    icon: <FaBuilding size={25} />,
    tittle: "Marketting",
    img:market,
    jobtime: "Full-Time",
    location: "Japan",
  },
  
];
export const FeaturedJobsgroup2 = [
  {
    icon: <FaBuilding size={25} />,
    img: data,
    tittle: "Data Entry",
    jobtime: "Full-Time",
    location: "USA",
  },
  {
    icon: <FaBuilding size={25} />,
    img:video,
    tittle: "Video Editing",
    jobtime: "Part-Time",
    location: "Canada",
  },
  {
    icon: <FaBuilding size={25} />,
    img:app,
    tittle: "App Developement",
    jobtime: "Full-Time",
    location: "Japan",
  },
  
];
