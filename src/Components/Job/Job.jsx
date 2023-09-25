import { MdLocationOn } from "react-icons/md"
import { HiOutlineCurrencyDollar } from "react-icons/hi2"

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;


    return (
        // <div>
        //     <img className="w-24" src={logo} alt="" />
        // </div>
        <div className="card card-compact mt-16 bg-base-100 shadow-xl">
            <figure><img className="w-24" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border 
                    rounded border-[#7E90FE] text-[#7E90FE] mr-3">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border 
                    rounded border-[#7E90FE] text-[#7E90FE] mr-3">{job_type}</button>
                </div>
                <div className="flex gap-8">
                    <div className="mt-4" >
                        <h2 className="flex gap-2 "><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
                    </div>
                    <div className="mt-4">
                        <h2 className="flex gap-1"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>Salary:{salary}</h2>
                    </div>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>

            </div>
        </div>
    );
};

export default Job;