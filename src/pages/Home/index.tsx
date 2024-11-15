import { Header } from "@/components/skeleton/Header";
import { Main } from "@/components/skeleton/Main";

export const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>{/* footer */}</div>
    </>
  );
};
