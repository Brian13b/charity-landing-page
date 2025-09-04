function CurvedArrow() {
  return (
    <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
      <path 
        d="M10 30 C20 0, 35 0, 50 30 C65 50, 80 0, 95 20" 
        stroke="black" 
        strokeWidth="1" 
        fill="none" 
        markerEnd="url(#arrowhead)" 
      />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="black" />
        </marker>
      </defs>
    </svg>
  );
}

export default CurvedArrow;
