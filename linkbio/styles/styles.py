import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font as Font


#constantes
max_width="600px"

#sices

class Size(Enum):
    ZERO = "Opx !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"


# Styles

BASE_STYLE = {
   
   rx.Accordion: {
      
        "background_color": Color.SECONDARY.value,
        "color": TextColor.HEADER.value,
        "width": "100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "border_radius" :Size.DEFAULT.value,
        "white_space": "normal",
        "text_align": "start",
       
        
   },
   
   rx.Tabs : {
    "width": "100%",
        "height": "100%",
        
        
   },
    
    rx.Button: {
        
        "background_color": Color.SECONDARY.value,
        "color": TextColor.HEADER.value,
        "width": "100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "border_radius" :Size.DEFAULT.value,
        "white_space": "normal",
        "text_align": "start",
        "_hover": {
            "background_color": Color.CONTENT.value
        }
    },
    rx.Link: {
        "text_decoration": "none",
        "_hover": {}
    },
    "font_family": Font.DEFAULT.value,
    "background_color": Color.BACKGROUND.value
}
navbar_tittle_style = dict(
    font_family=Font.LOGO.value,
    
    font_size=Size.BIG.value
)
tittle_style = dict(
    
    width="100%",
    padding_top=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
    font_family=Font.TITTLE.value,
    size="lg"
)
body_style = dict(

    color=TextColor.BODY.value,
    font_family=Font.DEFAULT.value,
    
)

button_tittle_style = dict(
    font_size=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
    font_family=Font.TITTLE.value
)

button_body_style = dict(
    font_size=Size.MEDIUM.value,
    color=TextColor.BODY.value,
    font_family=Font.DEFAULT.value
)