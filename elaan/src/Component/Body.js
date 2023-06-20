import React, { useState } from 'react';

function Body() {
  const GameComponent = () => {
    const [number, setNumber] = useState(1);

    const play = () => {
      setNumber(1);
    };

    const random = () => {
      const diceValues = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      const diceRoll = Math.ceil(Math.random() * 6);

      const newNumber = number + diceRoll <= 100 ? number + diceRoll : number;

      setNumber(newNumber);
      document.getElementById('dice').innerHTML = diceValues[diceRoll];
    };

    const renderBoardBoxes = () => {
      const boardBoxes = [];

      for (let i = 100; i >= 1; i--) {
        const classNames = `boardbox ${i % 10 === 0 ? 'right' : 'left'}`;
        const imgSrc =
          i === number
            ? 'http://www.freepngimg.com/thumb/chess/9-chess-pawn-png-image-thumb.png'
            : '';

        boardBoxes.push(
          <div className={classNames} key={i}>
            {imgSrc && <img className="img" src={imgSrc} alt="" />}
          </div>
        );
      }

      return boardBoxes;
    };

    return (
      <div>
        <div className="out">{renderBoardBoxes()}</div>
        <div className="mn"></div>
        <br />
        <br />
        <br />
        <center>
          <br />
          <br />
          <br />
          <button id="dice" onClick={random}>
            <h4>Press Here</h4>
          </button>
        </center>
      </div>
    );
  };

  const divStyle = {
    backgroundImage: 'url("./images/bg.jpg")',
   
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };
  const navbarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust the transparency here (0.8 represents 80% opacity)
    backdropFilter: 'blur(10px)', // Add a blur effect
  };

  return (
    <div>
      <div style={divStyle}>
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand navbar-primary sticky-top" style={navbarStyle}>
          <ul className="navbar-nav mr-auto" style={{ margin: 'auto' }}>
            <li className="nav-link active">
              <img src="./images/clublogo.png" alt="Club Logo" />
            </li>
          </ul>
          <button
            type="button"
            className="btn btn"
            style={{ width: '150px', height: '50px', marginTop: "2px", borderRadius: "50px", fontWeight: 'bold', color:"#0B5ED7", backgroundColor:"white" }}
          >
            <a className="navbar-brand" href="#" style={{ color: "#0B5ED7", fontWeight: 'bold' }}>
              ऐlaan
            </a>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '300px', height: '50px', marginTop: "2px", borderRadius: "50px", fontWeight: 'bold' }}
          >
            Player Name: <span id="playerName">Pratyush</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
        </nav>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <br />
          <button
            type="button"
            className="btn btn"
            style={{alignItems:"center", width: '200px', height: '80px', marginTop: "2px", borderRadius: "50px", fontWeight: 'bold', color:"#0B5ED7", backgroundColor:"white" }}
          >
            <a className="navbar-brand" href="#" style={{ color: "#0B5ED7", fontWeight: 'bold',fontSize: '2.8rem'  }}>
              ऐlaan
            </a>
          </button>
          <br />
          <br />
          <div
            className="card mx-auto"
            style={{ width: '30rem', alignItems: 'center', justifyContent: 'center', borderRadius:"20px", borderColor:"white" ,  backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)',}}
          >
            <div className="card-body">
              <h2 className="card-title" style={{color:"white"}}>Message Box</h2>
              <p className="card-text">
                <span id="taskMessage" style={{color:"white", fontSize:"1.3rem"}}>Display Message here from Backend!</span>
              </p>
            </div>
          </div>
          <br />
        </div>
        <div style={{ textAlign: 'center' }}>
          <style>
            {`
            h2 {
              text-align: center;
              padding: 6px;
              color: white;
            }
            .out {
              height: 525px;
              width: 525px;
              background-image: url("./images/board.jpg");
              background-size: 525px 525px;
              background-repeat: no-repeat;
              float: center;
              border-radius: 20px;
            }
            .mn {
              height: 500px;
              width: 500px;
              position: absolute;
              top: 90px;
              left: 20px;
            }
            #side {
              height: 500px;
              width: 200px;
              margin-left: 500px;
            }
            .btn {
              height: 40px;
              width: 100px;
              margin-left: 50px;
              margin-top: 50px;
              border-radius: 5px;
              color: white;
            }
            .boardbox {
              height: 50px;
              width: 50px;
              z-index: -1;
            }
            .left {
              float: left;
            }
            .right {
              float: right;
            }
            .img {
              height: 45px;
              width: 50px;
              margin: 2px 0px 3px 0px;
            }
            #dice {
              height: 80px;
              width: 80px;
              font-size: 70px;
              display: flex;
              color: #0B5ED7;
              margin: auto;
              border: none;
              align-items: center;
              justify-content: center;
              align-content: center;
              border-radius: 10%;
              background-color: white;
            }
          `}
          </style>
          <GameComponent />
          <br/>
          <br/>
          <div style={{ color: 'white', textAlign: 'center', fontSize:"1.5rem" }}>
            <h2>Directions</h2>
            <br/>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div className="card" style={{ width: '4.5rem', margin: '0 5px', borderRadius: '50%' , backgroundColor:"#0B5ED7", color:"white"}}>
    <div className="card-body">
      <h3 className="card-title"  style={{ fontWeight: 'bold'}}>&uarr;</h3>
    </div>
  </div><br/>&nbsp;&nbsp;&nbsp;
  <div className="card" style={{ width: '4.5rem', margin: '0 0 0 -5px', borderRadius: '50%',  backgroundColor:"#0B5ED7", color:"white" }}>
    <div className="card-body">
      <h3 className="card-title" style={{ fontWeight: 'bold'}}>&darr;</h3>
    </div>
  </div>
</div>
<br/>
<center><h5>Made by Tech Team - iOS Club !</h5></center>
<br/>
<br/>
<br/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
