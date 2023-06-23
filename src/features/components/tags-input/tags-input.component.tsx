import { PlatformTypes } from "../../../swagger2Ts/interfaces"

import { StyledContainer, StyledTag } from './tags-input.style'

interface TagsInputComponentProps {
  tags: PlatformTypes[];
  name?: string;
  errors?: object;
}
const TagsInputComponent = (props: TagsInputComponentProps) => {

  return (
    <StyledContainer>
      {props.tags.map((item: PlatformTypes, id: number) => (
        <StyledTag key={id}>{item.tag}</StyledTag>
      ))}
    </StyledContainer>
  )
}

export default TagsInputComponent