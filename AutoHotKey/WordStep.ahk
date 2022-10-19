; ^Left::Send {Home}
; ^Right::Send {End}
; ^+Left::Send +{Home}
; ^+Right::Send +{End}
; the above caused issues with e.g. slack where alt+arrow switches channels and you end up with no wordstep ):

;^Up::Send ^{Home}
;^Down::Send ^{End}
^+Up::Send ^+{Home}
^+Down::Send ^+{End}
!BackSpace::Send ^{BackSpace}

; #Left::Send ^{Left}
; #Right::Send ^{Right}
; I actually don't really use it because I'm so mac damaged, and snapping windows is quite nice