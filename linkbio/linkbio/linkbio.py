import reflex as rx
from linkbio.components.navbar import navbar
from linkbio.components.footer import footer
from linkbio.views.header.header import header
from linkbio.views.header.header2 import header2
from linkbio.views.links.links import links
from linkbio.views.accordion.accordion import trayectoria
from linkbio.views.conocimientos.conocimientos import conocimientos
import linkbio.styles.styles as styles
from linkbio.styles.colors import Color as Color
from linkbio.styles.colors import TextColor as TextColor
from linkbio.styles.styles import Size as Size
#class State(rx.State):
 #    pass

def index() -> rx.component:
     return rx.box(
       
       navbar(),
       

       rx.center(

          rx.vstack(

             rx.tabs(
                
                
                    
                rx.tab_list(
                  
          
                  rx.tab("Sobre mí",style=styles.button_tittle_style),
                  rx.tab("Mi trayectoria", style=styles.button_tittle_style),
                  rx.tab("Conocimientos", style=styles.button_tittle_style),
                  
                  

               ),
               rx.tab_panels(
                   rx.tab_panel(
        
                     header(),
                     links(),
                     

                  ),
                  rx.tab_panel(
                     header2(),
                     trayectoria(),
                     
                  ),
                  rx.tab_panel(
                     header2(),
                     conocimientos(),
                     
                  )
               ),
                align="center", 
                variant="soft-rounded",
                color_scheme="whiteAlpha",
                size="lg"
            ),
            rx.spacer(),
            footer(),
            max_width=styles.max_width,
            width="100%",
            margin_y=styles.Size.BIG.value,
            padding=Size.SMALL.value
         ),
            
      ),
      background_color=Color.BACKGROUND.value,
      
   )
     
     
            


app = rx.App(
   style=styles.BASE_STYLE,
   background_color=Color.BACKGROUND.value,
   
   stylesheets=[
        "fonts/localstyle.css",  # This path is relative to assets/
    ],
    
)
app.add_page(
   index,
   title="Portfolio Adrián | Conóceme un poco más",  
   description="Soy Adrian y gracias por visitar mi nido",
   
)

