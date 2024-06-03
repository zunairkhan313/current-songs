// pages/cart.js
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import ClientCart from '../Components/ClientCart';


export default async function Cart() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
        `}</style>
      <ClientCart />
    </>
  );
}
