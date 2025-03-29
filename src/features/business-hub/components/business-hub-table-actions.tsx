/* eslint-disable @typescript-eslint/no-unused-vars */
import { DropdownMenu, DropdownMenuItem, DropdownMenuItemDeleteModal, DropdownMenuItemFormWizardDrawer, DropdownMenuItemViewDrawer } from "@/components/dropdown-menu";
import { GetBusinessHubResponse } from "../schema";
import { BusinessHubViewDetils } from "./business-hub-view-details";
import { EllipsisIconButton } from "@/components/icon-button";
import { useDeleteBusinessHub } from "../api";
import { BusinessHubFormDrawer } from "./business-hub-form-drawer";


interface Props {
    businessHub: GetBusinessHubResponse
}


export function BusinessHubTableActions({ businessHub }: Props) {

    const deleteMutation = useDeleteBusinessHub()
    return (
        <>
            {/* <BusinessHubViewDrawer businessHub={businessHub}/> */}

            <DropdownMenu buttonTrigger={<EllipsisIconButton />}>
                <DropdownMenuItem>
                    <DropdownMenuItemViewDrawer title="Business Hub Details"
                    >
                        <BusinessHubViewDetils businessHub={businessHub} />
                    </DropdownMenuItemViewDrawer>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuItemFormWizardDrawer
                        render={({ close, isOpen, open }) => (
                            <BusinessHubFormDrawer
                                isOpen={isOpen}
                                open={open}
                                close={close}
                                businessHub={businessHub}
                            />
                        )}
                    />

                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuItemDeleteModal
                        mutation={deleteMutation}
                        id={{ businessHubId: businessHub?.businessUnitId }}>

                    </DropdownMenuItemDeleteModal>
                </DropdownMenuItem>
            </DropdownMenu>

        </>
    )
}