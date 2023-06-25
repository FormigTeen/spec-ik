import {Box, FlexBox, Heading, Slide} from "spectacle";
import ReactKatex from "@pkasila/react-katex";
import React from "react";

const LatexSimple = ({ title, children }) => <Slide>
        <Heading>{ title }</Heading>
        <FlexBox flexDirection="column" height="100%">
            <Box>
                <div style={{fontSize: '40px'}}>
                    <ReactKatex>
                        { children }
                    </ReactKatex>
                </div>
            </Box>
        </FlexBox>
    </Slide>

export default LatexSimple
