import Icon from "./Icon";

import icon from "./assets/cancel.svg";

const App = () => {
  return (
    <div>
      <Icon
        src={icon}
        width="50"
        height="50"
        color="blue"
        fill="red"
        strokeWidth={4}
      />
    </div>
  );
};

export default App;
