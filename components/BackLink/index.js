import React from 'react'

import { FormArea } from '../Doctor/doctor.styled'
import {
  LinkArea,
  LinkText,
  MainLink,
  RightOutlinedIcon,
} from './backlink.styled'
import {
  HideDisplayContents,
  HideDisplayMobile,
} from '../Dashboard/dashboardmobile.styled'
import TooltipPositioned from '../TooltipPositioned'

function BackLink({ myLinks = [], type, children }) {
  return (
    <FormArea justify="space-between" align="center" type={type}>
      <LinkArea type={type}>
        {myLinks.length > 0 &&
          myLinks.map((link, key) => (
            <MainLink key={key}>
              {/* For Mobile */}
              <HideDisplayContents>
                <LinkText
                  href={link.path}
                  key={link.id}
                  underline={link.underline}
                  strong
                >
                  {link?.label?.length > 27
                    ? `${link.label?.slice(0, 26)}...`
                    : link?.label}
                </LinkText>

                {link.forward && (
                  <>
                    <RightOutlinedIcon />
                  </>
                )}
              </HideDisplayContents>

              {/* For Desktop */}
              <HideDisplayMobile>
                <TooltipPositioned position="top">
                  <LinkText
                    href={link.path}
                    key={link.id}
                    underline={link.underline}
                    strong
                  >
                    {link?.label?.length > 45
                      ? `${link.label?.slice(0, 65)}...`
                      : link?.label}
                  </LinkText>
                </TooltipPositioned>
                {link.forward && (
                  <>
                    <RightOutlinedIcon />
                  </>
                )}
              </HideDisplayMobile>
            </MainLink>
          ))}
      </LinkArea>
      {type === 'desktop' && <MainLink>{children}</MainLink>}
    </FormArea>
  )
}

export default BackLink
