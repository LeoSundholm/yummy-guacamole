local application = require "mjolnir.application"
local hotkey = require "mjolnir.hotkey"
local window = require "mjolnir.window"
local fnutils = require "mjolnir.fnutils"
local hints = require "mjolnir.th.hints"
local appfinder = require "mjolnir.cmsj.appfinder"
local spotify = require "mjolnir.lb.spotify"
--local hints = require "mjolnir.yourid.foobar"

hotkey.bind({"cmd"},"e", hints.windowHints)
hotkey.bind({"cmd", "ctrl", "alt"}, "space", spotify.displayCurrentTrack)