import React, { Component } from 'react'
import SidebarChannelRow from './SidebarChannelRow'

export default class Sidebar extends Component {
    render() {
        const channels = [
            {
                id: 0,
                name: "previous-class-recordings",
                hasUnreadPosts: false
            },
            {
                id: 3,
                name: "random",
                hasUnreadPosts: true
            },
            {
                id: 4,
                name: "general",
                hasUnreadPosts: false
            }
        ]

        return (
            <div>
                <h2>Sidebar</h2>
                <ul>
                    { channels.map( channel => <SidebarChannelRow key={ channel.id } channel={channel} /> ) }
                </ul>
            </div>
        )
    }
}

