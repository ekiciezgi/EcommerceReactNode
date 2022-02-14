import React from 'react';
import Card from "../../components/Card/card.jsx"
import { Box, Flex, Grid,Button, GridItem } from '@chakra-ui/react'
import { fetchProductList } from '../../api'
import { useInfiniteQuery } from 'react-query'

// () =>fetch('http://localhost:4000/product').then(res =>res.json()
function Products() {

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
		getNextPageParam: (lastGroup, allGroups) => {
			const morePagesExist = lastGroup?.length === 12;

			if (!morePagesExist) {
				return;
			}

			return allGroups.length + 1;
		},
	});

  if (status === 'loading') return 'Loading...'
  if (status === 'error') return 'Error...'


  if (error) return 'An error has occurred: ' + error.message
  console.log(data)
  return <div>

    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
  
      {data.pages.map((group, i) => (
        <React.Fragment key={i} >
          {group.map((item) =>
            <Box key={item._id} w="100%">
              <Card item={item} />
            </Box>)}
        </React.Fragment>
      ))}
    </Grid>

    <Flex mt="10" justifyContent="center">
				<Button
					onClick={() => fetchNextPage()}
					isLoading={isFetchingNextPage}
					disabled={!hasNextPage || isFetchingNextPage}
				>
					{isFetchingNextPage
						? "Loading more..."
						: hasNextPage
						? "Load More"
						: "Nothing more to load"}
				</Button>
			</Flex>
  </div>;
}
export default Products;