import Icon from "./IconInterface"

const BackArrowIcon: React.FC<Icon> = ({ onClick, className, styles }) =>
(
    <div onClick={onClick} style={styles} className={`${className} BackArrowIcon`}>
        <svg
            id="svg3655"
            viewBox="0 0 612 612"
            version="1.0"
        >
            <g
                id="g3665"
                transform="translate(-.0819 -.58539)"
            >
                <path
                    id="path3667"
                    style={{
                        stroke: '#ffffff',
                        strokeWidth: 3.408,
                        fill: '#000000'
                    }}
                    d="m82.432 17.924c-41.335 0-64.571 21.371-64.571 65.036v450.12c0 40.84 20.891 62.23 62.192 62.23h452.03c41.3 0 62.22-20.32 62.22-62.23v-450.12c0-42.6-20.92-65.036-63.52-65.036 0 0-448.49-0.142-448.35 0z"
                />
                <path
                    id="path3669"
                    style={{
                        fill: '#ffffff'
                    }}
                    d="m482.16 342.52l-180.2 180.2-180.2-180.2v-118.85l137.06 137.06v-269.34l87.23 0.002v268.38l136.32-136.32-0.21 119.07z"
                />
            </g>
        </svg>
    </div>
)


export default BackArrowIcon