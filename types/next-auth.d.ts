import { AuthProvider, User as BaseUser } from '@repo/shared-lib/types/auth';
import 'next-auth';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface User extends BaseUser {
        provider: AuthProvider;
    }

    interface Session {
        user: User;
        error: string;
        accessToken: string;
        tokenEncoded: string
    }
}
