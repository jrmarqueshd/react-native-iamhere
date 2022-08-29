import { Text, TouchableOpacity, View } from "react-native";
import { ParticipantProps } from "./interfaces";
import styles from "./styles";

export default function Paticipant({ name, onRemoveParticipant }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemoveParticipant}>
        <Text style={[styles.buttonText, {transform: [
          { rotateZ: "-45deg" },
        ]}]}>+</Text>
      </TouchableOpacity>
    </View>
  )
}