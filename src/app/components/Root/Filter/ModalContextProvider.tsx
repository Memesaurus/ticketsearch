import React, { PropsWithChildren, useCallback, useState } from "react";
import { FilterKey } from "../RootContextProvider";


export type ModalKey = Exclude<FilterKey, "filmname"> | null;

export const ModalContext = React.createContext<ModalKey>(null);
export const ModalContextSwitcher = React.createContext<(val: ModalKey) => void>(() => {});

type Props = {

}

const ModalContextProvider = ({ children }: PropsWithChildren<Props>) => {
    const [modalState, setModal] = useState<ModalKey>(null);

    const switchModal = useCallback((type: ModalKey) => {
      setModal(type);
    }, []);

    return(
        <ModalContext.Provider value={modalState}>
            <ModalContextSwitcher.Provider value={switchModal}>
                {children}
            </ModalContextSwitcher.Provider>
        </ModalContext.Provider>
    )
}


export default ModalContextProvider;