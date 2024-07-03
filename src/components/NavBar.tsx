import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719964800&semt=sph'} boxSize={'50px'}/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;