LWin & Tab:: 
    CtrlTabMenu := true
    If GetKeyState("Shift","P")
        Send {Ctrl Down}{Shift Down}{Tab}
    else
        Send {Ctrl Down}{Tab}
return

#If (CtrlTabMenu)

    ~*LWin Up::
        Send {Shift Up}{Ctrl Up}
        CtrlTabMenu := false 
    return

#If