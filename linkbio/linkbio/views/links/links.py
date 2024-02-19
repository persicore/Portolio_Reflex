import reflex as rx
from linkbio.components.link_button import link_button
from linkbio.components.title import title
from linkbio.styles.styles import Size as Size
import linkbio.styles.styles as styles
from linkbio.styles.colors import Color as Color

def links() -> rx.component:
    return rx.vstack(

        title("Puntos de interés"),
        link_button(
        "linkedin.svg",
        "LINKEDIN",
        "Conoce mi trayectoria laboral y académica",
        "https://www.linkedin.com/in/adriánpérezvecina"),

        link_button(
            "git.svg",
            "GITHUB",
        "Conoce alguno de mis proyectos",
        "https://github.com/persicore/"),

        link_button(
            "instagram.svg",
            "INSTAGRAM",
        "Échale un ojo a los PCs que he diseñado",
        "https://www.instagram.com/quierotupc_elda/"),

        link_button(
            "thm.svg",
            "TRYHACKME",
        "En mis ratos libres practico ciberseguridad aquí",
        "https://tryhackme.com/p/persicore"),
        
        rx.popover(
            rx.popover_trigger(
                rx.button(
            rx.hstack(
                rx.image(
                    src="correo.svg",
                    width=Size.BIG.value,
                    height=Size.BIG.value,
                    margin=Size.MEDIUM.value,
                    

                                  ),
                rx.vstack(
                rx.text("CONTACTO", style=styles.button_tittle_style),
                rx.text("Aquí puedes contactar conmigo", style=styles.button_body_style),
                spacing=Size.SMALL.value,
                align_items="start",
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
                ),
                width="100%"
            ), placement="top",
            background_color=Color.SECONDARY.value,
                width="100%",
                height="100%",
                padding=Size.DEFAULT.value,
                border_radius=Size.DEFAULT.value,
                white_space="normal",
                text_align="start"
                ),
                ),
            rx.popover_content(
                rx.popover_header("Mis datos de contacto",style=styles.button_tittle_style),
                rx.popover_body("EMAIL : adrian.perez.vecina@gmail.com",style=styles.button_body_style),
                rx.popover_body("TLF : 633158322",style=styles.button_body_style),
                 spacing=Size.SMALL.value,
                align_items="start",
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value,
                background_color=Color.SECONDARY.value,
               
            ) ,
           

        ),
        
        

        

       
        width="100%",
        spacing=Size.MEDIUM.value
        

    )