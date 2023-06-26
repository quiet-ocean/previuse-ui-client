import React from 'react';
import { connect } from 'react-redux';

import { PlatformPostSerializerMaster, UserCreation, MediaFiles } from '../../../../../swagger2Ts/interfaces';

import StyledContainer, {
  StyledPostContent,
  StyledPostImage,
  StyledPostTitle,
  StyledActions,
  MuiAvatar,
  StyledPostFooter,
  StyledBlankLine,
  StyledBlankIcon,
} from './post-layout-twitter.styles';
import MockPostImage from '../../mock/post-image3.png';
import MockClientImage from '../../mock/client.png';
import ButtonComponent from '../../../button/button.component';

import { ReactComponent as Comment} from '../../../../../assets/images/comment-1.svg'
import { ReactComponent as Heart} from '../../../../../assets/images/heart-1.svg'
import { ReactComponent as Share} from '../../../../../assets/images/share-1.svg'
import { ReactComponent as Upload} from '../../../../../assets/images/upload.svg'
import { RootState } from '../../../../../common/models';

export interface TwitterPreviewComponentProps {
  post: PlatformPostSerializerMaster;
  media?: MediaFiles[]
}
export interface TwitterPreviewStateProps {
  users?: UserCreation[];
}

type Props = TwitterPreviewStateProps & TwitterPreviewComponentProps

const TwitterPreviewComponent: React.FC<Props> = (props) => {
  return (
    <StyledContainer>
      <div>
        <StyledPostTitle>
          <div className='avatar'>
            <MuiAvatar src={props.post.logo || MockClientImage} />
          </div>
          <div className='title'>
            <div>
              <h3 className='post-title'>{props.post.page_name}</h3>
              <p className='post-title'>@{props.post.user_name}</p>
            </div>
            <div className='description'>
              <p>{props?.media && props?.media[0].description}</p>
            </div>
          </div>
        </StyledPostTitle>
        <StyledPostContent>
          <StyledPostImage>
            <img src={props?.media && props?.media.length > 0 && props?.media[0]?.file_in || MockPostImage} alt='' />
          </StyledPostImage>
          <StyledActions>
            <div>
              <ButtonComponent type='icon' theme='natural' iconElement={<Comment />} />
              <ButtonComponent type='icon' theme='natural' iconElement={<Heart />} />
              <ButtonComponent type='icon' theme='natural' iconElement={<Share />} />
              <ButtonComponent type='icon' theme='natural' iconElement={<Upload />} />
            </div>
            <p className='post-subtitle'>Promoted</p>
          </StyledActions>
        </StyledPostContent>
      </div>
      <StyledPostFooter>
        <div className='avatar'>
          <div></div>
        </div>
        <div className='lines'>
          <div>
            <StyledBlankLine $width={`70%`} />
            <StyledBlankLine $width={`50%`} />
            <StyledBlankLine $width={`100%`} />
            <StyledBlankLine $width={`55%`} />
          </div>
          <div className='icons'>
            <StyledBlankIcon />
            <StyledBlankIcon />
            <StyledBlankIcon />
            <StyledBlankIcon />
          </div>
        </div>
      </StyledPostFooter>
    </StyledContainer>
  )
}

const mapStateToProps = (state: RootState): TwitterPreviewStateProps =>({
  users: state.app.auth.users,
})

export default connect(mapStateToProps)(TwitterPreviewComponent);