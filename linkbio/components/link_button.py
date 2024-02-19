import reflex as rx
import linkbio.styles.styles as styles
from linkbio.styles.styles import Size as Size
from linkbio.styles.colors import Color as Color

def link_button(image: str, title: str, body: str, url: str) -> rx.component:
    
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src=image,
                    width=Size.BIG.value,
                    height=Size.BIG.value,
                    margin=Size.MEDIUM.value,
                    

                                  ),
                rx.vstack(
                rx.text(title, style=styles.button_tittle_style),
                rx.text(body, style=styles.button_body_style),
                spacing=Size.SMALL.value,
                align_items="start",
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
                ),
                
                width="100%",
            ),
               
            
        ),
        href=url,
        is_external=True,
        width="100%"
    )