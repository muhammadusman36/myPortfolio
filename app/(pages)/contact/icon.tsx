import { ImageResponse } from 'next/server'
import React from 'react'

export const size = {
    height: 32,
    width: 32
}

export const contentType = "image/png"
export default function icon() {
    return new ImageResponse((
        <div style={{
            fontSize: 20,
            background: "hsl(150, 84%, 67%)",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", color: "#000", borderRadius: "5px"
        }}>&lt;C&gt;</div>
    ), size)
}
