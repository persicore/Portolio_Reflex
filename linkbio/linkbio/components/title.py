import reflex as rx
import linkbio.styles.styles as styles

def title(text: str) -> rx.Component:
  return rx.heading(
    text,
    size="lg",
    style=styles.tittle_style
  )