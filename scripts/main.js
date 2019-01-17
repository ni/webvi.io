// track links links
mixpanel.track_links(".track", "link clicked", {
    "tier": window.location.hostname
});

// track navbar links
mixpanel.track_links(".nav-track", "nav clicked", {
    "tier": window.location.hostname
});

//track page views
mixpanel.track("page-view", {
    "tier": window.location.hostname
});
