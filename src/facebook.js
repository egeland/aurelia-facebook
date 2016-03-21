import {noView} from 'aurelia-'

export class Facebook {

    constructor() {
        if (!config.get('apiScript')) {
            console.error('No API script is defined.');
        }

        if (!config.get('apiAppId')) {
            console.error('No AppId has been specified.');
        }

        this.loadApiScript();
    }

    attached() {
        if (window.FB !== undefined) {
            window.FB.XFBML.parse();
        }
    }

    /**
     * Load API Script
     *
     * Loads the Facebook SDK Javascript
     *
     */
    loadApiScript() {
        if (window.FB === undefined) {
            let fbroot = document.createElement('div');
            fbroot.id = 'fb-root';
            document.body.insertBefore(fbroot, document.body.children[0]);
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = `${this.config.get('apiScript')}#xfbml=${this.config.get('apiXfbml')}&version=${this.config.get('apiVersion')}&appId=${this.config.get('apiAppId')}`;
            document.body.insertBefore(script, document.body.children[1]);
        }
    }

}
