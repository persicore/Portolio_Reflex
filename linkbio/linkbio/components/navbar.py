import reflex as rx
import linkbio.styles.styles as Styles
from linkbio.styles.styles import Size as Size
from linkbio.styles.colors import Color as Color
from linkbio.styles.colors import TextColor as TextColor
def navbar() -> rx.component:

      return rx.hstack(
        rx.text(
            "Portfolio Adrián",
            color=TextColor.HEADER.value,
            style=Styles.navbar_tittle_style
            ),
            
        
           

               
                       
                        

                       
                       
        

            position="sticky",
            
            bg=Color.SECONDARY.value,
            padding_x=Size.BIG.value,
            padding_y=Size.DEFAULT.value,
            z_index="999",
            top='0',
             

        
        )