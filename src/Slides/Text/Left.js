import {Box, FlexBox, Heading, Slide} from "spectacle";
import React from "react";

const Left = ({ children, title }) => <Slide>
    <FlexBox flexDirection="row" alignItems="start" flex={1}>
        <Box width="100%" height="100%">
            <FlexBox flexDirection="column" height="100%">
                <Box>
                    { children }
                </Box>
            </FlexBox>
        </Box>
        <Box width="100%" height="100%">
            <FlexBox flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                <Heading margin="0px" fontSize="50px">
                    { title }
                </Heading>
            </FlexBox>
        </Box>
    </FlexBox>
</Slide>

export default Left
