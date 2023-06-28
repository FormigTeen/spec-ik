import React from 'react';
import {
    Box
} from 'spectacle';
import Png from "./Assets/jacobian.png"
import Right from "../../../Slides/Imager/Right";
import ReactKatex from "@pkasila/react-katex";

const JacobianExample = () => <Right src={Png}>
    <Box>
        <div style={{fontSize: '20px'}}>
            <div style={{marginBottom: '50px'}}>
                <ReactKatex>
                    {
                        '$\\frac{{\\partial s_i}}{{\\partial \\theta_j}} = J(\\theta)_{ij}$'
                    }
                </ReactKatex>
            </div>
            <div>
                <ReactKatex>
                    {
                        '$\\Delta s \\approx J \\Delta \\theta$'
                    }
                </ReactKatex>
            </div>
        </div>
    </Box>
</Right>

export default JacobianExample
