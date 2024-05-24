import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
  DescriptionContact,
  TextContainerContact,
  WrapperContact
} from "./style";
import InputContact from "./InputContact";
import styled from "styled-components";
import { Section } from "../../App";

const AnimatedWrapper = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function ContactComponent(props) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true 
  });

  return (
    <div className="h-screen w-screen relative bg-[#000000]">
      <Section>
        <WrapperContact>
          <AnimatedWrapper ref={ref} className={inView ? "is-visible" : ""}>
            <TextContainerContact>
              <DescriptionContact className="text-yellow-400 otffont tracking-widest">Ready to take it to the next level? drop us a line.</DescriptionContact>
            </TextContainerContact>
            <InputContact />
          </AnimatedWrapper>
        </WrapperContact>
      </Section>
    </div>
  );
}
