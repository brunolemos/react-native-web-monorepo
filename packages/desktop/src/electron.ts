import { app, Tray, BrowserWindow, Menu, shell } from "electron";
import * as path from "path";
import * as os from "os";
import { openAbout } from './about';
import serve from 'electron-serve';
import isDev from 'electron-is-dev';
import { AppSettings } from './settings';
import Settings from './settings';

let win: BrowserWindow | null = null;
let winState: any | null = null;
let tray: Tray | null = null;
let appAutoLaunch: { opts: { appName: string; }; enable: () => any; disable: () => any; } | null = null;
let quitting = false;
let about = null;
const appName = 'desktop';
const appScheme = 'custom';

app.setAppUserModelId('com.example.your.app');

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', () => {
        // Someone tried to run a second instance, we should focus our window.
        if (win) {
            if (win.isMinimized()) {
                win.restore();
            }
            win.focus();
        }
    });
}

const port = process.env.PORT || 3000;
const serveURL = serve({ directory: 'build', scheme: appScheme });
const iconName =
    os.platform() === 'win32' ? 'icon.ico' : os.platform() === 'darwin' ? 'icon.icns' : 'icon.png';
const trayName = os.platform() === 'win32' ? 'tray.ico' : 'tray.png';
const assetsPath = path.resolve(path.join(__dirname));
const icon = require('electron').nativeImage.createFromPath(path.join(assetsPath, iconName));

/**
 * Defaults for tray settings
 */
const defaultOptions = {
    autoLaunch: false,
    minimizeToTray: false,
    closeToTray: true,
};

/**
 * Load stored preferences if any
 */
const settings: AppSettings = new Settings({
    configName: 'user-preferences',
    defaults: defaultOptions,
});

// electron setLoginItemSettings is only for mac/win
// https://electronjs.org/docs/api/app#appsetloginitemsettingssettings-macos-windows
// we use node-auto-launch for linux
if (os.platform() === 'linux') {
    const AutoLaunch = require('auto-launch');
    appAutoLaunch = new AutoLaunch({
        name: appName,
    });
    // @ts-ignore
    appAutoLaunch.opts.appName = appName;
}

/*
 * Toggle Open At Login
 */

const toggleAutoLaunch = () => {
    settings.autoLaunch = !settings.autoLaunch;
    if (os.platform() !== 'linux') {
        app.setLoginItemSettings({
            openAtLogin: settings.autoLaunch,
        });
    } else if (appAutoLaunch !== null) {
        settings.autoLaunch ? appAutoLaunch.enable() : appAutoLaunch.disable();
    }
};

/**
 * On quit
 */
const cleanUp = () => {
    if (win !== null) {
        win.destroy();
    }
    if (tray !== null) {
        tray.destroy();
    }
    win = null;
    tray = null;
};

/**
 * Toggle window visibility
 */
const toggleWindow = () => {
    if (win !== null) {
        const check = process.platform === 'darwin' ? win.isVisible() && !win.isMinimized() : win.isVisible();
        if (check) {
            win.hide();
            if (process.platform === 'darwin') {
                app.dock.hide();
            }
        } else {
            if (process.platform === 'darwin') {
                app.dock.show().then();
            }
            win.show();
            win.focus();
        }
        setTrayMenu();
    }
};

/**
 * Menu Label for "Show/Hide"
 */
const getShowHideLabel = () => {
    return win && win.isVisible() ? 'Hide' : 'Show';
};

/**
 * Tray menu elements (dynamically set Show/Hide based on current window state)
 */
const getContextMenu = () => {
    return [
        {
            label: getShowHideLabel(),
            click: () => toggleWindow(),
        }, {
            label: 'Settings',
            submenu: [
                {
                    label: 'Launch on startup',
                    type: 'checkbox',
                    checked: settings.autoLaunch,
                    click: toggleAutoLaunch,
                },
                {
                    label: 'Minimize to tray',
                    type: 'checkbox',
                    checked: settings.minimizeToTray,
                    click: () => {
                        settings.minimizeToTray = !settings.minimizeToTray;
                    },
                },
                {
                    label: 'Close to tray',
                    type: 'checkbox',
                    checked: settings.closeToTray,
                    click: () => {
                        settings.closeToTray = !settings.closeToTray;
                    },
                },
            ]
        },
        {
            label: 'About',
            click: async () => {
                about = await openAbout(icon);
                about.show();
            }
        },
        {
            label: 'Quit',
            click: () => {
                if (win !== null) {
                    quitting = true;
                    win.close();
                }
            },
        },
    ];
};

/**
 * Get and set tray menu items
 */
const setTrayMenu = () => {
    if (tray !== null) {
        const contextMenu = getContextMenu();
        // @ts-ignore
        tray.setContextMenu(Menu.buildFromTemplate(contextMenu));
    }
};

/**
 * Create the tray and it's menu
 */
const createTray = () => {
    tray = new Tray(
        require('electron').nativeImage.createFromPath(path.join(assetsPath, trayName)),
    );
    setTrayMenu();
    tray.setToolTip(appName);
    tray.on('click', () => {
        if (tray !== null) {
            tray.popUpContextMenu();
        }
    });
};

/**
 * Create the main window, load the main page, set handlers
 */
const createWindow = () => {

    const windowStateKeeper = require('electron-window-state');
    winState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800,
    });
    win = new BrowserWindow({
        icon,
        x: winState.x + 10,
        y: winState.y + 10,
        width: winState.width,
        height: winState.height,
        frame: true,
        title: appName,
        show: false,
        webPreferences: {
            sandbox: true,
            disableBlinkFeatures: 'Auxclick',
            nativeWindowOpen: false,
            allowRunningInsecureContent: false,
            experimentalFeatures: false,
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            webSecurity: true,
            webviewTag: false,
            navigateOnDragDrop: false,
            enableRemoteModule: false,
            contextIsolation: true, // no communication from the renderer to main
            // https://i.blackhat.com/asia-19/Thu-March-28/bh-asia-Carettoni-Preloading-Insecurity-In-Your-Electron.pdf
            // preload: `${__dirname}/preload.js` // only from main to renderer with preload if needed
        },
    });

    let _url: string;
    if (!isDev) {
        _url = `${appScheme}://local`;
        serveURL(win).then(()=>{
            if (win) {
                win.loadURL(_url).then(() => {
                    if (win) {
                        win.show();
                        win.focus();
                        setTrayMenu();
                        win.setMenuBarVisibility(false);
                    }
                });
            }
        });
    } else {
        _url = `http://localhost:${port}`;
        win.loadURL(_url).then(() => {
            if (win) {
                win.show();
                win.focus();
                setTrayMenu();
                win.setMenuBarVisibility(false);
            }
        });
    }

    win.webContents.once('dom-ready', () => {
        if (isDev) {
            process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
            if (win && !win.webContents.isDevToolsOpened()) {
                win.webContents.openDevTools();
            }
        }
        winState.manage(win);
        // win!.webContents.send('PING', 'ping');
    });

    win.webContents.on('new-window', async (event, _location) => {
        // const parsedUrl = new URL(url);
        // if (parsedUrl.match(/.*localhost.*/gi) === null && (url.startsWith('http:') || url.startsWith('https:'))) {
        await event.preventDefault();
        await shell.openExternal(_location);
        // }
    });
    // win.webContents.on('will-navigate', (event, url) => {
    //     console.log('will-navigate', url);
    //     // _t = new Navigator(URL);
    //     event.preventDefault();
    //     // openNewWindow(url).then(() => {});
    //     shell.openExternal(url);
    // });

    win.on('close', event => {
        if (win !== null) {
            if (!quitting && settings.closeToTray){
                event.preventDefault();
                win.hide();
                if (process.platform === 'darwin') {
                    app.dock.hide();
                }
                setTrayMenu();
            }
        }
    });

    win.on('closed', () => {
        if (win !== null && tray !== null) {
            cleanUp();
        }
    });
    win.on('minimize', (event: Event) => {
        if (win !== null && tray !== null) {
            if (settings.minimizeToTray) {
                event.preventDefault();
                win.hide();
                if (process.platform === 'darwin') {
                    app.dock.hide();
                }
            }
            setTrayMenu();
        }
    });
    win.on('restore', () => {
        setTrayMenu();
    });
};

app.on('ready', () => {
    createWindow();
    createTray();
    app.name = appName;
    if (process.platform === 'darwin') {
        app.applicationMenu = null;
    }
});

app.on('window-all-closed', () => {
    // if (process.platform !== 'darwin') {
    app.quit();
    // }
});

app.on('activate', () => {
    if (win === null && createWindow() && tray === null && createTray()) {
        setTrayMenu();
    }
});
