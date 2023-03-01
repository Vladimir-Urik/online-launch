import { type AppType } from "next/dist/shared/lib/utils";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "~/styles/globals.scss";
import "~/styles/hamburgers.scss";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
