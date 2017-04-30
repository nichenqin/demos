import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    const avg = Math.round(props.data.reduce((prev, curr) => prev + curr, 0) / props.data.length);

    return (
        <div>
            <Sparklines data={props.data} height={120} width={180}  >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{avg}</div>
        </div>
    );
};