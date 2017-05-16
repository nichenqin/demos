import React from "react";

export default (props) => {
    const { ups, downs } = props;

    const upsPercent = `${100 * (ups / (ups + downs))}%`;
    const downsPercent = `${100 * (downs / (ups + downs))}%`;

    return (
        <div>
            Up/Downs
            <div className="progress">
                <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
                <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
            </div>
        </div>
    );
};
