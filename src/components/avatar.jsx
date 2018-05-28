import React from 'react';
import SVG from "react-inlinesvg";

export default function Avatar(props) {
    const { body, face, skincolor, cloth, mouth, nose, eyes, eyebrow, hair, haircolor, glass, accessory } = props;
    return <svg viewBox="0 0 20 20" {...props}>
        <SVG src={body} style={{ fill: skincolor }} wrapper={React.createFactory("svg")} />
        <SVG src={face} style={{ fill: skincolor }} wrapper={React.createFactory("svg")} />
        <SVG src={cloth} wrapper={React.createFactory("svg")} />
        <SVG src={mouth} wrapper={React.createFactory("svg")} />
        <SVG src={nose} wrapper={React.createFactory("svg")} />
        <SVG src={eyes} wrapper={React.createFactory("svg")} />
        <SVG src={eyebrow} wrapper={React.createFactory("svg")} />
        <SVG src={hair} style={{ fill: haircolor }} wrapper={React.createFactory("svg")} />
        <SVG src={glass} wrapper={React.createFactory("svg")} />
        <SVG src={accessory} wrapper={React.createFactory("svg")} />
      </svg>;
}

