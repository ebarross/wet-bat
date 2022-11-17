import React from "react";

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props) {
  return (
    <div>
      <header></header>
      <aside>
        <nav></nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
