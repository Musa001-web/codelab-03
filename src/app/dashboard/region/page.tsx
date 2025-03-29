/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { Button } from "@/components/button";
// import { InputField } from "@/components/forms/input-field";
import { BusinessHubFormDrawer, BusinessHubTable } from "@/features/business-hub";
// import { StatisticsCardList } from "@/features/dashboard";
import { SingleStatisicCard, StatisticsCardList } from "@/features/dashboard";
import { useDisclosure } from "@/hooks/use-disclosure";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import axios from "axios";
import { PlusCircle } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Region() {

    const { isOpen, open, close } = useDisclosure()

    return (
        <>
            <StatisticsCardList />
            <div className="mt-10">
                <div className="">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl mb-4 text-black" >Business Hub List</h2>
                        <BusinessHubFormDrawer
                            isOpen={isOpen}
                            close={close}
                            open={open}
                            triggerButton={
                                <Button variant="primary"
                                    size="sm"
                                    startIcon={<PlusCircle className="h-5 w-5" />}
                                >
                                    Add Business Hub
                                </Button>
                            }
                        />

                    </div>
                </div>
            </div>
            <BusinessHubTable />

        </>
    );
}
