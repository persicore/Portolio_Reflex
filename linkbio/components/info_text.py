import reflex as rx
from linkbio.styles.styles import Size as Size
from linkbio.styles.colors import TextColor as TextColor
from linkbio.styles.colors import Color as Color
import linkbio.styles.styles as styles
def info_text(title: str, body: str) -> rx.Component:
     return rx.box(
        rx.span(
         title,
         font_weight="bold", 
         color=Color.CONTENT.value,
         
         ),
      
        f" {body}", font_size=Size.MEDIUM.value,
      color=TextColor.HEADER.value,
      style=styles.body_style
     )