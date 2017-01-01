import * as React from "react";
import * as LiveSplit from "../livesplit";

export interface Props { split: LiveSplit.SplitState };

export class Component extends React.Component<Props, undefined> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <span className={this.props.split.is_current_split ? "split current-split" : "split"}>
                <div className="split-name">{this.props.split.name}</div>
                <div className={this.props.split.delta.indexOf('+') == 0 ? "split-delta time-behind" : "split-delta"}>{this.props.split.delta}</div>
                <div className="split-time">{this.props.split.time}</div>
            </span>
        );
    }
}
