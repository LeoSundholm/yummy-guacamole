#include "keymap.h"
#include "action_layer.h"

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
[0] = { /* Base */
  {KC_ESC,   KC_LBRACKET, KC_QUOTE,   KC_SCOLON,  KC_P,    KC_Y,   KC_F,    KC_G,     KC_C,     KC_R,     KC_L,     KC_BSPC}, 
  {FUNC(18), KC_A,        KC_O,       KC_E,       KC_U,    KC_I,   KC_D,    KC_H,     KC_T,     KC_N,     KC_S,     KC_ENT},  
  {KC_LSFT,  KC_DOT,      KC_Q,       KC_J,       KC_K,    KC_X,   KC_B,    KC_M,     KC_W,     KC_V,     KC_Z,     KC_COMMA},  
  {KC_LCTL,  KC_LALT,     KC_LGUI,    FUNC(3),    FUNC(2), KC_SPC, KC_SPC,  FUNC(1),  FUNC(3),  KC_LGUI,  KC_LALT,  KC_LCTL}
  },
[1] = { /* QWERTY Base (lol åäö är typ borta orka vara seriös)*/
  {KC_ESC,  KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,    KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,    KC_BSPC},
  {KC_TAB,  KC_A,    KC_S,    KC_D,    KC_F,    KC_G,    KC_H,    KC_J,    KC_K,    KC_L,    KC_SCLN, KC_ENT},
  {KC_LSFT, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH, KC_QUOT},
  {KC_LCTL, KC_LALT, KC_LGUI, FUNC(3), FUNC(2), KC_SPC,  KC_SPC,  FUNC(1), FUNC(3), KC_LGUI, KC_LALT, KC_LCTL}
},
[2] = { /* For playing multi player SoR, won't make sense anywhere else ever*/
  {KC_ESC,  KC_Q,    KC_Q,    KC_V,    KC_R,    KC_T,    KC_Y,    KC_R,    KC_T,    KC_Y,    KC_P,    KC_BSPC},
  {KC_TAB,  KC_Z,    KC_X,    KC_C,    KC_F,    KC_G,    KC_H,    KC_F,    KC_G,    KC_H,    KC_SCLN, KC_ENT},
  {KC_LSFT, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH, KC_QUOT},
  {KC_LCTL, KC_LALT, KC_LGUI, FUNC(3), FUNC(2), KC_SPC,  KC_SPC,  FUNC(1), FUNC(3), KC_LGUI, KC_LALT, KC_LCTL}
},
[3] = { /* Raise */
  {LALT(KC_RBRACKET), KC_1,     KC_2,     KC_3,     KC_4,     KC_5,     KC_6,     KC_7,     KC_8,     KC_9,    KC_0,              LSFT(KC_RBRACKET)},
  {KC_TRNS,           KC_F1,    KC_F2,    KC_F3,    KC_F4,    KC_F5,    KC_F6,    KC_4,     KC_5,     KC_6,    LSFT(KC_RBRACKET), KC_TRNS}, 
  {KC_TRNS,           KC_F7,    KC_F8,    KC_F9,    KC_F10,   KC_F11,   KC_0,     KC_1,     KC_2,     KC_3,    KC_F12,            KC_TRNS}, 
  {KC_TRNS,           KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS, KC_TRNS,           KC_TRNS}
},
[4] = { /* Lower */
  {LSFT(KC_EQUAL), LSFT(KC_1),   LSFT(KC_2),      LSFT(KC_3), LALT(KC_4),     LSFT(KC_5),       LSFT(KC_6), LSFT(KC_7), LSFT(KC_8),       LSFT(KC_9),       LSFT(KC_0),     KC_MINUS},  
  {KC_EQUAL,       LALT(KC_2),   LSFT(KC_SLASH),  KC_GRAVE,   LSFT(KC_GRAVE), LSFT(LALT(KC_7)), LALT(KC_7), KC_BSLASH,  LSFT(LALT(KC_8)), LSFT(LALT(KC_9)), LSFT(KC_MINUS), KC_SLASH},
  {KC_TRNS,        LSFT(KC_DOT), FUNC(10),        FUNC(8),    FUNC(9),        KC_TRNS,          KC_TRNS,    KC_COMMA,   LALT(KC_8),       LALT(KC_9),       KC_TRNS,        LSFT(KC_BSLASH)}, 
  {KC_TRNS,        KC_TRNS,      KC_TRNS,         KC_TRNS,    KC_TRNS,        KC_TRNS,          KC_TRNS,    KC_TRNS,    KC_TRNS,          KC_TRNS,          KC_TRNS,        KC_TRNS}
},
[5] = { /* META */
  {KC_MPLY,  KC_HOME,  KC_UP,    KC_END,   KC_TRNS,    KC_TRNS,  KC_TRNS,    KC_HOME,  KC_UP,    KC_END,   KC_TRNS, KC_DELETE}, 
  {KC_TRNS,  KC_LEFT,  KC_DOWN,  KC_RIGHT, KC_PGUP,    KC_TRNS,  KC_PGUP,    KC_LEFT,  KC_DOWN,  KC_RIGHT, KC_TRNS, FUNC(28)},
  {KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_PGDOWN,  KC_TRNS,  KC_PGDOWN,  KC_TRNS,  KC_VOLD,  KC_VOLU,  KC_MPRV, KC_MNXT},  
  {KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,  KC_TRNS,    KC_TRNS,  KC_TRNS,    KC_TRNS,  KC_TRNS,  FUNC(6),  FUNC(4), FUNC(5)}
}
};

enum macro_id {
    PRINT_LAYER,
    COPY,
    PASTE,
    CUT,
    UNDO,
    TOCABIKE,
};

const macro_t *action_get_macro(keyrecord_t *record, uint8_t id, uint8_t opt)
{
    keyevent_t event = record->event;
 
    switch (id) {
        case PRINT_LAYER:
          if (default_layer_state == 0 || default_layer_state == 1)
          {
            return (event.pressed ?
                      MACRO( T(S), T(V), T(O), T(R), T(A), T(K), END ) : 
                      MACRO( END ) );
          } else if (default_layer_state == 2){
            return (event.pressed ?
                      MACRO( T(Q), T(W), T(E), T(R), T(T), T(Y), END ) : 
                      MACRO( END ) );
          }
        case COPY:
            return (event.pressed ?
                    MACRO( D(LGUI), T(C), U(LGUI), END ) :
                    MACRO( END ) );
        case PASTE:
            return (event.pressed ?
                    MACRO( D(LGUI), T(V), U(LGUI), END ) :
                    MACRO( END ) );
        case CUT:
            return (event.pressed ?
                    MACRO( D(LGUI), T(X), U(LGUI), END ) :
                    MACRO( END ) );
        case UNDO:
            return (event.pressed ?
                    MACRO( D(LGUI), T(Z), U(LGUI), END ) :
                    MACRO( END ) );
        case TOCABIKE:
           return (event.pressed ?
                    MACRO( D(LSFT), T(DOT), U(LSFT), T(T), T(O), T(C), T(A), T(B), T(I), T(K), T(E), D(LSFT), T(DOT), U(LSFT), T(SPC), END ) : 
                    MACRO( END ) );
    }
    return MACRO_NONE;
}

const uint16_t PROGMEM fn_actions[] = {
    [1] = ACTION_LAYER_MOMENTARY(3),  // to first Fn overlay ("raise")
    [2] = ACTION_LAYER_MOMENTARY(4),  // to second Fn overlay ("lower") 
    [3] = ACTION_LAYER_MOMENTARY(5),  // to third Fn overlay ("meta")

    [4] = ACTION_DEFAULT_LAYER_SET(0), // svorak
    [5] = ACTION_DEFAULT_LAYER_SET(1), // qwerty
    [6] = ACTION_DEFAULT_LAYER_SET(2), // SoR

    //[7] = ACTION_MODS_TAP_KEY(MOD_LSFT, KC_COMMA), //hold COMMA for shift, release for normal comma
    [7] = ACTION_MACRO(PRINT_LAYER), 
    [8] = ACTION_MACRO(COPY), 
    [9] = ACTION_MACRO(PASTE), 
    [10] = ACTION_MACRO(CUT), 
    [27] = ACTION_MACRO(UNDO), 
    [28] = ACTION_MACRO(TOCABIKE), 

    [11] = ACTION_MODS_KEY(MOD_LSFT, KC_1),
    [12] = ACTION_MODS_KEY(MOD_LSFT, KC_2),
    [13] = ACTION_MODS_KEY(MOD_LSFT, KC_3),
    [14] = ACTION_MODS_KEY(MOD_LSFT, KC_4),
    [15] = ACTION_MODS_KEY(MOD_LSFT, KC_5),
    [16] = ACTION_MODS_KEY(MOD_LSFT, KC_6),
    [17] = ACTION_MODS_KEY(MOD_LSFT, KC_7),
    [18] = ACTION_MODS_KEY(MOD_LSFT, KC_8),
    [19] = ACTION_MODS_KEY(MOD_LSFT, KC_9),
    [20] = ACTION_MODS_KEY(MOD_LSFT, KC_0),
    [21] = ACTION_MODS_KEY(MOD_LSFT, KC_MINS),
    [22] = ACTION_MODS_KEY(MOD_LSFT, KC_EQL),
    [23] = ACTION_MODS_KEY(MOD_LSFT, KC_GRV),
    [24] = ACTION_MODS_KEY(MOD_LSFT, KC_LBRC),
    [25] = ACTION_MODS_KEY(MOD_LSFT, KC_RBRC),
    [26] = ACTION_MODS_KEY(MOD_LSFT, KC_BSLS),
    [18] = ACTION_LAYER_TAP_KEY(3, KC_TAB),

};