const Circle = ({
    top,
    left,
    bottom,
    right,
    backgroundColor,
}: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    backgroundColor?: string;
}) => {
    return (
        <div
            style={{ top, left, bottom, right, backgroundColor }}
            className="circle"
        />
    );
};

export default Circle;
