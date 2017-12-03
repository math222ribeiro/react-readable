import React, { Component } from 'react';
import PlusSign from '../assets/Plus-Sign.png';
import UpVoteButton from '../assets/Plus-Button.png';
import DownVoteButton from '../assets/Minus-Button.png';
import EditButton from '../assets/Edit-Button.png';
import DeleteButton from '../assets/Delete-Button.png';

class App extends Component {
  render() {
    return (<div>
      <header className="nav">
        <div className="logo-container">
          <a href="#">Readable</a>
        </div>

        <div className="new-btn">
          <a href="#">
            <img src={PlusSign}/>
            <span className="new-text">New</span>
          </a>
        </div>
      </header>

      <div className="container">

        <div className="filter-container">
          <span className="matches-number">0</span> matches
          <select className="category-select">
            <option>o</option>
            <option>o</option>
            <option>o</option>
          </select>

          <select className="sort-select">
            <option>o</option>
            <option>o</option>
            <option>o</option>
          </select>

        </div>

        <div className="posts-container">
          <div className="post">
            <h2 className="post-title">Super Awesome Post Title</h2>
            <h4 className="post-author">Matheus Ribeiro</h4>
            <p className="post-body">
              Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.
            </p>

            <p className="post-vc">
              103 Votes - 900 Comments
            </p>

            <div className="post-buttons">
              <img src={UpVoteButton} style={{marginLeft: '0px'}} />
              <img src={DownVoteButton} />
              <img src={EditButton} />
              <img src={DeleteButton} />
            </div>
          </div>

          <div className="post">
            <h2 className="post-title">Super Awesome Post Title</h2>
            <h4 className="post-author">Matheus Ribeiro</h4>
            <p className="post-body">
              Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.
            </p>

            <p className="post-vc">
              103 Votes - 900 Comments
            </p>

            <div className="post-buttons">
              <img src={UpVoteButton} style={{marginLeft: '0px'}} />
              <img src={DownVoteButton} />
              <img src={EditButton} />
              <img src={DeleteButton} />
            </div>
          </div>
        </div>
      </div>


    </div>);
  }
}

export default App;
