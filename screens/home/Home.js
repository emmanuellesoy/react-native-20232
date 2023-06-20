import { View, Text } from "react-native";
import { stylesHome } from "./stylesHome";

const Home = () => {
  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.title}>Home</Text>
    </View>
  );
};

export default Home;
