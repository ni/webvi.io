// track links links
mixpanel.track_links(".track", "link clicked", {
        "teir": window.location.hostname
    });

// track navbar links
    mixpanel.track_links(".nav-track", "nav clicked", {
            "teir": window.location.hostname
        });
