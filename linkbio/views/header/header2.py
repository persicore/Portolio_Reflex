import reflex as rx
import linkbio.styles.styles as styles
from linkbio.components.link_button import link_button
from linkbio.components.link_icon import link_icon
from linkbio.styles.styles import Size as Size
from linkbio.components.info_text import info_text
from linkbio.styles.colors import TextColor as TextColor
from linkbio.styles.colors import Color as Color

def header2() -> rx.component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(src="adrian.jpeg",
            size="xl",
            border="2px",
            border_color=Color.SECONDARY.value
   
    ),
           rx.vstack(
            rx.heading("Adrián Pérez",
            style=styles.tittle_style
            ),

            rx.hstack(

                rx.link(
                    rx.image(
                        src="linkedin.svg",
                        size="sm" 
                          ),
                       is_external=True,
                       href="https://www.linkedin.com/in/adriánpérezvecina"
                       ),
                        rx.link(
                    rx.image(
                        src="git.svg",
                        size="sm" 
                          ),
                       is_external=True,
                       href="https://github.com/persicore/"
                       ),
                        rx.link(
                    rx.image(
                        src="instagram.svg",
                        size="sm" 
                          ),
                       is_external=True,
                       href="https://www.instagram.com/quierotupc_elda/"
                       ),
                        rx.link(
                    rx.image(
                        src="thm.svg",
                        size="sm" 
                          ),
                       is_external=True,
                       href="https://tryhackme.com/p/persicore"
                       ),
                       spacing=Size.BIG.value
            ),
            align_items="start",
            color=TextColor.HEADER.value
            ),
            spacing=Size.BIG.value
        
            ),
        rx.flex(
            info_text("IT ADMIN", ""),
            rx.spacer(),
            info_text("CIBERSEGURIDAD", ""),
             rx.spacer(),
            info_text("DESARROLLO", ""),
            width="100%",
            
            
        ),
        align_items="start",
        spacing=Size.BIG.value
    )