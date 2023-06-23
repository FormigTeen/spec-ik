import {FlexBox, Heading, Slide} from "spectacle";
import React from "react";

export const Title = ({ title, subTitle, titleSize, subTitleSize }) => <Slide>
    <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize={titleSize ?? '150px'}>
            { title }
        </Heading>
        <If condition={(subTitle ?? "").length}>
            <Heading margin="0px 32px" color="primary" fontSize={subTitleSize ?? 'h3'}>
                {subTitle}
            </Heading>
        </If>
    </FlexBox>
</Slide>

export default Title
