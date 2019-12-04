import { app, remote } from 'electron';
import * as path from 'path';
import { readFileSync, writeFileSync } from 'fs';

export interface AppSettings {
    autoLaunch: boolean;
    minimizeToTray: boolean;
    closeToTray: boolean;
}

const parseDataFile = (filePath: string, defaults: AppSettings) => {
    try {
        const ret: AppSettings = {
            autoLaunch: false,
            minimizeToTray: false,
            closeToTray: true
        };
        // @ts-ignore
        const _json = JSON.parse(readFileSync(filePath));
        if (_json.minimizeToTray) {
            ret.minimizeToTray = _json.minimizeToTray;
        }
        if (_json.closeToTray) {
            ret.closeToTray = _json.closeToTray;
        }
        return ret;
    } catch (error) {
        return defaults;
    }
};

class Settings {
    path: string;
    data: AppSettings;

    constructor(opts: { configName: string; defaults: AppSettings }) {
        const userDataPath = (app || remote.app).getPath('userData');
        this.path = path.join(userDataPath, `${opts.configName}.json`);
        this.data = parseDataFile(this.path, opts.defaults);
    }

    get autoLaunch(): boolean {
        return this.data.autoLaunch;
    }

    set autoLaunch(value: boolean) {
        this.data.autoLaunch = value;
        writeFileSync(this.path, JSON.stringify(this.data));
    }

    get minimizeToTray(): boolean {
        return this.data.minimizeToTray;
    }

    set minimizeToTray(value: boolean) {
        this.data.minimizeToTray = value;
        writeFileSync(this.path, JSON.stringify(this.data));
    }

    get closeToTray(): boolean {
        return this.data.closeToTray;
    }

    set closeToTray(value: boolean) {
        this.data.closeToTray = value;
        writeFileSync(this.path, JSON.stringify(this.data));
    }
}

export default Settings;
