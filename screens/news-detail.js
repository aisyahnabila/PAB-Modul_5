import { Heading, Center, Text, ScrollView, Image, Box } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
    // Get the params
    const params = route.params.item;
    return (
        <>
            <Header title={"News"} withBack="true" />
            <ScrollView>
                <Image source={{ uri: params.image }}
                    alt="Foto_Artikel" w="full" h="250" />
                <Text p="3">{params.date}</Text>
                <Heading p="3" >{params.title}</Heading>
                <Box
                    borderBottomColor={"coolGray.300"}
                    borderBottomWidth={1} margin={'3'} alignItems={'center'} />
                <Text p="3">{params.content}</Text>
            </ScrollView>
        </>
    );
};

export default NewsDetail;