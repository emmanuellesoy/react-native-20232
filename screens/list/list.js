import { View, Text, Image } from "react-native";
import { stylesList } from "./stylesList";

const List = () => {
  return (
    <View style={stylesList.container}>
      <View style={stylesList.item}>
        <Image
          style={stylesList.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>lalalalalalalalalallalalal</Text>
      </View>
      <View style={stylesList.item}>
        <Image
          style={stylesList.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>lalalalalalalalalallalalal</Text>
      </View>
    </View>
  );
};

export default List;
