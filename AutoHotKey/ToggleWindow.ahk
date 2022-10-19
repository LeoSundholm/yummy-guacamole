GroupAdd, FileExplorer, ahk_class CabinetWClass
GroupAdd, Sublime, ahk_class PX_WINDOW_CLASS
return

OpenOrActivate(exePath, exe){
	IfWinExist %exe%
		winactivate %exe%
	else
		run, %exePath%
	WinWait %exe%
	WinActivate %exe%
	WinWaitActive %exe%
}

ActivateWithPid(exe){
 	DetectHiddenWindows, Off
    Process, Exist, %exe%
    pid = %ErrorLevel%
    IfWinExist, ahk_pid %pid%
    {
        WinActivate, ahk_pid %pid%
    }
}

^#a::OpenOrActivate("C:\Program Files\JetBrains\JetBrains Rider 2019.3.4\bin\rider64.exe", "ahk_exe C:\Program Files\JetBrains\JetBrains Rider 2019.3.4\bin\rider64.exe")
; ^#b::OpenOrActivate("C:\Program Files\Sublime Text 3\sublime_text.exe", "ahk_exe C:\Program Files\Sublime Text 3\sublime_text.exe")
^#b::GroupActivate, Sublime
^#c::OpenOrActivate("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", "ahk_exe C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
^#e::GroupActivate, FileExplorer
^#g::ActivateWithPid("SourceTree.exe")
^#l::ActivateWithPid("slack.exe")
;^#l::OpenOrActivate("C:\Users\Leo\AppData\Local\slack\slack.exe", "ahk_exe C:\Users\Leo\AppData\Local\slack\slack.exe")
^#n::ActivateWithPid("Discord.exe")
^#m::OpenOrActivate("C:\WINDOWS\system32\cmd.exe", "ahk_exe C:\WINDOWS\system32\cmd.exe")
^#o::ActivateWithPid("Spotify.exe")
;^#r::OpenOrActivate("C:\Users\Leo\AppData\Local\Programs\messengerfordesktop\Messenger for Desktop.exe", "ahk_exe C:\Users\Leo\AppData\Local\Programs\messengerfordesktop\Messenger for Desktop.exe")
^#r::OpenOrActivate("C:\Users\Leo\AppData\Local\Programs\Messenger", "ahk_exe C:\Users\Leo\AppData\Local\Programs\Messenger\Messenger.exe")
^#u::ActivateWithPid("Unity.exe")
^#t::ActivateWithPid("mintty.exe")
^#w::ActivateWithPid("TeamViewer 14.exe")