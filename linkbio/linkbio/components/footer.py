import reflex as rx
import datetime
from linkbio.styles.styles import Size as Size 
from linkbio.styles.colors import TextColor as TextColor

def footer() -> rx.component:

      return rx.vstack(
       rx.link(
        rx.image(
        src="https://tryhackme-badges.s3.amazonaws.com/persicore.png",
        ),
        is_external=True,
        href="https://tryhackme.com/p/persicore"),
        rx.link( f"{datetime.date.today().year} El año de los cambios",
        href="https://www.linkedin.com/in/adriánpérezvecina",
        is_external=True),
        rx.text(
          "Port folio de Adrián",
          font_size=Size.MEDIUM.value,
          margin_top=Size.ZERO.value,
          font_family="Comforta"

        ),
        margin_bottom=Size.BIG.value,
        color=TextColor.FOOTER.value,
        padding_bottom=Size.BIG.value,
      )