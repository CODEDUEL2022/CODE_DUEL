import React from 'react';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="titles">
          <div className="subtitle">programming card battle</div>
          <div className="title">CODE DUEL</div>
        </div>
        <div className="auth">
          <a href="http://localhost:3000/auth/google" className="signin">
            &gt; TAP to PLAY
          </a>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: linear-gradient(180deg, rgb(2, 5, 8, 100%), rgb(20, 79, 97, 100%));
          height: 100svh;
          width: 100%;
          .titles {
            text-align: center;
            height: 60%;
            .subtitle {
              color: #fff;
              font-size: 1.5cqw;
              font-weight: 100;
              letter-spacing: 0.1cqw;
              font-family: Gill Sans, sans-serif;
              padding-top: 8%;
              padding-bottom: 4%;
              text-shadow: 0 0 5px #d3fffd;
            }
            .title {
              color: #fff;
              font-size: 5cqw;
              letter-spacing: 1cqw;
              font-weight: 100;
              font-family: Gill Sans, sans-serif;
              text-shadow: 0 0 10px #d3fffd;
            }
          }
          .auth {
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            .signin {
              color: #fff;
              font-size: 2.5cqw;
              letter-spacing: 0.3cqw;
              text-decoration: none;
              font-weight: 100;
              font-family: Gill Sans, sans-serif;
              text-shadow: 0 0 5px #d3fffd;
              transition: all 0.4s;
            }
            .signin:hover {
              text-shadow: 0 0 20px #d3fffd;
            }
          }
        }
      `}</style>
    </>
  );
};
