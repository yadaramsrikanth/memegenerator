import {Component} from 'react'

import {
  Heading,
  MainContainer,
  FormContainer,
  LabelElement,
  InputElement,
  InputBoxContainer,
  SelectElement,
  OptionElement,
  GenerateButton,
  MemeContainer,
  ParaGraphElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    activeOptionId: fontSizesOptionsList[0],
    imageUrl: '',
    topText: '',
    bottomText: '',
    imageUrlGenerating: '',
    shownTopText: '',
    shownBottomtext: '',
    shownFontSize: '',
  }

  onChangeSelectFontSize = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onSubmitForm = event => {
    const {activeOptionId, imageUrl, topText, bottomText} = this.state
    event.preventDefault()
    this.setState({
      imageUrlGenerating: imageUrl,
      shownBottomtext: bottomText,
      shownTopText: topText,
      shownFontSize: activeOptionId,
    })
  }

  render() {
    const {
      shownBottomtext,
      shownTopText,
      shownFontSize,
      imageUrlGenerating,
      activeOptionId,
      topText,
      bottomText,
      imageUrl,
    } = this.state
    return (
      <MainContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          <InputBoxContainer>
            <LabelElement htmlFor="InputUrl">Image URL</LabelElement>
            <InputElement
              placeholder="Enter the Image URL"
              id="InputUrl"
              value={imageUrl}
              onChange={this.onChangeImageUrl}
            />
          </InputBoxContainer>
          <InputBoxContainer>
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              placeholder="Enter the Top Text"
              id="topText"
              value={topText}
              onChange={this.onChangeTopText}
            />
          </InputBoxContainer>
          <InputBoxContainer>
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              placeholder="Enter the Bottom Text"
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
          </InputBoxContainer>
          <InputBoxContainer>
            <LabelElement htmlFor="selectElement">Font Size</LabelElement>
            <SelectElement
              id="selectElement"
              value={activeOptionId}
              onChange={this.onChangeSelectFontSize}
            >
              {fontSizesOptionsList.map(eachOptionId => {
                return (
                  <OptionElement
                    key={eachOptionId.optionId}
                    value={eachOptionId.optionId}
                  >
                    {eachOptionId.displayText}
                  </OptionElement>
                )
              })}
            </SelectElement>
          </InputBoxContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
        <MemeContainer data-testid="meme" backgroundImage={imageUrlGenerating}>
          <ParaGraphElement fontSize={shownFontSize}>
            {shownTopText}
          </ParaGraphElement>
          <ParaGraphElement fontSize={shownFontSize}>
            {shownBottomtext}
          </ParaGraphElement>
        </MemeContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
