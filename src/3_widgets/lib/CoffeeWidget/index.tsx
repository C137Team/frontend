import { Button, Flex, Input, Text, HStack, VStack } from "@chakra-ui/react"
import { TextWidget } from "../TextWidget"
import { useState } from "react"
import { ChangeEvent } from "../AuthFormWidget"
import { AvatarWidget } from "../AvatarWidget"
import { FaTelegram } from "react-icons/fa6";
import { MapWidget } from "../MapWidget"
import { observer } from "mobx-react"
import MarkerPosStore from "../../../4_shared/lib/store/MarkerPosStore"


export const CoffeeWidget = observer(() => {
    const { markerPos } = MarkerPosStore
    const [startDate, setStartDate] = useState<string>()

    const handleDateChange = (event: ChangeEvent) => {
        setStartDate(event.target.value)
    }

    return (
        <>

        { false &&
            <TextWidget>
                <Text>
                    У вас пока нет встреч
                </Text>
            </TextWidget>
        }

        { true &&
            <Flex
                w="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
            >
                <AvatarWidget />

                <Text align="center">
                    Описание профиля
                </Text>

                <Flex
                    minW="20rem"
                    maxW="75rem"
                    w="100%"
                    flexDirection="column"
                    gap="0rem"
                >
                    <TextWidget>
                        <Text fontWeight="bold">
                            Статус встречи:
                            <br />
                        </Text>

                        <Text>
                            Планируется
                        </Text>
                    </TextWidget>

                    <TextWidget>
                        <Text fontWeight="bold">
                            Время встречи:
                            <br />
                        </Text>

                        <Text>
                            { startDate }
                            <Input
                                type="date"
                                value={ startDate }
                                onChange={ handleDateChange }
                            />
                        </Text>
                    </TextWidget>

                    <TextWidget>
                        <Text fontWeight="bold">
                            Контакты:
                            <br />
                        </Text>

                        <VStack>
                            <HStack>
                                <FaTelegram />
                                <a href="https://t.me/chebupa">
                                    @chebupa
                                </a>
                            </HStack>
                        </VStack>
                    </TextWidget>

                    <TextWidget>
                        <Text fontWeight="bold" mb="1rem">
                            Место встречи:
                            <br />
                            { markerPos }
                        </Text>

                        <MapWidget
                            width="100%"
                            height="20rem"
                            borderRadius="1rem"
                        />
                    </TextWidget>

                    <Button
                        colorScheme="yellow"
                        margin="1rem"
                    >
                        Отмена встречи
                    </Button>
                </Flex>
            </Flex>
        }
        </>
    )
})
