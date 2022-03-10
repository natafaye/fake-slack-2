import React, { Component } from 'react'

export default class SidebarChannelRow extends Component {
    render() {

        return (
            <li className={"channel-row" + (this.props.channel.hasUnreadPosts) ? " text-bold" : ""}>
                # {this.props.channel.name}
            </li>
        )
    }
}
