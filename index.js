// Constants
const backgroundColor = '#2F3D50';
const foregroundColor = '#E6E6E6';
const darkerBackground = 'rgba(0, 0, 0, 0.2)';
const borderColor = '#333';

// Colors
const BLACK = '#2F3D50';
const RED = '#B73730';
const GREEN = '#EA9E2C';
const YELLOW = '#FC8589';
const BLUE = '#417EB9';
const MAGENTA = '#954EB4';
const CYAN = '#85C774';
const WHITE = '#BEC3C7';
const LIGHTBLACK = '#2D3B4C';
const LIGHTRED = '#DD4941';
const LIGHTGREEN = '#3BA155';
const LIGHTYELLOW = '#EAC72E';
const LIGHTBLUE = '#4F93D8';
const LIGHTMAGENTA = '#954EB4';
const LIGHTCYAN = '#45BD9A';
const LIGHTWHITE = '#ffffff'

const colors = {
  black: BLACK,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: WHITE,
  lightRed: LIGHTRED,
  lightGreen: LIGHTGREEN,
  lightYellow: LIGHTYELLOW,
  lightBlue: LIGHTBLUE,
  lightMagenta: LIGHTMAGENTA,
  lightCyan: LIGHTCYAN,
  lightWhite: LIGHTWHITE
};

// Apply theme
exports.decorateConfig = (config) => (
    Object.assign({}, config, {
        backgroundColor,
        foregroundColor,
        borderColor: borderColor,
        cursorColor: foregroundColor,
        colors,
        css: `
      ${config.css || ''}
    .tab_tab .tab_icon {
      left: 7px;
      right: initial;
    }
	  .terms_term x-row{
		  height: 24px;
	  }
      /* Highlight active tab by making rest of nav darker */
      .tabs_list {
        background-color: ${darkerBackground} !important;
      }
      /* Set tab colors */
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${darkerBackground} !important;
        border: none !important;
        border-right: 1px solid transparent !important;
        border-left: 1px solid transparent !important;
      }
      /* Hide bottom border if tab is active, make bg lighter */
      .tab_active {
        background-color: ${backgroundColor} !important;
        height: calc(100% + 1px);
      }
      .tab_tab:last-child {
        border-right: 1px solid transparent !important;
      }
      /* Hide hardcoded black bottom border */
      .tab_active:before {
        border-bottom: none !important;
      }
      .tab_text {
        border-color: transparent !important;
      }
      /* Close button faint shadow for easy spotting */
      .tab_icon {
        background-color: rgba(255, 255, 255, .025);
        opacity: 1;
      }
    `
    })
);

// Development middleware for HMR
exports.middleware = () => (next) => (action) => {
    /* eslint-disable no-param-reassign, default-case */
    switch (action.type) {
        case 'CONFIG_LOAD':
        case 'CONFIG_RELOAD':
            action.config.foregroundColor = foregroundColor;
            action.config.backgroundColor = backgroundColor;
            action.config.cursorColor = foregroundColor;
            action.config.colors = colors;
    }
    next(action);
};
