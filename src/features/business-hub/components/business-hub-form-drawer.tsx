/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"


import { Button } from "@/components/button";
import { FormDrawer, InputField } from "@/components/forms";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
// import { useDisclosure } from "@/hooks/use-disclosure";
import axios from "axios";
import { useCreateOrUpdateBusinessHub } from "../api";



interface BusinessHubDrawerProps {
    businessHub?: any
    title?: string
    triggerButton?: any
    isOpen?: any
    close?: any
    open?: any
}

export function BusinessHubFormDrawer({
    businessHub,
    title,
    triggerButton,
    isOpen,
    close,
    open
}: BusinessHubDrawerProps) {

    const mutation = useCreateOrUpdateBusinessHub(businessHub?.businessUnitId)

    const [formData, setFormData] = useState({
        businessUnitName: "",
        region: "",
        state: "",
        contactPerson: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(true);



    // Update disabled state whenever formData changes
    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== "");
        setDisabled(!allFieldsFilled);
    }, [formData]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await mutation.mutateAsync({
                businessUnitName: formData?.businessUnitName,
                region: formData?.region,
                state: formData?.state,
                contactPerson: formData?.contactPerson

            })
        }

        catch (error) {
            toast.error('Error, try again!')
        }
        
        

        // try {
        //     const response = await axios.post("http://172.16.10.29:8045/api/business-units", formData);
        //     setMessage(response.data.message || "Form submitted successfully");
        //     toast.success(response.data.message || "Form submitted successfully");
        //     setFormData({
        //         businessUnitName: "",
        //         region: "",
        //         state: "",
        //         contactPerson: ""
        //     });
        //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // } catch (error) {
        //     setMessage("Submission failed! Try again.");
        //     toast.error("Submission failed! Try again.");
        // } finally {
        //     setLoading(false);
        // }
    };

    useEffect(() => {
        if (businessHub){
            setFormData({
                businessUnitName: businessHub.businessUnitName || "",
                region: businessHub.region || "",
                state: businessHub.state || "",
                contactPerson: businessHub.contactPerson || "",
            });
        }
        
    }, [businessHub])

    return (
        <FormDrawer
            title={businessHub?.businessUnitId ? "Edit Business Hub Details" : "Add Business Hub"}
            isDone={mutation.isSuccess}
            isOpen={isOpen}
            triggerButton={triggerButton}
            close={close}
            open={open}
            submitButton={
                <Button
                    form="business-hub-form"
                    type="submit"
                    size="sm"
                    variant="primary"
                    isLoading={mutation.isPending}
                // onClick={handleSubmit}
                >
                    Submit
                </Button>
            }
        >
            <>

                {/* <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3"> */}
                {/* ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2 */}
                <form onSubmit={handleSubmit} id="business-hub-form" className="bg-white ">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid grid-cols-1 space-x-5">
                            <InputField
                                type="text"
                                name="businessUnitName"
                                label="Business Unit Name"
                                value={formData.businessUnitName}
                                onChange={handleChange}
                                required
                            />

                            <InputField
                                type="text"
                                name="region"
                                label="Region"
                                value={formData.region}
                                onChange={handleChange}
                                required
                            />

                            <InputField
                                type="text"
                                name="state"
                                label="State"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />

                            <InputField
                                type="text"
                                name="contactPerson"
                                label="Contact Person"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                </form>
                {/* </div> */}

            </>
        </FormDrawer >
    )
}