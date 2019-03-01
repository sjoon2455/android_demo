import React from "react";
import { Icon } from "expo";

import Colors from "../constants/Colors";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26} //사이즈 맞추기
        style={{ marginBottom: -3 }} //밑 간격 맞추기
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
