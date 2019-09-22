import * as React from "react";
import Glyph from "./Glyph";
import "./Header.css";

export interface IHeaderProps {
  name: string;
  nickname?: string;
  concept: string;
}

const Header: React.SFC<IHeaderProps> = props => {
  return (
    <header className="container">
      <div>
        <Glyph name="lerasium" big={true} />
      </div>
      <div className="bookended">
        <h1 className="name">{displayName(props.name, props.nickname)}</h1>
        <h2 className="concept">{props.concept}</h2>
      </div>
      <div>
        <Glyph name="atium" big={true} />
      </div>
    </header>
  );
};

export default Header;

const displayName: (name: string, nickname?: string) => string = (
  name,
  nickname
) => {
  if (nickname === undefined || nickname.trim() === "") {
    return name;
  }

  return `${name} - '${nickname}'`;
};
