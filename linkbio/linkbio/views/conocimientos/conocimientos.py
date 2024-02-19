import reflex as rx
import linkbio.styles.styles as styles
from linkbio.components.link_button import link_button
from linkbio.components.link_icon import link_icon
from linkbio.styles.styles import Size as Size
from linkbio.components.info_text import info_text
from linkbio.styles.colors import TextColor as TextColor
from linkbio.styles.colors import Color as Color


def conocimientos() -> rx.component:
    return rx.vstack(
        rx.text(
            "CONOCIMIENTOS",
            style=styles.tittle_style, 
            font_size=Size.BIG.value
        ),
        rx.text(
                "Aquí podeis ver de manera general las tecnologías que suelo utilizar en mi día a día o las que estoy desarrollando de manera autodidacta o mediante cursos.", 
                 style=styles.body_style
        ),
        rx.box(
            rx.hstack(
             rx.image(
                    src="windows.svg",
                    width=Size.BIG.value,
                    height=Size.BIG.value,
                    margin=Size.MEDIUM.value,
                    

                                  ),
             rx.vstack(
                rx.text("Windows Server.", style=styles.button_tittle_style),
                rx.text("Gestión de servidores.", style=styles.button_body_style),
                rx.text("Active Directory.", style=styles.button_body_style),
                rx.text("En proceso de ampliar conocimientos.", style=styles.button_body_style),
                 align_items="start",
                padding_y=Size.DEFAULT.value,
                padding_right=Size.DEFAULT.value,
                
                
            ),
            ),
             spacing=Size.SMALL.value,
               
                background_color=Color.SECONDARY.value,
                width="100%",
                height="100%",
                padding=Size.DEFAULT.value,
                border_radius=Size.DEFAULT.value,
                white_space="normal",
                text_align="start"
        ),
        rx.box(
            rx.hstack(
             rx.image(
                    src="linux.svg",
                    width=Size.BIG.value,
                    height=Size.BIG.value,
                    margin=Size.MEDIUM.value,
                    

                                  ),
             rx.vstack(
                rx.text("Kali Linux", style=styles.button_tittle_style),
                rx.text("Pentesting a maquinas Linux.", style=styles.button_body_style),
                rx.text("Herramientas utilizadas: dirb, nslookup, gobuster, hydra, nmap, enum4linux, exiftool, binwalk.", style=styles.button_body_style),
                rx.text("Estas son algunas de las herramientas que utilizo en Kali. La CIBERSEGURIDAD es un mundo muy amplio y cuando tengo tiempo me propongo retos en Tryhackme.", style=styles.button_body_style),
                
                
                spacing=Size.SMALL.value,
                align_items="start",
                padding_y=Size.DEFAULT.value,
                padding_right=Size.DEFAULT.value,
                
             ),
             width="100%"
            ),
                background_color=Color.SECONDARY.value,
                width="100%",
                height="100%",
                padding=Size.DEFAULT.value,
                border_radius=Size.DEFAULT.value,
                white_space="normal",
                text_align="start"
        ),
        rx.box(
            rx.hstack(
             rx.image(
                    src="db.svg",
                    width=Size.BIG.value,
                    height=Size.BIG.value,
                    margin=Size.MEDIUM.value,
                    

                                  ),
             rx.vstack(
                rx.text("MySQL.", style=styles.button_tittle_style),
                rx.text("Instalaciones de BBDD.", style=styles.button_body_style),
                rx.text("Conocimientos básicos SQL.", style=styles.button_body_style),
                rx.text("Gestión de usuarios y privilegos.", style=styles.button_body_style),
                rx.text("En proceso de ampliar conocimientos.", style=styles.button_body_style),
                 align_items="start",
                padding_y=Size.DEFAULT.value,
                padding_right=Size.DEFAULT.value,
                
                
            ),
            ),
             spacing=Size.SMALL.value,
               
                background_color=Color.SECONDARY.value,
                width="100%",
                height="100%",
                padding=Size.DEFAULT.value,
                border_radius=Size.DEFAULT.value,
                white_space="normal",
                text_align="start"
        ),
        rx.box(
            rx.hstack(
             rx.image(
                    src="thm.svg",
                    width=Size.BIG.value,
                    height=Size.BIG.value,
                    margin=Size.MEDIUM.value,
                    

                                  ),
             rx.vstack(
                rx.text("Desarrollo.", style=styles.button_tittle_style),
                rx.text("Estoy empezando en el mundo de la programación y estoy aprendiendo estos lenguajes en mis ratos libres.", style=styles.button_body_style),
                rx.text("REFLEX, es el framework con el que está desarrollada esta página.", style=styles.button_body_style),
                rx.text("PYTHON.", style=styles.button_body_style),
                rx.text("HTML.", style=styles.button_body_style),
                rx.text("CSS.", style=styles.button_body_style),
                rx.text("JS.", style=styles.button_body_style),
                 align_items="start",
                padding_y=Size.DEFAULT.value,
                padding_right=Size.DEFAULT.value,
                
                
            ),
            ),
             spacing=Size.SMALL.value,
               
                background_color=Color.SECONDARY.value,
                width="100%",
                height="100%",
                padding=Size.DEFAULT.value,
                border_radius=Size.DEFAULT.value,
                white_space="normal",
                text_align="start"
        ),
    )