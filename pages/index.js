import Hero from "../components/Content/Hero";
import Dashboard from "../components/Dashboard/Dashboard";

import { ThemeContextProvider } from "../libs/Context";

export default function Home() {
  return (
    <ThemeContextProvider>
      <Dashboard>
        <Hero />
      </Dashboard>
    </ThemeContextProvider>
  )
}
