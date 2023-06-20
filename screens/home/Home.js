import { View, Button } from "react-native";
import { stylesHome } from "./stylesHome";

const Home = () => {
  return (
    <View style={stylesHome.container}>
      <Button
        title="Personajes"
      />
      <Button
        title="Ibicaciones"
      />
      <Button
        title="Episodios"
      />
      <Button
        title="Cerrar sesión"
      />
    </View>
  );
};

export default Home;
