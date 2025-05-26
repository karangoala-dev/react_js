const ProgressBar = ({progress}) => {
    return (
        <div className="outer">
            {/* role, aria-valuenow, aria-valuemax, aria-valuemin are added 
            to communicate dynamic visual information (like progress) to users who rely on screen readers. */}
            <div className="inner" 
            style={{ width: `${progress}%` , color: progress < 5 ? "Black": "White"}} 
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100">
                {progress} %
            </div>
        </div>
    );
}

export default ProgressBar;