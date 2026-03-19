import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from 'providers/AuthProvider';

export default function IndexPage() {
  const router = useRouter();
  const [{ authenticated, rockPersonId }] = useAuth();

  useEffect(() => {
    if (authenticated) {
      router.replace('/my-groups');
    } else if (rockPersonId === 'invalid' || rockPersonId === null) {
      router.replace('/login');
    }
  }, [authenticated, rockPersonId, router]);

  return null;
}
