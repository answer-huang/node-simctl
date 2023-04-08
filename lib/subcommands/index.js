import addmediaCommands from './addmedia.js';
import appinfoCommands from './appinfo.js';
import bootCommands from './boot.js';
import bootstatusCommands from './bootstatus.js';
import createCommands from './create.js';
import deleteCommands from './delete.js';
import eraseCommands from './erase.js';
import getappcontainerCommands from './get_app_container.js';
import installCommands from './install.js';
import ioCommands from './io.js';
import keychainCommands from './keychain.js';
import launchCommands from './launch.js';
import listCommands from './list.js';
import openurlCommands from './openurl.js';
import pbcopyCommands from './pbcopy.js';
import pbpasteCommands from './pbpaste.js';
import privacyCommands from './privacy.js';
import pushCommands from './push.js';
import envCommands from './getenv.js';
import shutdownCommands from './shutdown.js';
import spawnCommands from './spawn.js';
import terminateCommands from './terminate.js';
import uiCommands from './ui.js';
import uninstallCommands from './uninstall.js';
import locationCommands from './location.js';

// xcrun simctl --help
const subcommands = Object.assign({},
    addmediaCommands,
    appinfoCommands,
    bootCommands,
    bootstatusCommands,
    createCommands,
    deleteCommands,
    eraseCommands,
    getappcontainerCommands,
    installCommands,
    ioCommands,
    keychainCommands,
    launchCommands,
    listCommands,
    openurlCommands,
    pbcopyCommands,
    pbpasteCommands,
    privacyCommands,
    pushCommands,
    envCommands,
    shutdownCommands,
    spawnCommands,
    terminateCommands,
    uiCommands,
    uninstallCommands,
    locationCommands,
);

export default subcommands;
