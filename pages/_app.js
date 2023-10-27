import { JuguetesProvider } from "@/context/JuguetesProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <JuguetesProvider>
      <Component {...pageProps} />
    </JuguetesProvider>
  );
}
