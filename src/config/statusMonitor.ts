const statusMonitor = {
    title: 'My Status Monitor',
    path: '/status',
    websocket: null, // The Socket.io instance to be used, if none provided a new one will be created!
    spans: [{
        interval: 1,     // Every second
        retention: 60    // Keep 60 datapoints in memory
    }, {
        interval: 5,     // Every 5 seconds
        retention: 60
    }, {
        interval: 15,    // Every 15 seconds
        retention: 60
    }],
    routeConfig: { // Route options, see https://github.com/hapijs/hapi/blob/master/API.md#route-options
        auth: false
    }
}

export default statusMonitor;