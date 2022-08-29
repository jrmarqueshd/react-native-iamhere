import { useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import Participant from "../../components/Participant"
import { ParticipantAttrs } from "./interfaces";

import styles from "./styles";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [participants, setParticipants] = useState<ParticipantAttrs[]>([]);

  const inputRef = useRef<TextInput>(null);

  const validateInput = () => {
    if (!inputValue) {
      throw new Error("Informe um participante");
    }

    if (participants.some(participant => participant.name === inputValue)) {
      throw new Error("Esse Participante já foi cadastro.");    
    }
  }

  const handleAddParticipant = () => {
    try {
      validateInput();

      setParticipants((prevState) => ([...prevState, {
        id: Math.floor(Math.random() * 98710 * 3),
        name: inputValue
      }]));

      return inputRef.current?.clear();
    } catch (error) {
      if (error instanceof Error) {
        return Alert.alert("Opa!", error?.message)
      }

      return Alert.alert("Opa!", "Ocorreu um erro inesperado")
    }  
  }

  const handleRemoveParticipant = (participant: ParticipantAttrs) => {
    Alert.alert("Remover", `Tem certeza que deseja remover ${participant.name} da lista?`, [
      {
        text: 'Sim',
        onPress() {
          setParticipants((prevState) => ([...prevState.filter(person => person.id !== participant.id)]))
          Alert.alert("Pronto", `Você deletou ${participant.name} da lista!`);
        },
      },
      {
        text: 'Não',
        style: "cancel"
      }
    ]) 
  }

  return (
    <View style={styles.view}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante" 
          placeholderTextColor="#6b6b6b"
          ref={inputRef}
          onChangeText={setInputValue}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
      style={styles.list}
        data={participants}
        keyExtractor={item => String(item.id)}
        renderItem={({item: {id, name}}) => (
          <Participant 
            key={String(id)}
            name={name} 
            onRemoveParticipant={() => handleRemoveParticipant({id, name})} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>Nenhum participante cadastrado.</Text>
        )}
      />
    </View>
  )
}