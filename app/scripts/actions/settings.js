import constants from 'constants/';

const {
  SETTINGS_INITIAL_RENDER, SETTINGS_MUTE, SETTINGS_DOCK,
  SETTINGS_DEVTOOLS, SETTINGS_LANGUAGE, SETTINGS_UPDATE
} = constants;

export default {
  initialRender: () => ({ type: SETTINGS_INITIAL_RENDER }),
  toggleMute: bool => ({ type: SETTINGS_MUTE, bool }),
  toggleDock: bool => ({ type: SETTINGS_DOCK, bool }),
  toggleDevTools: bool => ({ type: SETTINGS_DEVTOOLS, bool }),
  settingsLanguage: locale => ({ type: SETTINGS_LANGUAGE, locale }),
  desktopUpdate: status => ({ type: SETTINGS_UPDATE, status })
};
