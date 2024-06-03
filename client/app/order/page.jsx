
import Checkout from '../Components/OrderPage';
import { fetchAddress } from '../../lib/fetchAddress';


export default async function Order() {
  const addressData = await fetchAddress();

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      <Checkout addressData={addressData} />
    </>
  )
}
