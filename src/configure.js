export class Configure {

    constructor() {
        this._config = {
            apiAppId: '',
            apiScript: 'https://connect.facebook.net/en_US/sdk.js',
            apiXfbml: '1',
            apiVersion: 'v2.5'
        };
    }

    options(obj) {
        Object.assign(this._config, obj);
    }

    get(key) {
        return this._config[key];
    }

    set(key, val) {
        this._config[key] = val;
        return this._config[key];
    }
}
