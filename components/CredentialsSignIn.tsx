'use server';

import { signIn } from 'auth';

// @ts-ignore
export function CredentialsSignIn({ body }) {
  return (
    <form
      action={async () => {
        await signIn('credentials', body);
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  );
}
