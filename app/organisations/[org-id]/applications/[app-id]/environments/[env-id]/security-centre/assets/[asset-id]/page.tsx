import { OrgAppEnvParamsAssetParams } from '@type/params';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
};

export default async function ApplicationAsset(props: { params: OrgAppEnvParamsAssetParams }) {
    const href = `/organisations/1/applications/1/environments/1/security-centre/assets/1/findings`
    return (
        <Link href={href}>
            Trigger Intercepting route
        </Link>
    );
}
