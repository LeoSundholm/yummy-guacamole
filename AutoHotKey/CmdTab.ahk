RCtrl & Tab:: 
    AltTabMenu := true
    If GetKeyState("Shift","P")
        Send {Alt Down}{Shift Down}{Tab}
    else
        Send {Alt Down}{Tab}
return

#If (AltTabMenu)

    ~*RCtrl Up::
        Send {Shift Up}{Alt Up}
        AltTabMenu := false 
    return

#If