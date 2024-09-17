const AnimatedQIcon = () => (
  <div style={{ width: '5vw', height: '5vh' }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="#DE1D8D" strokeWidth="5" fill="none" />
      <circle cx="50" cy="50" r="30" stroke="#A100F2" strokeWidth="5" fill="none" />
      <line x1="70" y1="70" x2="90" y2="90" stroke="#DE1D8D" strokeWidth="5" />
      <line x1="65" y1="65" x2="90" y2="90" stroke="#A100F2" strokeWidth="5" />
      <style>
        {`
          circle, line {
            stroke-dasharray: 250;
            stroke-dashoffset: 250;
            animation: draw 2s forwards infinite alternate;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </svg>
  </div>
);

export default AnimatedQIcon;
