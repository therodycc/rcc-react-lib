import { RccButton } from "./components/button";

const Main = () => {
  return (
    <div>
      <RccButton bgClass={"danger"} type={"submit"} loading={false}>
        Main
      </RccButton>
    </div>
  );
};

export default Main;
