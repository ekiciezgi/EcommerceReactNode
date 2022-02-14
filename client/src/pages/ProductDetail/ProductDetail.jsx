import React from 'react'
import{Box,Image,Button,Text} from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { fetchProduct } from '../../api'
import moment from 'moment'
import ImageGallery from 'react-image-gallery'
export default function ProductDetail() {

  const { product_id } = useParams();
  
	const { isLoading, isError, data } = useQuery(["product", product_id], () =>
  fetchProduct(product_id)
);
 
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error.</div>;
	}
console.log(data)
const images=data.photos.map((url)=>({original:url}));
  return (
    <div>
       <Button colorScheme='pink' >Add To Basket</Button>
       <Text as="h2" fontSize="xl">{data.title }</Text>
       <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
       <p>{data.description}</p>
       <Box margin="10px">
         <ImageGallery items={images} showThumbnails={false} ></ImageGallery>
       </Box>
    </div>
  )
}
