import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <WalletModalProvider>
      <WalletMultiButton />
    </WalletModalProvider>
  );
};

export default Home;
