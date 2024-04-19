import { ReactNode } from "react";


export default function SecurityCentreAssetLayout({ children, triage }: { children: ReactNode, triage: ReactNode})  {
    return (
        <>
            {children}
            {triage}
        </>
    )
}