// track specific links
mixpanel.track_links(".free-trial-link", "free trial link clicked", {
    "tier": window.location.hostname
});


mixpanel.track_links(".learn-more-link", "learn more link clicked", {
    "tier": window.location.hostname
});

mixpanel.track_links(".example-link", "example link clicked", {
    "tier": window.location.hostname
});

//track page views
mixpanel.track("page-view", {
    "tier": window.location.hostname
});
