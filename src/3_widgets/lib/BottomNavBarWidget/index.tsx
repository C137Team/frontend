import { Box, HStack } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";


export const BottomNavBarWidget = () => {
    const iconSize = 25

    return (
        <>
            <Outlet />

            <Box
                w="100%"
                // bg="red"
                position="fixed"
                bottom="3"
                display="flex"
                justifyContent="center"
            >
                <HStack
                    bg="#cecece41"
                    p="1.25rem"
                    borderRadius="1rem"
                    alignItems="center"
                    justifyContent="space-around"
                    gap="3rem"
                >
                    <Link to="home">
                        <FaHouse size={ iconSize } />
                    </Link>

                    <Link to="coffee">
                        <SiCoffeescript size={ iconSize } />
                    </Link>

                    <Link to="account">
                        <FaUser size={ iconSize } />
                    </Link>
                </HStack>
            </Box>
        </>
    )
}
