import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { PropTypes } from "prop-types";
// import { Square as _Square, MagicLines } from "..";
// import cce from 'classnames';
// import { BreakParagraph } from "react-break-paragraph";
import { Motion, spring } from "react-motion";
// import {
//   MagicText,
//   MagicTextContainer
// } from "../UI";

// export const MagicSpanContainer = styled.span`
//   display: inline-block;
//   overflow-y: hidden;
//   height: 25px;
// `;

// export const MagicSpan = styled.span`
//   display: inline-block;
//   height: 25px;
//   transform: translate(0px, ${({ y }) => y}px);
// `;

// export const MagicTextContainer = styled.div`
//   background-color: rgb(241, 228, 117);
//   display: inline-block;
//   overflow: hidden;
// `;

// export const MagicText = styled.h1`
//   margin: 0;
//   transform: translate(${({ show }) => (show ? "0" : "100%")}, 0px);
//   transition: transform 1.5s;
//   background-color: ivory;
// `;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  width: 100vw;
  margin-top: 90px;
  margin-bottom: 200px;
  padding-right: 50px;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  margin-top: 2.75em;
  z-index: -1;
  background: ${({ background }) => background || 300};
  height: 250pxpx;
  overflow: hidden;
`;

const RightSide = styled.div`
  position: absolute;
  left: ${({ theme: { imageWidth } }) => 100 - imageWidth || 40}%;
  width: ${({ theme: { imageWidth } }) => imageWidth || 60}%;
  top: 0;
  overflow-x: hidden;
`;

// const RightSideForSquare = styled(RightSide)`
//   overflow-x: initial;
//   z-index: 2;
//   top: 2.5em;
//   cursor: pointer;
//   height: ${({ height }) => `${height}px` || 'auto'};
// `;

// const LeftBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 40px;
// `;

const RightBox = styled.div`
  width: ${({ theme: { mainBoxWidth } }) => mainBoxWidth || 630}px;
  padding-left: 25px;
  position: relative;
`;

const Quote = styled.p`
  width: 55%;
  padding-right: 90px;
  padding-top: 30px;
  font-size: 20px;
  font-family: Arial;
`;

const H1 = styled.h1`
  font-size: 3em;
  margin-top: 70px;
`;

const RightSideH1 = styled(H1)`
  color: rgb(241, 228, 117);
  position: absolute;
  margin-left: -${({ theme: { imageWidth } }) => imageWidth || 60}%;
  z-index: 1;
`;

// const Square = styled(_Square)`
//   transform: translate(-50%, -50%);
//   width: 50px;
//   height: 50px;
// `;

export default class OddRow extends Component {
  static propTypes = {
    number: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    imageWidth: PropTypes.number, // unit: %
    mainBoxWidth: PropTypes.number,
    show: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      imageLoaded: false,
      imageHeight: 0,
      moveImageDown: 0,
      imageTopOffset: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const moveImageDown = Math.min(
      50,
      Math.max(-50, (this.state.imageTopOffset - window.scrollY) / 10)
    );
    this.setState({
      moveImageDown
    });
  };

  onMouseOver = () => {
    this.setState({
      hover: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  Section = props => {
    const { imageWidth, mainBoxWidth, show } = this.props;
    const { imageHeight } = this.state;
    return (
      <ThemeProvider
        theme={{
          imageWidth,
          mainBoxWidth,
          imageHeight,
          show
        }}
      >
        {props.children}
      </ThemeProvider>
    );
  };

  setImageHeight = e => {
    this.setState({
      imageHeight: e.target.offsetHeight
    });
  };

  onImageLoad = e => {
    this.setImageHeight(e);
    this.setState({
      imageLoaded: true
    });
  };

  // renderLines = lines => {
  //   const { show } = this.props;
  //   return <MagicLines lines={lines} show={show} TextElement={Quote} />;
  // };

  setImageOffsetTop = elem => {
    setTimeout(() => {
      this.setState({
        imageTopOffset: elem.getBoundingClientRect().top + window.scrollY
      });
    });
  };

  render() {
    const {
      number,
      headline,
      imgSrc,
      quote,
      imageWidth,
      mainBoxWidth,
      show
    } = this.props;

    // const _quote = Array.isArray(quote) ? quote : [quote];

    const Section = this.Section;

    return (
      <Section>
        <Container>
          {/* <LeftBox>
            <MagicTextContainer>
              <MagicText show={show}>{number}</MagicText>
            </MagicTextContainer>
          </LeftBox> */}
          <Quote>{quote}</Quote>
          <RightBox>
            <H1>{headline}</H1>

            {/* {_quote.map((q, i) => (
              <BreakParagraph
                key={i}
                renderPlaceholder={children => <Quote>{children}</Quote>}
                renderLines={this.renderLines}
                paragraph={q}
            /> ))} */}
            {/* <RightSideForSquare
              height={this.state.imageHeight}
              onMouseOver={this.onMouseOver}
              onMouseLeave={this.onMouseLeave}>
              <Square className={cce({ hover: this.state.hover })}/>
            </RightSideForSquare> */}
            <RightSide>
              <RightSideH1>{headline}</RightSideH1>
              <ImageContainer>
                <div ref={this.setImageOffsetTop} />
                <Motion style={{ moveDown: spring(this.state.moveImageDown) }}>
                  {({ moveDown }) => (
                    <Image
                      style={{
                        transform: `scale(1.5) translate(0, ${(moveDown || 0) -
                          this.state.imageHeight * 0.25}px)`
                      }}
                      onLoad={this.onImageLoad}
                      src={imgSrc}
                      moveDown={moveDown}
                      alt=""
                    />
                  )}
                </Motion>
              </ImageContainer>
            </RightSide>
          </RightBox>
        </Container>
      </Section>
    );
  }
}
