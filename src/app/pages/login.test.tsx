import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/lib/firebase";

import { handleLogin } from './login';

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

jest.mock('@/lib/firebase', () => ({
  auth: {},
}));

describe('handleLogin', () => {
  it('calls signInWithEmailAndPassword with correct credentials', async () => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue(undefined);

    await handleLogin();
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      'test@test.com', '123456'
    );
  });
});