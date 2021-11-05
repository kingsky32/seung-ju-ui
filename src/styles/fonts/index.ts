import { createGlobalStyle } from 'styled-components';
import SCoreDreamThinwoff2 from './lib/S-CoreDream-1Thin.woff2';
import SCoreDreamThinwoff from './lib/S-CoreDream-1Thin.woff';
import SCoreDreamThinttf from './lib/S-CoreDream-1Thin.ttf';
import SCoreDreamExtraLightwoff2 from './lib/S-CoreDream-2ExtraLight.woff2';
import SCoreDreamExtraLightwoff from './lib/S-CoreDream-2ExtraLight.woff';
import SCoreDreamExtraLightttf from './lib/S-CoreDream-2ExtraLight.ttf';
import SCoreDreamLightwoff2 from './lib/S-CoreDream-3Light.woff2';
import SCoreDreamLightwoff from './lib/S-CoreDream-3Light.woff';
import SCoreDreamLightttf from './lib/S-CoreDream-3Light.ttf';
import SCoreDreamRegularwoff2 from './lib/S-CoreDream-4Regular.woff2';
import SCoreDreamRegularwoff from './lib/S-CoreDream-4Regular.woff';
import SCoreDreamRegularttf from './lib/S-CoreDream-4Regular.ttf';
import SCoreDreamMediumwoff2 from './lib/S-CoreDream-5Medium.woff2';
import SCoreDreamMediumwoff from './lib/S-CoreDream-5Medium.woff';
import SCoreDreamMediumttf from './lib/S-CoreDream-5Medium.ttf';
import SCoreDreamBoldwoff2 from './lib/S-CoreDream-6Bold.woff2';
import SCoreDreamBoldwoff from './lib/S-CoreDream-6Bold.woff';
import SCoreDreamBoldttf from './lib/S-CoreDream-6Bold.ttf';
import SCoreDreamExtraBoldwoff2 from './lib/S-CoreDream-7ExtraBold.woff2';
import SCoreDreamExtraBoldwoff from './lib/S-CoreDream-7ExtraBold.woff';
import SCoreDreamExtraBoldttf from './lib/S-CoreDream-7ExtraBold.ttf';
import SCoreDreamHeavywoff2 from './lib/S-CoreDream-8Heavy.woff2';
import SCoreDreamHeavywoff from './lib/S-CoreDream-8Heavy.woff';
import SCoreDreamHeavyttf from './lib/S-CoreDream-8Heavy.ttf';
import SCoreDreamBlackwoff2 from './lib/S-CoreDream-9Black.woff2';
import SCoreDreamBlackwoff from './lib/S-CoreDream-9Black.woff';
import SCoreDreamBlackttf from './lib/S-CoreDream-9Black.ttf';

const FontsStyles = createGlobalStyle`
  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamThinwoff2}) format("woff2"),
      url(${SCoreDreamThinwoff}) format("woff"),
      url(${SCoreDreamThinttf}) format("truetype");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamExtraLightwoff2}) format("woff2"),
      url(${SCoreDreamExtraLightwoff}) format("woff"),
      url(${SCoreDreamExtraLightttf}) format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamLightwoff2}) format("woff2"),
      url(${SCoreDreamLightwoff}) format("woff"),
      url(${SCoreDreamLightttf}) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamRegularwoff2}) format("woff2"),
      url(${SCoreDreamRegularwoff}) format("woff"),
      url(${SCoreDreamRegularttf}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamMediumwoff2}) format("woff2"),
      url(${SCoreDreamMediumwoff}) format("woff"),
      url(${SCoreDreamMediumttf}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamBoldwoff2}) format("woff2"),
      url(${SCoreDreamBoldwoff}) format("woff"),
      url(${SCoreDreamBoldttf}) format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamExtraBoldwoff2}) format("woff2"),
      url(${SCoreDreamExtraBoldwoff}) format("woff"),
      url(${SCoreDreamExtraBoldttf}) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamHeavywoff2}) format("woff2"),
      url(${SCoreDreamHeavywoff}) format("woff"),
      url(${SCoreDreamHeavyttf}) format("truetype");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "S-Core Dream";
    src: url(${SCoreDreamBlackwoff2}) format("woff2"),
      url(${SCoreDreamBlackwoff}) format("woff"),
      url(${SCoreDreamBlackttf}) format("truetype");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

export default FontsStyles;
