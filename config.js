module.exports = {
    app: {
        token: 'MTA0MDQxMDkyMTk5MTk0NjM1MA.G7jR7m.tEXeVJeAqHQzzWn0fSrUV63ckg0TjjMxZx6_J8',
        playing: 'by Zerio ❤️',
        global: true,
        guild: '931305518415355970'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '1040413430282207276',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
