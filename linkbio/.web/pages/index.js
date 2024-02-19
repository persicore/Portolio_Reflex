/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Box sx={{"backgroundColor": "#17202A "}}>
  <HStack sx={{"position": "sticky", "bg": "#141314", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Text sx={{"fontFamily": "Comforta", "fontSize": "2em", "color": "#F1F2F4"}}>
  {`Portfolio Adrián`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "0.5em"}}>
  <Tabs align={`center`} colorScheme={`whiteAlpha`} sx={{"size": "lg", "width": "100%", "height": "100%"}} variant={`soft-rounded`}>
  <TabList>
  <Tab sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Sobre mí`}
</Tab>
  <Tab sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Mi trayectoria`}
</Tab>
  <Tab sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Conocimientos`}
</Tab>
</TabList>
  <TabPanels>
  <TabPanel>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`2em`}>
  <Avatar size={`xl`} src={`adrian.jpeg`} sx={{"border": "2px", "borderColor": "#141314"}}/>
  <VStack alignItems={`start`} sx={{"color": "#F1F2F4"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold", "size": "lg"}}>
  {`Adrián Pérez`}
</Heading>
  <HStack spacing={`2em`}>
  <Link as={NextLink} href={`https://www.linkedin.com/in/adriánpérezvecina`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`linkedin.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://github.com/persicore/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`git.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/quierotupc_elda/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`instagram.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://tryhackme.com/p/persicore`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`thm.svg`} sx={{"size": "sm"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`IT ADMIN`}
</Text>
  {` `}
</Box>
  <Spacer/>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`CIBERSEGURIDAD`}
</Text>
  {` `}
</Box>
  <Spacer/>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`DESARROLLO`}
</Text>
  {` `}
</Box>
</Flex>
  <Text sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light"}}>
  {`Soy titulado en ASIR y, tras mis estudios, me sumergí en la ciberseguridad y programación. Desarrollo proyectos propios después del trabajo para aprender y especializarme en estos campos. Mi portfolio refleja mi pasión por la informática y mi compromiso con el aprendizaje continuo.`}
</Text>
  <Text sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light"}}>
  {`Esta página está hecha con REFLEX, un framework nuevo que se utiliza para construir y desplegar app web con PHYTON`}
</Text>
</VStack>
  <VStack spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold", "size": "lg"}}>
  {`Puntos de interés`}
</Heading>
  <Link as={NextLink} href={`https://www.linkedin.com/in/adriánpérezvecina`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"backgroundColor": "#141314", "color": "#F1F2F4", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#797D7F "}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`LINKEDIN`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Conoce mi trayectoria laboral y académica`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/persicore/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"backgroundColor": "#141314", "color": "#F1F2F4", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#797D7F "}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`git.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`GITHUB`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Conoce alguno de mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/quierotupc_elda/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"backgroundColor": "#141314", "color": "#F1F2F4", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#797D7F "}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`instagram.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`INSTAGRAM`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Échale un ojo a los PCs que he diseñado`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://tryhackme.com/p/persicore`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"backgroundColor": "#141314", "color": "#F1F2F4", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#797D7F "}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`thm.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`TRYHACKME`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`En mis ratos libres practico ciberseguridad aquí`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Popover>
  <PopoverTrigger>
  <Button sx={{"placement": "top", "backgroundColor": "#141314", "width": "100%", "height": "100%", "padding": "1em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start", "color": "#F1F2F4", "_hover": {"backgroundColor": "#797D7F "}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`correo.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`CONTACTO`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Aquí puedes contactar conmigo`}
</Text>
</VStack>
</HStack>
</Button>
</PopoverTrigger>
  <PopoverContent sx={{"spacing": "0.5em", "alignItems": "start", "paddingY": "0.5em", "paddingRight": "0.5em", "backgroundColor": "#141314"}}>
  <PopoverHeader sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Mis datos de contacto`}
</PopoverHeader>
  <PopoverBody sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`EMAIL : adrian.perez.vecina@gmail.com`}
</PopoverBody>
  <PopoverBody sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`TLF : 633158322`}
</PopoverBody>
</PopoverContent>
</Popover>
</VStack>
</TabPanel>
  <TabPanel>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`2em`}>
  <Avatar size={`xl`} src={`adrian.jpeg`} sx={{"border": "2px", "borderColor": "#141314"}}/>
  <VStack alignItems={`start`} sx={{"color": "#F1F2F4"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold", "size": "lg"}}>
  {`Adrián Pérez`}
</Heading>
  <HStack spacing={`2em`}>
  <Link as={NextLink} href={`https://www.linkedin.com/in/adriánpérezvecina`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`linkedin.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://github.com/persicore/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`git.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/quierotupc_elda/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`instagram.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://tryhackme.com/p/persicore`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`thm.svg`} sx={{"size": "sm"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`IT ADMIN`}
</Text>
  {` `}
</Box>
  <Spacer/>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`CIBERSEGURIDAD`}
</Text>
  {` `}
</Box>
  <Spacer/>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`DESARROLLO`}
</Text>
  {` `}
</Box>
</Flex>
</VStack>
  <VStack>
  <Text sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold", "size": "lg", "fontSize": "2em"}}>
  {`EMPRESAS`}
</Text>
  <Text sx={{"color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Aquí podeis ver un resumen de las empresas en las que he podido desarrollar mis conocimientos y en las que he adquirido mis principales actitudes y valores`}
</Text>
  <Accordion allowToggle={true} sx={{"backgroundColor": "#141314", "width": "100%", "height": "100%", "padding": "1em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start", "color": "#F1F2F4"}}>
  <AccordionItem>
  <AccordionButton>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Heading sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`PANAMA JACK`}
</Heading>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`IT ADMIN | Marca destacada del sector del Calzado`}
</Text>
</VStack>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Mayo 2023 | Actualidad.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Soporte a usuarios.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Gestión de servidores.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Windows Server.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Copias de seguridad.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Gestión de software.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Monitorización de servidores.`}
</Text>
</VStack>
</AccordionPanel>
</AccordionItem>
  <AccordionItem>
  <AccordionButton>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Heading sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`CLAVE INFORMÁTICA`}
</Heading>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`IT ADMIN | Prácticas de formación`}
</Text>
</VStack>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Febrero 2023 | Junio 2023.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Soporte a usuarios.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Gestión de servidores.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Windows Server.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Proyecto Intune.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Monitorización de servidores.`}
</Text>
</VStack>
</AccordionPanel>
</AccordionItem>
  <AccordionItem>
  <AccordionButton>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Heading sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`IT FREELANCER`}
</Heading>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`IT SUPPORT | PROYECTO PERSONAL`}
</Text>
</VStack>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Soporte a usuarios.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Configuración de SETUP Gaming.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Incidencias usuario final.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Mantenimiento de equipos.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Estudio de necesidades a nivel usuario / pequeñas empresas.`}
</Text>
</VStack>
</AccordionPanel>
</AccordionItem>
</Accordion>
  <Text sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold", "size": "lg", "fontSize": "2em"}}>
  {`FORMACIÓN`}
</Text>
  <Text sx={{"color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Aquí os muestro las titulaciones que he obtenido`}
</Text>
  <Accordion allowToggle={true} sx={{"backgroundColor": "#141314", "color": "#F1F2F4", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start"}}>
  <AccordionItem>
  <AccordionButton>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Heading sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`ASIR`}
</Heading>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`LINKIA FP | Administración de sistemas informáticos y redes`}
</Text>
</VStack>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`2021 | 2023.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Titulación oficial grado superior.`}
</Text>
</VStack>
</AccordionPanel>
</AccordionItem>
  <AccordionItem>
  <AccordionButton>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Heading sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`NSE1`}
</Heading>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Fortinet | Certificado ciberseguridad`}
</Text>
</VStack>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`2023.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Certificado oficial Fortinet`}
</Text>
</VStack>
</AccordionPanel>
</AccordionItem>
  <AccordionItem>
  <AccordionButton>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Heading sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Python Essentials 1 `}
</Heading>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Python | Certificado Python de Cisco`}
</Text>
</VStack>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`2024.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Certificado oficial Cisco`}
</Text>
</VStack>
</AccordionPanel>
</AccordionItem>
</Accordion>
</VStack>
</TabPanel>
  <TabPanel>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`2em`}>
  <Avatar size={`xl`} src={`adrian.jpeg`} sx={{"border": "2px", "borderColor": "#141314"}}/>
  <VStack alignItems={`start`} sx={{"color": "#F1F2F4"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold", "size": "lg"}}>
  {`Adrián Pérez`}
</Heading>
  <HStack spacing={`2em`}>
  <Link as={NextLink} href={`https://www.linkedin.com/in/adriánpérezvecina`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`linkedin.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://github.com/persicore/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`git.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/quierotupc_elda/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`instagram.svg`} sx={{"size": "sm"}}/>
</Link>
  <Link as={NextLink} href={`https://tryhackme.com/p/persicore`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`thm.svg`} sx={{"size": "sm"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`IT ADMIN`}
</Text>
  {` `}
</Box>
  <Spacer/>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`CIBERSEGURIDAD`}
</Text>
  {` `}
</Box>
  <Spacer/>
  <Box sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Light", "fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#797D7F "}}>
  {`DESARROLLO`}
</Text>
  {` `}
</Box>
</Flex>
</VStack>
  <VStack>
  <Text sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold", "size": "lg", "fontSize": "2em"}}>
  {`CONOCIMIENTOS`}
</Text>
  <Text sx={{"color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Aquí podeis ver de manera general las tecnologías que suelo utilizar en mi día a día o las que estoy desarrollando de manera autodidacta o mediante cursos.`}
</Text>
  <Box sx={{"spacing": "0.5em", "backgroundColor": "#141314", "width": "100%", "height": "100%", "padding": "1em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start"}}>
  <HStack>
  <ChakraImage src={`windows.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} sx={{"paddingY": "1em", "paddingRight": "1em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Windows Server.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Gestión de servidores.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Active Directory.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`En proceso de ampliar conocimientos.`}
</Text>
</VStack>
</HStack>
</Box>
  <Box sx={{"backgroundColor": "#141314", "width": "100%", "height": "100%", "padding": "1em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start"}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`linux.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "1em", "paddingRight": "1em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Kali Linux`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Pentesting a maquinas Linux.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Herramientas utilizadas: dirb, nslookup, gobuster, hydra, nmap, enum4linux, exiftool, binwalk.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Estas son algunas de las herramientas que utilizo en Kali. La CIBERSEGURIDAD es un mundo muy amplio y cuando tengo tiempo me propongo retos en Tryhackme.`}
</Text>
</VStack>
</HStack>
</Box>
  <Box sx={{"spacing": "0.5em", "backgroundColor": "#141314", "width": "100%", "height": "100%", "padding": "1em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start"}}>
  <HStack>
  <ChakraImage src={`db.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} sx={{"paddingY": "1em", "paddingRight": "1em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`MySQL.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Instalaciones de BBDD.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Conocimientos básicos SQL.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Gestión de usuarios y privilegos.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`En proceso de ampliar conocimientos.`}
</Text>
</VStack>
</HStack>
</Box>
  <Box sx={{"spacing": "0.5em", "backgroundColor": "#141314", "width": "100%", "height": "100%", "padding": "1em", "borderRadius": "1em", "whiteSpace": "normal", "textAlign": "start"}}>
  <HStack>
  <ChakraImage src={`thm.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} sx={{"paddingY": "1em", "paddingRight": "1em"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Desarrollo.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`Estoy empezando en el mundo de la programación y estoy aprendiendo estos lenguajes en mis ratos libres.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`REFLEX, es el framework con el que está desarrollada esta página.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`PYTHON.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`HTML.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`CSS.`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB", "fontFamily": "Poppins-Light"}}>
  {`JS.`}
</Text>
</VStack>
</HStack>
</Box>
</VStack>
</TabPanel>
</TabPanels>
</Tabs>
  <Spacer/>
  <VStack sx={{"marginBottom": "2em", "color": "#A3ABB2", "paddingBottom": "2em"}}>
  <Link as={NextLink} href={`https://tryhackme.com/p/persicore`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`https://tryhackme-badges.s3.amazonaws.com/persicore.png`}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/adriánpérezvecina`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  {`2024 El año de los cambios`}
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "Opx !important", "fontFamily": "Comforta"}}>
  {`Port folio de Adrián`}
</Text>
</VStack>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`Portfolio Adrián | Conóceme un poco más`}
</title>
  <meta content={`Soy Adrian y gracias por visitar mi nido`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
