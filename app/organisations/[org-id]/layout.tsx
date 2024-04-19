import { OrgParms } from '@type/params';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
};

export default async function OrganisationLayout(props: PropsWithChildren<{ params: OrgParms }>) {
    return (
        <>
            <div className="flex flex-1 flex-row">
                <main className="min-w-sm flex w-full flex-col">{props.children}</main>
            </div>
        </>
    );
}
