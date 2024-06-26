import { Box, Container, Text } from '@chakra-ui/react'
import { useQueryClient } from 'react-query'
import { createFileRoute } from '@tanstack/react-router'

import { UserOut } from '../../client'

export const Route = createFileRoute('/_layout/')({
  component: Dashboard,
})

function Dashboard() {
  const queryClient = useQueryClient()

  const currentUser = queryClient.getQueryData<UserOut>('currentUser')

  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">
            Hola, {currentUser?.full_name || currentUser?.email} 👋🏼
          </Text>
          <Text>Bienvenido nuevamente!</Text>
        </Box>
      </Container>
    </>
  )
}

export default Dashboard
