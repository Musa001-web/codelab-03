/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"


interface UserProfileState {
    firstName: string,
    setFirstName: () => void,
    lastName: string,
    setLastName: () => void
}

const useAuthStore = create<UserProfileState> ((set) =>({
    firstName: "",
    lastName: "",
    setFirstName: () => set((state: any) => ({firstName: state.firstName})),
    setLastName: () => set((state: any) => ({lastName: state.lastName}))
}))