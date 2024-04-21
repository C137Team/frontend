import { FC } from "react"
import { Box, Text } from "@chakra-ui/react"
import { bgColor, fgColor } from "../../../4_shared/lib/config/colors"


interface ITextWidgetProps {
    text?: string
    children?: JSX.Element | Array<JSX.Element> | string
}


export const TextWidget: FC<ITextWidgetProps> = ({children}) => {
    return (
        <Box
            bg={ bgColor }
            p="1rem"
            borderRadius="1rem"
            margin="1rem"
        >
            <Text
                color={ fgColor }
                align="center"
            >
                {/* { props.text } */}
                { children }
            </Text>
        </Box>
    )
}
