export function SlideArrow({ direction }) {
  return (
    <button id={"arrow-"+direction}>
      <div>
        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}>
          <g>
            <path d="M7.4,9.7l5.8-4.8c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4l-5.8,4.8 c-0.4,0.4-1,0.4-1.4,0l0,0C7,10.7,7,10.1,7.4,9.7z"></path>
            <path d="M7.2,11.1L1.4,6.3C1,5.9,1,5.3,1.4,4.9l0,0c0.4-0.4,1-0.4,1.4,0l5.8,4.8c0.4,0.4,0.4,1,0,1.4 l0,0C8.3,11.5,7.6,11.5,7.2,11.1z"></path>
          </g>
        </svg>
      </div>
    </button>
  );
}
