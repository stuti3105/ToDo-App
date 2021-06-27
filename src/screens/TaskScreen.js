import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  Text,
  StyleSheet
} from "react-native";

import { Modal, Button as ButtonPaper } from "react-native-paper";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";


import Swipeable from "../components/Swipeable";
import Button from "../components/Button";

function home(props) {
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState('')

const getCurrentTasks = () => {
  let allTasks = Object.values(props.store);

  return allTasks.filter((item) => !item.finished);
};

const onAdd = () => {
  setVisible(false);
  setTask("");
  return (
    task &&
    props.dispatch({
      type: "create",
      taskName: task,
      finished: false,
    })
  );
};

  return (
    <View style={styles['container']}>
        <FlatList
          data={getCurrentTasks()}
          renderItem={({ item }) => {
            return (
              <Swipeable
                key={item.taskName}
                icon="check"
                text={item.taskName}
                onLeftActionComplete={() => {
                  return props.dispatch({
                    type: "update",
                    taskName: item.taskName,
                    finished: true,
                  });
                }}
                onRightActionComplete={() => {
                  return props.dispatch({
                    type: "delete",
                    taskName: item.taskName,
                  });
                }}
              />
            );
          }}
        />
      <Button onPress={() => setVisible(true)} />
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={styles['modal']}
      >
        <View style={styles['form']}>
          <Icon name="pencil" size={20} />
          <Text style={styles['title']}>
            Add a to-do
          </Text>
        </View>
        <TextInput
          placeholder="Add new to-do"
          value={task}
          onChangeText={setTask}
          style={styles['textInput']}
        />
        <ButtonPaper color="black" onPress={onAdd}>
          ADD
        </ButtonPaper>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#343434",paddingVertical: 5 },
  form: { flexDirection: "row", marginVertical: 10 },
  textInput: { fontSize: 25, textShadowColor: "black", height: 50 },
  modal : { backgroundColor: "white", padding: 20, margin: 30 },
  title: { fontSize: 15, marginHorizontal: 15 }
});

const mapStateToProps = (state) => {
  return { store: state };
};

export default connect(mapStateToProps)(home);
