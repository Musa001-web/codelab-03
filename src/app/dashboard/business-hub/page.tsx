
// "use client"

// import { InputField } from "@/components/forms";
// // import { InputField } from "@/components/forms/input-field";
// import { BusinessHubTable } from "@/features/business-hub";
// // import { StatisticsCardList } from "@/features/dashboard";
// import { SingleStatisicCard, StatisticsCardList } from "@/features/dashboard";
// import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
// import axios from "axios";
// import { useState, useEffect, FormEvent } from "react";
// import toast from "react-hot-toast";


// const [loading, setLoading] = useState(false);
// const [message, setMessage] = useState("");
// const [disabled, setDisabled] = useState(true);



// export default function BusinessHub() {

//     function handleSubmit(event: FormEvent<HTMLFormElement>): void {
//         throw new Error("Function not implemented.");
//     }

//     function handleChange(e: any): void {
//         throw new Error("Function not implemented.");
//     }

//     return (
//         <>
            // <div>
            //     <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3"> 
            //         <form onSubmit={handleSubmit} className="bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2">
            //             <div className="px-4 py-6 sm:p-8">
            //                 <div className="grid grid-cols-2 space-x-5">
            //                     <InputField
            //                         type="text"
            //                         name="businessUnitName"
            //                         label="Business Unit Name"
            //                         value={formData.businessUnitName}
            //                         onChange={handleChange}
            //                         required
            //                     />

            //                     <InputField
            //                         type="text"
            //                         name="region"
            //                         label="Region"
            //                         value={formData.region}
            //                         onChange={handleChange}
            //                         required
            //                     />

            //                     <InputField
            //                         type="text"
            //                         name="state"
            //                         label="State"
            //                         value={formData.state}
            //                         onChange={handleChange}
            //                         required
            //                     />

            //                     <InputField
            //                         type="text"
            //                         name="contactPerson"
            //                         label="Contact Person"
            //                         value={formData.contactPerson}
            //                         onChange={handleChange}
            //                         required
            //                     />
            //                 </div>
            //             </div>
            //             <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            //                 <button type="button" className="text-sm/6 font-semibold text-gray-900">
            //                     Cancel
            //                 </button>
            //                 <button
            //                     type="submit"
            //                     disabled={disabled}
            //                     className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 
            //                     ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-500 focus-visible:outline-green-600"}
            //                 `}
            //                 >
            //                     {loading ? "Submitting..." : "Submit"}
            //                 </button>
            //             </div>
            //         </form>

            //     </div>
            // </div>
//         </>
//     )
// }