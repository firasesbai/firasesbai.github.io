window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#edeff5",
            "text": "#838391"
        },
        "button": {
            "background": "#4b81e8"
        }
    },
    "type": "opt-in",
    "content": {
        "message": "This website uses cookies to ensure you get the best experience on our website. ",
        "dismiss": "Decline",
        "allow": "Allow cookies",
        "link": "Learn more",
        "href": "/privacy-policy/"
    },
    onInitialise: function(status) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            // enable cookies
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });

        }
    },
    onStatusChange: function(status, chosenBefore) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            // enable cookies
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });

        }
    },
    onRevokeChoice: function() {
        var type = this.options.type;
        if (type == 'opt-in') {
            // disable cookies
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });

        }
        if (type == 'opt-out') {
            // enable cookies
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
    }
});