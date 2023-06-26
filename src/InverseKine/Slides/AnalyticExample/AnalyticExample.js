import React from 'react';
import {
    Box
} from 'spectacle';
import Png from "./Assets/case.png"
import Right from "../../../Slides/Imager/Right";
import ReactKatex from "@pkasila/react-katex";

const AnalyticExample = () => <Right src={Png}>
    <Box>
        <div style={{fontSize: '20px'}}>
            <div style={{marginBottom: '50px'}}>
                <ReactKatex>
                    {
                        '$\\theta_1 = \\cos^{-1}\\left(\\frac{l_1^2 + x^2 + y^2 - l_2^2}{2l_1 \\sqrt{x^2 + y^2}}\\right) \\quad$'
                    }
                </ReactKatex>
            </div>
            <div>
                <ReactKatex>
                    {
                        '$\\theta_2 = \\cos^{-1}\\left(\\frac{l_1^2 + l_2^2 - (x^2 + y^2)}{2l_1l_2}\\right) \\quad\n$'
                    }
                </ReactKatex>
            </div>
        </div>
    </Box>
</Right>

export default AnalyticExample
