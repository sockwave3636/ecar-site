import React from 'react'
import styled  from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
        title="Model S"
        description = "Order Online for touchless Delivery"
        backgroundImg ="model-s.jpg"
        leftBtnText="customer order"
        rightBtnText="Existing invintery"
         />
          <Section
        title="Tata E"
        description = "Order Online for touchless Delivery"
        backgroundImg ="tata-e.jpg"
        leftBtnText="customer order"
        rightBtnText="Existing invintery"
         />
          <Section
        title="Model X"
        description = "Order Online for touchless Delivery"
        backgroundImg ="model-x.jpg"
        leftBtnText="customer order"
        rightBtnText="Existing invintery"
         /> <Section
         title="Hundi"
         description = "Order Online for touchless Delivery"
         backgroundImg ="hun-1.jpg"
         leftBtnText="customer order"
         rightBtnText="Existing invintery"
          />
          <Section
        title="Model Y"
        description = "Order Online for touchless Delivery"
        backgroundImg ="model-y.jpg"
        leftBtnText="customer order"
        rightBtnText="Existing invintery"
         /> <Section
         title="Model 3"
         description = "Order Online for touchless Delivery"
         backgroundImg ="model-3.jpg"
         leftBtnText="customer order"
         rightBtnText="Existing invintery"
          />
          <Section
         title="Lowest Cost Solar Panels in America"
         description = "Money back gurentee"
         backgroundImg ="solar-panel.jpg"
         leftBtnText="order now"
         rightBtnText="Learn more"
          />
          <Section
         title="Solar Roof"
         description = "Solar roof cost you less than"
         backgroundImg ="solar-roof.jpg"
         leftBtnText="order now"
         rightBtnText="Learn more"
          />
          <Section
         title="accessories"
         description = ""
         backgroundImg ="accessories.jpg"
         leftBtnText="Shop now"
         rightBtnText=""
          />
    </Container>
  )
}

export default Home

const Container = styled.div`
hight: 100vh;

`