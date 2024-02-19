import reflex as rx
import linkbio.styles.styles as styles
from linkbio.components.link_button import link_button
from linkbio.components.link_icon import link_icon
from linkbio.styles.styles import Size as Size
from linkbio.components.info_text import info_text
from linkbio.styles.colors import TextColor as TextColor
from linkbio.styles.colors import Color as Color

def trayectoria() -> rx.component:
    return rx.vstack(
    rx.text("EMPRESAS", style=styles.tittle_style, font_size=Size.BIG.value),
    rx.text(
        "Aquí podeis ver un resumen de las empresas en las que he podido desarrollar mis conocimientos y en las que he adquirido mis principales actitudes y valores",
        style=styles.body_style
    
    ),
    rx.accordion(
        rx.accordion_item(
            rx.accordion_button(
                rx.vstack(
                    rx.heading("PANAMA JACK", style=styles.button_tittle_style),
                     rx.text("IT ADMIN | Marca destacada del sector del Calzado", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value,
                     
                     ),
                      
                rx.accordion_icon(),
              
            ),
            rx.accordion_panel(
                rx.vstack(
                    rx.text("Mayo 2023 | Actualidad.", style=styles.button_body_style),
                    rx.text("Soporte a usuarios.", style=styles.button_body_style),
                    rx.text("Gestión de servidores.", style=styles.button_body_style),
                    rx.text("Windows Server.", style=styles.button_body_style),
                    rx.text("Copias de seguridad.", style=styles.button_body_style),
                    rx.text("Gestión de software.", style=styles.button_body_style),
                    rx.text("Monitorización de servidores.", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                    )
                
            ),
         
        ),

        rx.accordion_item(
            rx.accordion_button(
               rx.vstack(
                    rx.heading("CLAVE INFORMÁTICA", style=styles.button_tittle_style),
                     rx.text("IT ADMIN | Prácticas de formación", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                     ),
                rx.accordion_icon(),
            ),
            rx.accordion_panel(
                rx.vstack(
                    rx.text("Febrero 2023 | Junio 2023.", style=styles.button_body_style),
                    rx.text("Soporte a usuarios.", style=styles.button_body_style),
                    rx.text("Gestión de servidores.", style=styles.button_body_style),
                    rx.text("Windows Server.", style=styles.button_body_style),
                    rx.text("Proyecto Intune.", style=styles.button_body_style),
                    rx.text("Monitorización de servidores.", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                    )
            ),
        
        ),
        rx.accordion_item(
            rx.accordion_button(
               rx.vstack(
                    rx.heading("IT FREELANCER", style=styles.button_tittle_style),
                     rx.text("IT SUPPORT | PROYECTO PERSONAL", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                     ),
                rx.accordion_icon(),
            ),
            rx.accordion_panel(
                rx.vstack(
                    
                    rx.text("Soporte a usuarios.", style=styles.button_body_style),
                    rx.text("Configuración de SETUP Gaming.", style=styles.button_body_style),
                    rx.text("Incidencias usuario final.", style=styles.button_body_style),
                    rx.text("Mantenimiento de equipos.", style=styles.button_body_style),
                    rx.text("Estudio de necesidades a nivel usuario / pequeñas empresas.", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                    )
            ),
        
        ),
         background_color=Color.SECONDARY.value,
                      width="100%",
                      height="100%",
                      padding=Size.DEFAULT.value,
                      border_radius=Size.DEFAULT.value,
                      white_space="normal",
                      text_align="start",

       allow_toggle=True 
    ),
    rx.text("FORMACIÓN", style=styles.tittle_style, font_size=Size.BIG.value),
    rx.text(
        "Aquí os muestro las titulaciones que he obtenido",
        style=styles.body_style
    
    ),
    rx.accordion(
        rx.accordion_item(
            rx.accordion_button(
                rx.vstack(
                    rx.heading("ASIR", style=styles.button_tittle_style),
                     rx.text("LINKIA FP | Administración de sistemas informáticos y redes", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                     ),
                
                rx.accordion_icon(),
               
            ),
            rx.accordion_panel(
                rx.vstack(
                    rx.text("2021 | 2023.", style=styles.button_body_style),
                    rx.text("Titulación oficial grado superior.", style=styles.button_body_style),
                    
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                    )
                
            ),
         
        ),
        rx.accordion_item(
            rx.accordion_button(
                rx.vstack(
                    rx.heading("NSE1", style=styles.button_tittle_style),
                     rx.text("Fortinet | Certificado ciberseguridad", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                     ),
                
                rx.accordion_icon(),
               
            ),
            rx.accordion_panel(
                rx.vstack(
                    rx.text("2023.", style=styles.button_body_style),
                    rx.text("Certificado oficial Fortinet", style=styles.button_body_style),
                    
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                    )
                
            ),
         
        ),
         rx.accordion_item(
            rx.accordion_button(
                rx.vstack(
                    rx.heading("Python Essentials 1 ", style=styles.button_tittle_style),
                     rx.text("Python | Certificado Python de Cisco", style=styles.button_body_style),
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                     ),
                
                rx.accordion_icon(),
               
            ),
            rx.accordion_panel(
                rx.vstack(
                    rx.text("2024.", style=styles.button_body_style),
                    rx.text("Certificado oficial Cisco", style=styles.button_body_style),
                    
                      spacing=Size.SMALL.value,
                      align_items="start",
                      padding_y=Size.SMALL.value,
                      padding_right=Size.SMALL.value
                    )
                
            ),
         
        ),
       
        allow_toggle=True 
    )
    )
    