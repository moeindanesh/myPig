import Head from 'next/head';


const Header = () => (
    <div>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
        </Head>
        <h1 style={headerStyle}>My Pig</h1>
    </div>
);

export default Header;


const headerStyle = {
    margin:'0px',
    padding: '0px',
    lineHeight: '50px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    textAlign: 'center',
    color: '#FF473A',
    borderBottom: '1px solid #000'
}

