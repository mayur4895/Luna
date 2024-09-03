 
import React from 'react'
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetImages } from '@/actions/getIMages';
 

export const useGetImages = () => {
    return useQuery({
      queryKey: ['useGetImages'],
      queryFn: async () => {
        const result = await  GetImages();
        if (result.error) {
          throw new Error(result.error);
        }
        return result;
      },
    });
  };

 
