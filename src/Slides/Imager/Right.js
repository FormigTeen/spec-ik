import {Box, FlexBox, Image, Slide} from "spectacle";
import React from "react";

const Right = ({ children, src }) => <Slide>
    <FlexBox flexDirection="row" alignItems="start" flex={1}>
        <Box width="100%" height="100%">
            <FlexBox flexDirection="column" height="100%">
                { children }
            </FlexBox>
        </Box>
        <Box width="100%" height="100%">
            <FlexBox flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                <Image src={src} />
            </FlexBox>
        </Box>
    </FlexBox>
</Slide>

export default Right
