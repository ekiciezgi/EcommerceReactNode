import React from 'react';
import{Box,Image,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import moment from 'moment';
export default function card({item}) {
  return (
<Box borderWidth="1px" overflow="hidden" padding="3px" borderRadius="lg">
      <Link to={`/product/${item._id}`}>
          <Image src={item.photos[0]} alt="product" loding="lazy" />
          <Box p="6px">
           <Box d="flex" alignItems="baseline">
            {moment(item.createdAt).format('DD/MM/YYYY')}
           </Box>
           <Box marginTop="1" fontWeight="semibold" as="h4" lineHeight="tight"  >
              {item.title}
           </Box>
           {item.price}
          </Box>
      </Link>
      <Button colorScheme='pink'>Add To Basket</Button>
 
  </Box>
  );
}
