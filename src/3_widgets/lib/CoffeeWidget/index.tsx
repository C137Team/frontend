import { Button, Flex, Input, Text, HStack, VStack } from "@chakra-ui/react"
import { TextWidget } from "../TextWidget"
import { useState } from "react"
import { ChangeEvent } from "../AuthFormWidget"
import { AvatarWidget } from "../AvatarWidget"
import { FaTelegram } from "react-icons/fa6";
import { MapWidget } from "../MapWidget"
import { observer } from "mobx-react"
// import { useQuery } from "@tanstack/react-query"
import MarkerPosStore from "../../../4_shared/lib/store/MarkerPosStore"
import API from "../../../4_shared"
// import { ICoffeeWidgetResponseModel } from "./coffeeWidgetResponseModel"


export const CoffeeWidget = observer(() => {

    // const { data, isPending, error } = useQuery({
    //     queryKey: ["currentMeetingData"],

    //     queryFn: async () => await API.GetMyMeeting()
    // })

    // let data;
    API.GetMyMeeting()

    const { markerPos } = MarkerPosStore
    const [ startDate, setStartDate ] = useState<string>()

    const handleDateChange = (event: ChangeEvent) => setStartDate(event.target.value)


    // if (isPending) return <TextWidget>
    //     <Text>
    //         Загрузка...
    //     </Text>
    // </TextWidget>

    // if (error) return <TextWidget>
    //     <Text>
    //         У вас пока нет встреч
    //     </Text>
        
    //     <button onClick={() => console.log(data)}>asd</button>
    // </TextWidget>

    return (
        <>
            <Flex
                w="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
            >
                <AvatarWidget />

                <Text align="center">
                    {/* { data. } */}
                </Text>

                <Flex
                    minW="20rem"
                    maxW="75rem"
                    w="100%"
                    flexDirection="column"
                    gap="0rem"
                >
                    {/* Статус встречи */}
                    <TextWidget>
                        <Text fontWeight="bold">
                            Статус встречи:
                            <br />
                        </Text>

                        <Text>
                            {/* { data.meeting.state } */}
                        </Text>
                    </TextWidget>

                    {/* Формат встречи */}
                    <TextWidget>
                        <Text fontWeight="bold">
                            Формат встречи:
                            <br />
                        </Text>

                        <Text>
                            {/* { data.meeting.curcumstances.format } */}
                        </Text>
                    </TextWidget>

                    {/* Время встречи */}
                    <TextWidget>
                        <Text fontWeight="bold">
                            Время встречи:
                            <br />
                        </Text>

                        <Text>
                            {/* { startDate } */}
                            {/* { data.meeting.curcumstances.starts_at } */}
                            <Input
                                type="date"
                                value={ startDate }
                                onChange={ handleDateChange }
                            />
                        </Text>
                    </TextWidget>

                    {/* Длительность встречи */}
                    <TextWidget>
                        <Text fontWeight="bold">
                            Время встречи:
                            <br />
                        </Text>

                        <Text>
                            {/* { startDate } */}
                            {/* { data.meeting.curcumstances.duration_m } минут */}
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

                            // latitude={ data.curcumstances.location_latitude }
                            // longitude={ data.curcumstances.location_longitude }
                            latitude={1}
                            longitude={1}
                        />
                    </TextWidget>

                    <Button
                        colorScheme="yellow"
                        margin="1rem"
                        
                        onClick={ () => {} }
                    >
                        Сохранить изменения
                    </Button>

                    <Button
                        colorScheme="yellow"
                        margin="1rem"

                        onClick={ () => {} }
                    >
                        Отмена встречи
                    </Button>
                </Flex>
            </Flex>
        </>
    )
})
