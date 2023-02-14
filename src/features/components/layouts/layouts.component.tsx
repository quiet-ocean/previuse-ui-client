import React from 'react';
import { MenuItem } from '@material-ui/core';

import { Platform } from '../../../swagger2Ts/enums';
import { PlatformPostSerializerMaster } from '../../../swagger2Ts/interfaces';
import StyledContainer from './layouts.styles';

export interface LayoutsComponentProps {
  posts: Record<Platform, PlatformPostSerializerMaster[]>;
  selectedPost?: PlatformPostSerializerMaster;
  onPostClick: (post: PlatformPostSerializerMaster) => void;
}

const LayoutsComponent: React.FC<LayoutsComponentProps> = (props) => {
  return (
    <StyledContainer>
      {Object.keys(props.posts).map((platform) => {
        return (
          <div key={platform}>
            <>
              <div className='title'>{platform}</div>
              <div className='list'>
                {props.posts[platform as Platform].map((post) => {
                  return (
                    <div
                      onClick={props.onPostClick.bind(null, post)}
                      key={post.id}
                    >
                      <MenuItem
                        className={props.selectedPost && props.selectedPost.id === post.id ? 'selected' : undefined}
                      >

                      </MenuItem>
                    </div>
                  )
                })}
              </div>
            </>
          </div>
        )
      })}
    </StyledContainer>
  );
}

export default LayoutsComponent;