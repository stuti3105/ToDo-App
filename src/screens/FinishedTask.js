import React from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";

import Swipeable from "../components/Swipeable";

function finishedTask(props) {

  const getFinishedTasks = () => {
    let allTasks = Object.values(props.store)

    return allTasks.filter(item => item.finished)
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#343434" }}>
      <FlatList
        data={getFinishedTasks()}
        renderItem={({ item }) => {
          debugger;
          return (
            <Swipeable
              key={item.taskName}
              icon="plus"
              text={item.taskName}
              onLeftActionComplete={() => {
                return props.dispatch({
                  type: "update",
                  taskName: item.taskName,
                  finished: false,
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
    </View>
  );
}

const mapStateToProps = (state) => {
  return {store: state}
}

export default connect(mapStateToProps)(finishedTask);
