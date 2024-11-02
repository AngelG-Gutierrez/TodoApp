// vista para detalles de un Proyecto
// no se exporta por default

import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export function ProjectView() {
  // tomar el ID de la Ruta
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>
        Aquí se debe implementar los detalles del proyecto.
      </Text>
      <Text>Proyecto {id}</Text>
    </View>
  );
}
