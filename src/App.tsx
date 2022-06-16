import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import { useEffect } from "react";
import axios from "axios";
import Homepage from "./container/Homepage";

function App() {
  const dispatch = useDispatch();
  const { addUser, removeUser, likeUser, unlikeUser } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state = useSelector((state: State) => state.user);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res: any) => {
      const data = res?.data.map((el: any) => {
        return {
          name: el.name,
          email: el.email,
          phone: el.phone,
          id: el.id,
          website: el.website,
          liked: false,
          edit: false,
        };
      });
      addUser(data);
    });
  }, []);

  return (
    <div className="App">
      <Homepage
        data={state}
        removeUser={removeUser}
        likeUser={likeUser}
        unlikeUser={unlikeUser}
      />
    </div>
  );
}

export default App;
