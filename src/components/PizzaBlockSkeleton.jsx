import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockSkeleton = (props) => (
    <ContentLoader
        speed={5}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        className="pizza-block"
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="270" rx="2" ry="2" width="280" height="27" />
        <rect x="0" y="317" rx="10" ry="10" width="280" height="87" />
        <rect x="0" y="433" rx="2" ry="2" width="89" height="27" />
        <rect x="130" y="424" rx="22" ry="22" width="150" height="45" />
    </ContentLoader>
)

export default PizzaBlockSkeleton