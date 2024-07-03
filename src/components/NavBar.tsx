import { HStack, Image, Text } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <HStack>
            <Image src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719964800&semt=sph'} boxSize={'50px'}/>
            <Text>NavBAR </Text>
        </HStack>
    )
}

export default NavBar;