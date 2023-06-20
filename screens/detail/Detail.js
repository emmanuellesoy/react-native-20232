import { View, Text, Image } from "react-native";
import { stylesDetail } from "./stylesDetail";
 
const Detail = () => {
  return (
    <View style={stylesDetail.container}>
      <Image
        style={stylesDetail.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={stylesDetail.title}>Lalalaala</Text>
      <View style={stylesDetail.contentDesc}>
        <Text style={stylesDetail.sub}>Estado:</Text>
        <Text> Lalalaala</Text>
        <Text style={stylesDetail.sub}>Tipo::</Text>
        <Text>Genero: Lalalaala</Text>
        <Text style={stylesDetail.sub}>Genero:</Text>
        <Text>Lalalaala</Text>
        <Text style={stylesDetail.sub}>Origen:</Text>
        <Text>Lalalaala</Text>
        <Text style={stylesDetail.sub}>Origen:</Text>
        <Text>Lalalaala</Text>
      </View>
    </View>
  );
};

export default Detail;
