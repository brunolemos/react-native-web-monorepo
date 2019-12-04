import { BrowserWindow, NativeImage } from "electron";
import * as path from "path";
import * as url from "url";

let about: BrowserWindow | null = null;
const versionsJson = require('./info.json');

/*
 * Add electron, chrome and node versions to about.html (through versions.js);
 */
const getVersions = () => {
    let html = '';
    for (const item of ['electron', 'chrome', 'node']) {
        // @ts-ignore
        html += `<tr><td>${item}</td><td> : ${process.versions[item]}</td></tr>`;
    }
    html += `<tr><td>react</td><td> : ${versionsJson.react}</td></tr>`;
    html += `<tr><td>typescript</td><td> : ${versionsJson.typescript}</td></tr>`;
    return html;
};

 /*
 *Create and return the about window

 */
export const openAbout: (icon: NativeImage) => Promise<BrowserWindow> = async icon => {
    if (about !== null) {
        return about;
    }
    about = new BrowserWindow({
        icon,
        width: 400,
        height: 400,
        frame: true,
        center: true,
        show: false,
        alwaysOnTop: true,
        minimizable: false,
        maximizable: false,
        movable: false,
        resizable: false,
        webPreferences: {
            sandbox: true,
            disableBlinkFeatures: 'Auxclick',
            nativeWindowOpen: true,
            allowRunningInsecureContent: false,
            experimentalFeatures: false,
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            webSecurity: true,
            webviewTag: false,
            navigateOnDragDrop: false,
            contextIsolation: true,
            enableRemoteModule: false
        }
    });
    about.setMenuBarVisibility(false);
    about.webContents.on('new-window', (event, uri) => {
        event.preventDefault();
        require('electron').shell.openExternal(uri);
    });
    about.webContents.once('dom-ready', () => {
        // process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
        // if (about && !about.webContents.isDevToolsOpened()) {
        //     about.webContents.openDevTools();
        // }
        // @ts-ignore
        about.webContents
            .executeJavaScript(
                `window.document.getElementById("versions").innerHTML = "${getVersions()}";
                window.document.getElementById("title").innerHTML = "About ${
                    versionsJson.name
                }";
                window.document.getElementById("name").innerHTML = "${
                    versionsJson.name} ${versionsJson.version}";
                window.document.getElementById("description").innerHTML = "${
                    versionsJson.description
                }";
                window.document.getElementById("copyright").innerHTML = "Copyright &#169; ${new Date().getUTCFullYear()} ${
                    versionsJson.copyright
                }";
                `
            )
            .then(null, console.log);
    });
    const _url = url.format({
        pathname: path.join(__dirname, 'about.html'),
        protocol: 'file:',
        slashes: true
    });
    await about.loadURL(_url);

    about.once('closed', () => {
        about = null;
    });
    about.once("ready-to-show", () => {
        if (about) {
            about.show();
        }
    });
    return about;
};
