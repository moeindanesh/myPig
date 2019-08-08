function Icon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} fill="none" viewBox="0 0 11 11">
        <circle cx="5.5" cy="5.5" r="5.5" fill="#2D9AFF" />
      </svg>
    );
}

export default Icon;


// Style

const iconStyle = {
    width: '10px',
    height: '10px',
    position: 'absolute',
    marginLeft: '-6px',
    marginTop: '13px'
}