import { View, Button } from "react-native";
import { stylesHome } from "./stylesHome";

const Home = () => {
  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.button}>
        <Button
          title="Personajes"
        />
      </View>
      <View style={stylesHome.button}>
        <Button
          title="Ubicaciones"
        />
      </View>
      <View style={stylesHome.button}>
        <Button
          title="Episodios"
        />
      </View>
      <View style={stylesHome.button}>
        <Button
          title="Personajes"
        />
      </View>
      <Button
        title="Cerrar sesión"
      />
    </View>
  );
};

export default Home;
