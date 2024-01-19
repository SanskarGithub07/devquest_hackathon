import Image from "next/image"

const Clients = () => {
  return (
    <div className='text-center p-4 flex flex-col gap-5 bg-gray-100'>
    <div>
     <h1 className='text-3xl font-inter font-semibold'>Best from the websites</h1>
     <p className='font-inter font-normal'>Get the best possible price for the products</p>
     </div>
     <div className='flex flex-row gap-20 items-center justify-center p-4'>
       <Image src='/images/croma.png'alt='client' width={100} height={100}/>
       <Image src='/images/snapdeal.png'alt='client' width={100} height={100}/>
       <Image src='/images/ebay.png'alt='client' width={100} height={100}/>
       <Image src='/images/flipkart.png'alt='client' width={100} height={100}/>
     </div>
    </div>
  )
}

export default Clients