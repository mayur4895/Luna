import React from 'react'
import { Button } from './ui/button'
import { IoAdd } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useModal } from '@/hooks/use-modal-store';
import { useGetImages } from '@/features/api/get-imagesoggallery';
import Image from 'next/image';
import { ScrollArea } from './ui/scroll-area';
import { AspectRatio } from './ui/aspect-ratio';

const Gallery = () => {
  const { type, onOpen } = useModal();
  const { data } = useGetImages();

  if (!data?.images) {
    return <div>No images</div>
  }

  return (
    <div>
      <div className="flex items-center gap-5 justify-between">
        <Button className='rounded-lg'>Gallery</Button>
        <div className='flex items-center gap-5'>
          <Button className='flex items-center gap-2 rounded-lg'
            onClick={() => { onOpen('AddImage') }}>
            <IoAdd size={20} /> Add Image
          </Button>
          <div className='flex items-center gap-2'>
            <div className=' rounded-full bg-black p-2 cursor-pointer'  ><GoArrowLeft /></div>
            <div className=' rounded-full bg-black p-2 cursor-pointer'><GoArrowRight /></div>
          </div>
        </div>
      </div>
      <ScrollArea className="mt-5 h-32 w-full rounded-md">
  <div className="grid grid-cols-3 gap-4">
    {data?.images?.map((img) => (
        <AspectRatio ratio={16 / 12} key={img.id} className="bg-transparent rounded-md">
        <Image  
          fill
          className="h-full w-full  rounded-lg  object-cover" 
          src={img.image || ""}
          alt="img"
          
        />
      </AspectRatio>
     
    ))}
  </div>
</ScrollArea>
    </div>
  )
}

export default Gallery